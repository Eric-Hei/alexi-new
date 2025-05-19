'use client';

import React, { useState, useEffect } from 'react';
import { Comment, User, Role } from '@prisma/client';

interface CommentWithAuthor extends Comment {
  author: {
    firstName: string;
    lastName: string;
    role: Role;
  };
}

interface CommentListProps {
  comments: CommentWithAuthor[];
  currentUserRole: Role;
  onAddComment?: (content: string, isInternal: boolean) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  currentUserRole,
  onAddComment,
}) => {
  const [sortedComments, setSortedComments] = useState<CommentWithAuthor[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isInternal, setIsInternal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Déterminer si l'utilisateur peut voir les commentaires internes
  const canSeeInternalComments = [
    Role.ADMIN,
    Role.PREFECTURE,
    Role.CCAPEX,
    Role.SOCIAL_WORKER,
  ].includes(currentUserRole);

  useEffect(() => {
    // Filtrer les commentaires internes si nécessaire
    const filteredComments = canSeeInternalComments 
      ? comments 
      : comments.filter(comment => !comment.isInternal);
    
    // Trier les commentaires par date (du plus récent au plus ancien)
    const sorted = [...filteredComments].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    
    setSortedComments(sorted);
  }, [comments, canSeeInternalComments]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getRoleName = (role: Role): string => {
    const roleNames: Record<Role, string> = {
      TENANT: 'Locataire',
      LANDLORD: 'Bailleur',
      JUDICIAL_OFFICER: 'Commissaire de justice',
      MEDIATOR: 'Médiateur',
      SOCIAL_WORKER: 'Travailleur social',
      PREFECTURE: 'Préfecture',
      CCAPEX: 'CCAPEX',
      ADMIN: 'Administrateur',
    };
    return roleNames[role] || role;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.trim() || !onAddComment) return;
    
    setIsSubmitting(true);
    
    try {
      await onAddComment(newComment, isInternal);
      setNewComment('');
      setIsInternal(false);
    } catch (error) {
      console.error('Erreur lors de l\'ajout du commentaire:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fr-comments">
      {onAddComment && (
        <form onSubmit={handleSubmit} className="fr-mb-4w">
          <div className="fr-input-group">
            <label className="fr-label" htmlFor="comment-content">
              Ajouter un commentaire
            </label>
            <textarea
              className="fr-input"
              id="comment-content"
              name="comment-content"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows={3}
              required
            />
          </div>
          
          {canSeeInternalComments && (
            <div className="fr-checkbox-group fr-mt-2w">
              <input
                type="checkbox"
                id="comment-internal"
                name="comment-internal"
                checked={isInternal}
                onChange={(e) => setIsInternal(e.target.checked)}
              />
              <label className="fr-label" htmlFor="comment-internal">
                Commentaire interne (visible uniquement par l'administration)
              </label>
            </div>
          )}
          
          <div className="fr-mt-2w">
            <button 
              type="submit" 
              className="fr-btn" 
              disabled={isSubmitting || !newComment.trim()}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Ajouter'}
            </button>
          </div>
        </form>
      )}

      {sortedComments.length === 0 ? (
        <div className="fr-alert fr-alert--info">
          <p>Aucun commentaire à afficher.</p>
        </div>
      ) : (
        <div className="fr-comments-list">
          {sortedComments.map((comment) => (
            <div 
              key={comment.id} 
              className={`fr-comment fr-p-3w fr-mb-3w ${comment.isInternal ? 'fr-comment--internal' : ''}`}
            >
              <div className="fr-comment__header">
                <div className="fr-comment__author">
                  <strong>
                    {comment.author.firstName} {comment.author.lastName}
                  </strong>
                  <span className="fr-badge fr-badge--sm fr-ml-1w">
                    {getRoleName(comment.author.role)}
                  </span>
                  {comment.isInternal && (
                    <span className="fr-badge fr-badge--sm fr-badge--warning fr-ml-1w">
                      Interne
                    </span>
                  )}
                </div>
                <div className="fr-comment__date">
                  {formatDate(comment.createdAt)}
                </div>
              </div>
              <div className="fr-comment__content fr-mt-2w">
                {comment.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
