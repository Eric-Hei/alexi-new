'use client';

import React, { useState } from 'react';

interface MessageComposerProps {
  onSend: (content: string) => void;
  recipientName?: string;
  placeholder?: string;
  buttonText?: string;
  isReply?: boolean;
}

const MessageComposer: React.FC<MessageComposerProps> = ({
  onSend,
  recipientName,
  placeholder = 'Écrivez votre message...',
  buttonText = 'Envoyer',
  isReply = false,
}) => {
  const [content, setContent] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsSending(true);
    
    try {
      await onSend(content);
      setContent('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      // Ici, vous pourriez afficher une notification d'erreur
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`fr-message-composer ${isReply ? 'fr-message-composer--reply' : ''}`}>
      {recipientName && !isReply && (
        <div className="fr-message-composer__header fr-mb-2w">
          <h3 className="fr-h5">Message à {recipientName}</h3>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="fr-input-group">
          <label className="fr-label" htmlFor="message-content">
            {isReply ? `Répondre à ${recipientName}` : 'Votre message'}
          </label>
          <textarea
            className="fr-input"
            id="message-content"
            name="message-content"
            placeholder={placeholder}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
          />
        </div>
        
        <div className="fr-mt-2w">
          <button 
            type="submit" 
            className="fr-btn" 
            disabled={isSending || !content.trim()}
          >
            {isSending ? 'Envoi en cours...' : buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageComposer;
