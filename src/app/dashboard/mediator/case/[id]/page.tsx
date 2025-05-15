'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProcedureStage, EventType } from '@prisma/client';
import CaseTimelineDetailed, { CaseEventDetail } from '@/components/case/CaseTimelineDetailed';

// Événements détaillés pour la médiation
const mockEvents: CaseEventDetail[] = [
  {
    id: '1',
    date: new Date('2025-05-10T10:30:00'),
    type: 'MEDIATION_REQUESTED' as EventType,
    description: 'Demande de médiation initiée par le bailleur',
    actor: 'SCI Les Lilas (Bailleur)'
  },
  {
    id: '2',
    date: new Date('2025-05-11T09:15:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Ajout du dossier d\'impayé',
    actor: 'Système'
  },
  {
    id: '3',
    date: new Date('2025-05-12T14:30:00'),
    type: 'MEDIATION_ACCEPTED' as EventType,
    description: 'Acceptation de la demande de médiation',
    actor: 'Marie Legrand (Médiateur)'
  },
  {
    id: '4',
    date: new Date('2025-05-13T10:45:00'),
    type: 'OTHER' as EventType,
    description: 'Prise de contact téléphonique avec le bailleur',
    actor: 'Marie Legrand (Médiateur)'
  },
  {
    id: '5',
    date: new Date('2025-05-13T14:20:00'),
    type: 'OTHER' as EventType,
    description: 'Prise de contact téléphonique avec le locataire',
    actor: 'Marie Legrand (Médiateur)'
  },
  {
    id: '6',
    date: new Date('2025-05-14T11:00:00'),
    type: 'OTHER' as EventType,
    description: 'Planification du rendez-vous de médiation',
    actor: 'Marie Legrand (Médiateur)'
  },
  {
    id: '7',
    date: new Date('2025-05-14T11:05:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Envoi des convocations au rendez-vous',
    actor: 'Système'
  }
];

export default function MediationCasePage({ params }: { params: { id: string } }) {
  // Dans une implémentation réelle, vous récupéreriez les données du dossier depuis l'API
  const [events] = useState(mockEvents);
  const [caseId, setCaseId] = useState('');

  // Utiliser useEffect pour accéder à params.id de manière sûre
  useEffect(() => {
    if (params && params.id) {
      setCaseId(params.id);
    }
  }, [params]);
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Dossier de médiation MED-2025-{caseId}</h1>
          <p className="fr-text--lead">
            Gestion du dossier de médiation entre SCI Les Lilas et Jean Dupont.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/mediator" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      {/* Statut du dossier */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="fr-card__title">
            Statut du dossier
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-stepper">
                  <h3 className="fr-stepper__title">Progression de la médiation</h3>
                  <div className="fr-stepper__steps" data-fr-current-step="2" data-fr-steps="5">
                    <div className="fr-stepper__step">
                      <div className="fr-stepper__state">
                        <span className="fr-stepper__state-title">Demande</span>
                        <span className="fr-stepper__state-detail">10/05/2025</span>
                      </div>
                    </div>
                    <div className="fr-stepper__step">
                      <div className="fr-stepper__state">
                        <span className="fr-stepper__state-title">Acceptation</span>
                        <span className="fr-stepper__state-detail">12/05/2025</span>
                      </div>
                    </div>
                    <div className="fr-stepper__step">
                      <div className="fr-stepper__state">
                        <span className="fr-stepper__state-title">Rendez-vous</span>
                        <span className="fr-stepper__state-detail">Prévu le 18/05/2025</span>
                      </div>
                    </div>
                    <div className="fr-stepper__step">
                      <div className="fr-stepper__state">
                        <span className="fr-stepper__state-title">Accord</span>
                        <span className="fr-stepper__state-detail">À venir</span>
                      </div>
                    </div>
                    <div className="fr-stepper__step">
                      <div className="fr-stepper__state">
                        <span className="fr-stepper__state-title">Suivi</span>
                        <span className="fr-stepper__state-detail">À venir</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-6">
                    <div className="fr-tile fr-tile--horizontal">
                      <div className="fr-tile__body">
                        <h3 className="fr-tile__title">
                          Statut actuel
                        </h3>
                        <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--info">
                          Rendez-vous planifié
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="fr-col-6">
                    <div className="fr-tile fr-tile--horizontal">
                      <div className="fr-tile__body">
                        <h3 className="fr-tile__title">
                          Montant impayé
                        </h3>
                        <p className="fr-tile__desc fr-text--bold fr-text--lg">
                          2 500,00 €
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="fr-col-6">
                    <div className="fr-tile fr-tile--horizontal">
                      <div className="fr-tile__body">
                        <h3 className="fr-tile__title">
                          Prochaine étape
                        </h3>
                        <p className="fr-tile__desc">
                          Séance de médiation le 18/05/2025
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="fr-col-6">
                    <div className="fr-tile fr-tile--horizontal">
                      <div className="fr-tile__body">
                        <h3 className="fr-tile__title">
                          Urgence
                        </h3>
                        <p className="fr-tile__desc fr-text--bold fr-text--error">
                          Élevée
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Informations des parties */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="fr-card__title">
                Bailleur
              </h2>
              <div className="fr-card__content">
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-12">
                    <p><strong>Nom :</strong> SCI Les Lilas</p>
                    <p><strong>Représentant :</strong> Michel Dubois</p>
                    <p><strong>Email :</strong> contact@scililas.fr</p>
                    <p><strong>Téléphone :</strong> 01 23 45 67 89</p>
                    <p><strong>Adresse :</strong> 24 avenue des Fleurs, 75020 Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="fr-card__title">
                Locataire
              </h2>
              <div className="fr-card__content">
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-12">
                    <p><strong>Nom :</strong> Jean Dupont</p>
                    <p><strong>Email :</strong> jean.dupont@email.com</p>
                    <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
                    <p><strong>Adresse :</strong> 12 rue des Lilas, 75020 Paris</p>
                    <p><strong>Situation :</strong> Salarié en arrêt maladie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Détails de la demande */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="fr-card__title">
            Détails de la demande
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12">
                <h3>Motif de la demande</h3>
                <p>
                  Le locataire a accumulé une dette de loyer suite à un arrêt maladie prolongé. Le bailleur souhaite trouver une solution amiable avant d'engager des procédures judiciaires. Le locataire a exprimé sa volonté de rester dans le logement et de régulariser sa situation.
                </p>
                <h3 className="fr-mt-3w">Proposition initiale du bailleur</h3>
                <p>
                  Plan d'apurement sur 12 mois avec un premier versement de 500€ et des mensualités de 200€ en plus du loyer courant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rendez-vous */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="fr-card__title">
            Rendez-vous de médiation
          </h2>
          <div className="fr-card__content">
            <table className="fr-table fr-table--bordered">
              <caption>Rendez-vous planifiés</caption>
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Heure</th>
                  <th scope="col">Format</th>
                  <th scope="col">Lieu/Lien</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>18/05/2025</td>
                  <td>14:00</td>
                  <td>Présentiel</td>
                  <td>12 rue de la Médiation, 75001 Paris</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">À venir</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/mediator/meeting/1234" className="fr-btn fr-btn--sm">
                        Détails
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Modifier
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="fr-btns-group fr-mt-3w">
              <button className="fr-btn fr-btn--secondary fr-fi-calendar-line fr-btn--icon-left">
                Planifier un nouveau rendez-vous
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Historique détaillé du dossier */}
      <CaseTimelineDetailed events={events} />

      {/* Notes */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="fr-card__title">
            Notes
          </h2>
          <div className="fr-card__content">
            <div className="fr-input-group">
              <label className="fr-label" htmlFor="new-note">
                Ajouter une note
              </label>
              <textarea className="fr-input" id="new-note" name="new-note" rows={3}></textarea>
            </div>

            <div className="fr-btns-group fr-mt-2w">
              <button className="fr-btn fr-btn--secondary">
                Enregistrer la note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/mediator/protocol/1234" className="fr-btn fr-btn--secondary fr-fi-file-line fr-btn--icon-left">
              Préparer un protocole d'accord
            </Link>
            <button className="fr-btn fr-fi-mail-line fr-btn--icon-left">
              Contacter les parties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
