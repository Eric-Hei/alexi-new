'use client';

import React from 'react';
import { EventType } from '@prisma/client';

// Type pour les événements du dossier
export type CaseEventDetail = {
  id: string;
  date: Date;
  type: EventType;
  description: string;
  actor: string;
};

// Propriétés du composant
interface CaseTimelineDetailedProps {
  events: CaseEventDetail[];
}

// Fonction pour obtenir le libellé d'un type d'événement
const getEventTypeLabel = (type: EventType): string => {
  const labels: Record<EventType, string> = {
    CASE_CREATED: 'Création du dossier',
    STATUS_CHANGED: 'Changement de statut',
    STAGE_CHANGED: 'Changement d\'étape',
    DOCUMENT_ADDED: 'Document ajouté',
    MEDIATION_REQUESTED: 'Demande de médiation',
    MEDIATION_ACCEPTED: 'Médiation acceptée',
    MEDIATION_COMPLETED: 'Médiation terminée',
    PAYMENT_MADE: 'Paiement effectué',
    PAYMENT_PLAN_CREATED: 'Plan d\'apurement créé',
    SOCIAL_WORKER_ASSIGNED: 'Travailleur social assigné',
    CCAPEX_REVIEW: 'Examen CCAPEX',
    OTHER: 'Autre action'
  };
  return labels[type];
};

// Fonction pour obtenir la classe CSS en fonction du type d'événement
const getEventTypeClass = (type: EventType): string => {
  const classes: Record<EventType, string> = {
    CASE_CREATED: 'fr-badge--info',
    STATUS_CHANGED: 'fr-badge--info',
    STAGE_CHANGED: 'fr-badge--warning',
    DOCUMENT_ADDED: 'fr-badge--new',
    MEDIATION_REQUESTED: 'fr-badge--info',
    MEDIATION_ACCEPTED: 'fr-badge--success',
    MEDIATION_COMPLETED: 'fr-badge--success',
    PAYMENT_MADE: 'fr-badge--success',
    PAYMENT_PLAN_CREATED: 'fr-badge--success',
    SOCIAL_WORKER_ASSIGNED: 'fr-badge--info',
    CCAPEX_REVIEW: 'fr-badge--info',
    OTHER: 'fr-badge--grey'
  };
  return classes[type];
};

export default function CaseTimelineDetailed({ events }: CaseTimelineDetailedProps) {
  // Trier les événements par date (du plus récent au plus ancien)
  const sortedEvents = [...events].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="fr-mb-4w">
      <h2 className="fr-mb-2w">Historique détaillé du dossier</h2>
      <div className="fr-card fr-card--shadow">
        <div className="fr-card__body">
          <div className="fr-card__content">
            {sortedEvents.length === 0 ? (
              <p className="fr-text--center fr-my-3w">Aucun événement enregistré pour ce dossier.</p>
            ) : (
              <table className="fr-table fr-table--bordered">
                <caption className="fr-sr-only">Historique complet des actions sur le dossier</caption>
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type d'action</th>
                    <th scope="col">Description</th>
                    <th scope="col">Acteur</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedEvents.map((event) => (
                    <tr key={event.id}>
                      <td>
                        {new Date(event.date).toLocaleDateString('fr-FR', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td>
                        <span className={`fr-badge fr-badge--no-icon ${getEventTypeClass(event.type)}`}>
                          {getEventTypeLabel(event.type)}
                        </span>
                      </td>
                      <td>{event.description}</td>
                      <td>{event.actor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
