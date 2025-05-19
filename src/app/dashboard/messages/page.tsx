'use client';

import React, { useState, useEffect } from 'react';
import { Message, User } from '@prisma/client';
import MessageList from '@/components/messaging/MessageList';
import MessageComposer from '@/components/messaging/MessageComposer';

// Dans une implémentation réelle, ces données seraient chargées depuis l'API
const mockMessages = [
  {
    id: '1',
    createdAt: new Date('2025-05-15T10:30:00'),
    content: 'Bonjour, concernant votre dossier ALEXI-2025-12345, je souhaiterais discuter d\'un plan de remboursement.',
    read: true,
    readAt: new Date('2025-05-15T11:15:00'),
    senderId: 'tenant-1',
    recipientId: 'current-user',
    caseId: '1',
    sender: {
      firstName: 'Jean',
      lastName: 'Dupont',
    },
  },
  {
    id: '2',
    createdAt: new Date('2025-05-15T14:45:00'),
    content: 'Bonjour M. Dupont, je suis disponible pour discuter de ce plan. Pouvez-vous me proposer quelques dates pour un rendez-vous ?',
    read: true,
    readAt: null,
    senderId: 'current-user',
    recipientId: 'tenant-1',
    caseId: '1',
    sender: {
      firstName: 'Vous',
      lastName: '',
    },
  },
  {
    id: '3',
    createdAt: new Date('2025-05-16T09:20:00'),
    content: 'Je serais disponible le mardi 20 mai à 14h ou le jeudi 22 mai à 10h. Est-ce que l\'une de ces dates vous conviendrait ?',
    read: false,
    readAt: null,
    senderId: 'tenant-1',
    recipientId: 'current-user',
    caseId: '1',
    sender: {
      firstName: 'Jean',
      lastName: 'Dupont',
    },
  },
  {
    id: '4',
    createdAt: new Date('2025-05-10T11:30:00'),
    content: 'Bonjour, je vous contacte au sujet de mon dossier ALEXI-2025-23456. J\'ai reçu un commandement de payer et je souhaiterais des informations sur les aides disponibles.',
    read: true,
    readAt: new Date('2025-05-10T14:00:00'),
    senderId: 'tenant-2',
    recipientId: 'current-user',
    caseId: '2',
    sender: {
      firstName: 'Marie',
      lastName: 'Martin',
    },
  },
  {
    id: '5',
    createdAt: new Date('2025-05-10T16:15:00'),
    content: 'Bonjour Mme Martin, je vous propose de prendre rendez-vous avec un travailleur social qui pourra vous informer sur les aides du FSL. Je vous envoie les coordonnées par message séparé.',
    read: true,
    readAt: null,
    senderId: 'current-user',
    recipientId: 'tenant-2',
    caseId: '2',
    sender: {
      firstName: 'Vous',
      lastName: '',
    },
  },
];

// Liste fictive des utilisateurs pour le sélecteur de destinataire
const mockUsers = [
  { id: 'tenant-1', firstName: 'Jean', lastName: 'Dupont', role: 'TENANT' },
  { id: 'tenant-2', firstName: 'Marie', lastName: 'Martin', role: 'TENANT' },
  { id: 'landlord-1', firstName: '', lastName: 'SCI Les Lilas', role: 'LANDLORD' },
  { id: 'officer-1', firstName: 'Michel', lastName: 'Dubois', role: 'JUDICIAL_OFFICER' },
];

interface MessageWithSender extends Message {
  sender: {
    firstName: string;
    lastName: string;
  };
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<MessageWithSender[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedRecipientId, setSelectedRecipientId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [showComposer, setShowComposer] = useState(false);
  const currentUserId = 'current-user'; // Dans une implémentation réelle, ce serait l'ID de l'utilisateur connecté

  useEffect(() => {
    // Simuler le chargement des données depuis l'API
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Dans une implémentation réelle, vous feriez des appels API ici
        // const messagesResponse = await fetch('/api/messages');
        // const messagesData = await messagesResponse.json();
        // const usersResponse = await fetch('/api/users');
        // const usersData = await usersResponse.json();
        
        // Utiliser les données fictives pour la démonstration
        setTimeout(() => {
          setMessages(mockMessages as MessageWithSender[]);
          setUsers(mockUsers as User[]);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleReply = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message) {
      setSelectedRecipientId(message.senderId);
      setShowComposer(true);
    }
  };

  const handleMarkAsRead = async (messageId: string) => {
    // Dans une implémentation réelle, vous feriez un appel API ici
    // await fetch(`/api/messages/${messageId}/read`, { method: 'POST' });
    
    // Mettre à jour l'état local
    setMessages(prevMessages => 
      prevMessages.map(message => 
        message.id === messageId 
          ? { ...message, read: true, readAt: new Date() } 
          : message
      )
    );
  };

  const handleSendMessage = async (content: string) => {
    if (!selectedRecipientId || !content.trim()) return;
    
    // Dans une implémentation réelle, vous feriez un appel API ici
    // await fetch('/api/messages', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ recipientId: selectedRecipientId, content }),
    // });
    
    // Simuler l'ajout du message à la liste
    const newMessage: MessageWithSender = {
      id: `new-${Date.now()}`,
      createdAt: new Date(),
      content,
      read: false,
      readAt: null,
      senderId: currentUserId,
      recipientId: selectedRecipientId,
      caseId: null,
      sender: {
        firstName: 'Vous',
        lastName: '',
      },
    };
    
    setMessages(prevMessages => [newMessage, ...prevMessages]);
    setShowComposer(false);
    setSelectedRecipientId('');
  };

  const getRecipientName = (recipientId: string): string => {
    const user = users.find(u => u.id === recipientId);
    return user 
      ? `${user.firstName} ${user.lastName}`.trim() 
      : 'Destinataire inconnu';
  };

  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col">
          <div className="fr-grid-row fr-grid-row--middle fr-mb-3w">
            <div className="fr-col">
              <h1>Messages</h1>
            </div>
            <div className="fr-col-auto">
              <button 
                className="fr-btn fr-icon-mail-line fr-btn--icon-left" 
                onClick={() => setShowComposer(true)}
              >
                Nouveau message
              </button>
            </div>
          </div>

          {isLoading ? (
            <div className="fr-alert fr-alert--info">
              <p>Chargement des messages...</p>
            </div>
          ) : (
            <>
              {showComposer && (
                <div className="fr-card fr-card--grey fr-p-3w fr-mb-4w">
                  <div className="fr-grid-row fr-grid-row--middle fr-mb-2w">
                    <div className="fr-col">
                      <h2 className="fr-h4">Nouveau message</h2>
                    </div>
                    <div className="fr-col-auto">
                      <button 
                        className="fr-btn fr-btn--tertiary fr-btn--sm fr-icon-close-line" 
                        onClick={() => {
                          setShowComposer(false);
                          setSelectedRecipientId('');
                        }}
                        aria-label="Fermer"
                      />
                    </div>
                  </div>
                  
                  {!selectedRecipientId && (
                    <div className="fr-select-group fr-mb-3w">
                      <label className="fr-label" htmlFor="recipient-select">
                        Destinataire
                      </label>
                      <select
                        className="fr-select"
                        id="recipient-select"
                        name="recipient-select"
                        value={selectedRecipientId}
                        onChange={(e) => setSelectedRecipientId(e.target.value)}
                        required
                      >
                        <option value="">Sélectionnez un destinataire</option>
                        {users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {`${user.firstName} ${user.lastName}`.trim()}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  
                  {(selectedRecipientId || !users.length) && (
                    <MessageComposer 
                      onSend={handleSendMessage}
                      recipientName={selectedRecipientId ? getRecipientName(selectedRecipientId) : undefined}
                      isReply={!!selectedRecipientId}
                    />
                  )}
                </div>
              )}

              <MessageList 
                messages={messages}
                currentUserId={currentUserId}
                onReply={handleReply}
                onMarkAsRead={handleMarkAsRead}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
