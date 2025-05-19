'use client';

import React, { useState, useEffect } from 'react';
import { Message, User } from '@prisma/client';

interface MessageWithSender extends Message {
  sender: {
    firstName: string;
    lastName: string;
  };
}

interface MessageListProps {
  messages: MessageWithSender[];
  currentUserId: string;
  onReply?: (messageId: string) => void;
  onMarkAsRead?: (messageId: string) => void;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  currentUserId,
  onReply,
  onMarkAsRead,
}) => {
  const [sortedMessages, setSortedMessages] = useState<MessageWithSender[]>([]);

  useEffect(() => {
    // Trier les messages par date (du plus récent au plus ancien)
    const sorted = [...messages].sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    setSortedMessages(sorted);
  }, [messages]);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleMarkAsRead = (messageId: string) => {
    if (onMarkAsRead && !messages.find(m => m.id === messageId)?.read) {
      onMarkAsRead(messageId);
    }
  };

  return (
    <div className="fr-messages-list">
      {sortedMessages.length === 0 ? (
        <div className="fr-alert fr-alert--info fr-mb-3w">
          <p>Aucun message à afficher.</p>
        </div>
      ) : (
        sortedMessages.map((message) => {
          const isFromCurrentUser = message.senderId === currentUserId;
          
          return (
            <div 
              key={message.id} 
              className={`fr-message fr-p-3w fr-mb-3w ${!message.read && !isFromCurrentUser ? 'fr-message--unread' : ''}`}
              onClick={() => handleMarkAsRead(message.id)}
            >
              <div className="fr-message__header">
                <div className="fr-message__sender">
                  <strong>
                    {isFromCurrentUser 
                      ? 'Vous' 
                      : `${message.sender.firstName} ${message.sender.lastName}`}
                  </strong>
                </div>
                <div className="fr-message__date">
                  {formatDate(message.createdAt)}
                </div>
              </div>
              <div className="fr-message__content fr-mt-2w">
                {message.content}
              </div>
              {onReply && !isFromCurrentUser && (
                <div className="fr-message__actions fr-mt-2w">
                  <button 
                    className="fr-btn fr-btn--sm fr-btn--secondary" 
                    onClick={() => onReply(message.id)}
                  >
                    Répondre
                  </button>
                </div>
              )}
              {!message.read && !isFromCurrentUser && (
                <div className="fr-badge fr-badge--sm fr-badge--new fr-mt-2w">Non lu</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default MessageList;
