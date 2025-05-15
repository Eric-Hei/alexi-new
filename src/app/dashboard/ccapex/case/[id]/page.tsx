'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ProcedureStage, EventType } from '@prisma/client';
import CaseTimelineSummary from '@/components/case/CaseTimelineSummary';
import CaseTimelineDetailed, { CaseEventDetail } from '@/components/case/CaseTimelineDetailed';

// Données fictives pour la démonstration
const mockStageHistory = [
  {
    stage: 'UNPAID_REPORT' as ProcedureStage,
    date: new Date('2025-03-01')
  },
  {
    stage: 'PAYMENT_COMMAND' as ProcedureStage,
    date: new Date('2025-03-15')
  },
  {
    stage: 'ASSIGNMENT' as ProcedureStage,
    date: new Date('2025-04-20')
  }
];

// Événements détaillés
const mockEvents: CaseEventDetail[] = [
  {
    id: '1',
    date: new Date('2025-03-01T10:30:00'),
    type: 'CASE_CREATED' as EventType,
    description: 'Création du dossier suite au signalement d\'impayé',
    actor: 'SCI Les Lilas (Bailleur)'
  },
  {
    id: '2',
    date: new Date('2025-03-05T14:15:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Ajout du bail de location',
    actor: 'SCI Les Lilas (Bailleur)'
  },
  {
    id: '3',
    date: new Date('2025-03-10T09:45:00'),
    type: 'PAYMENT_MADE' as EventType,
    description: 'Paiement partiel de 300€ reçu',
    actor: 'Jean Dupont (Locataire)'
  },
  {
    id: '4',
    date: new Date('2025-03-15T11:20:00'),
    type: 'STAGE_CHANGED' as EventType,
    description: 'Passage à l\'étape "Commandement de payer"',
    actor: 'Me Dubois (Commissaire de justice)'
  },
  {
    id: '5',
    date: new Date('2025-03-15T11:25:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Ajout du commandement de payer',
    actor: 'Me Dubois (Commissaire de justice)'
  },
  {
    id: '6',
    date: new Date('2025-03-20T16:30:00'),
    type: 'SOCIAL_WORKER_ASSIGNED' as EventType,
    description: 'Assignation d\'un travailleur social',
    actor: 'CCAPEX'
  },
  {
    id: '7',
    date: new Date('2025-04-05T10:00:00'),
    type: 'CCAPEX_REVIEW' as EventType,
    description: 'Examen du dossier en commission CCAPEX',
    actor: 'CCAPEX'
  },
  {
    id: '8',
    date: new Date('2025-04-20T09:30:00'),
    type: 'STAGE_CHANGED' as EventType,
    description: 'Passage à l\'étape "Assignation"',
    actor: 'Me Dubois (Commissaire de justice)'
  },
  {
    id: '9',
    date: new Date('2025-04-20T09:35:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Ajout de l\'assignation',
    actor: 'Me Dubois (Commissaire de justice)'
  }
];

export default function CcapexCasePage({ params }: { params: { id: string } }) {
  // Utiliser React.use pour déballer les params
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Dans une implémentation réelle, vous récupéreriez les données du dossier depuis l'API
  const [stageHistory] = useState(mockStageHistory);
  const [events] = useState(mockEvents);
  const [caseId, setCaseId] = useState(id);
  const [evaluation, setEvaluation] = useState('partial-recoverable');
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Dossier ALEXI-2025-{caseId}</h1>
          <p className="fr-text--lead">
            Examen du dossier de Jean Dupont - SCI Les Lilas.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/ccapex" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      {/* Statut du dossier */}
      <h2 className="fr-mb-2w">Statut du dossier</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                {/* Timeline simplifiée */}
                <CaseTimelineSummary
                  currentStage="ASSIGNMENT"
                  stageHistory={stageHistory}
                />
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-6">
                    <div className="fr-tile fr-tile--horizontal">
                      <div className="fr-tile__body">
                        <h3 className="fr-tile__title">
                          Statut actuel
                        </h3>
                        <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                          Assignation
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
                          Prochaine échéance
                        </h3>
                        <p className="fr-tile__desc">
                          Audience le 25/05/2025
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
          <h2 className="fr-mb-2w">Locataire</h2>
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-12">
                    <p><strong>Nom :</strong> Jean Dupont</p>
                    <p><strong>Date de naissance :</strong> 15/06/1978</p>
                    <p><strong>Email :</strong> jean.dupont@email.com</p>
                    <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
                    <p><strong>Adresse :</strong> 12 rue des Lilas, 75020 Paris</p>
                    <p><strong>Composition du foyer :</strong> 3 personnes (2 adultes, 1 enfant)</p>
                    <p><strong>Situation professionnelle :</strong> Salarié en arrêt maladie</p>
                    <p><strong>Revenus mensuels :</strong> 1 800,00 €</p>
                    <p><strong>Aides au logement :</strong> APL 250,00 €</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <h2 className="fr-mb-2w">Bailleur</h2>
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-12">
                    <p><strong>Nom :</strong> SCI Les Lilas</p>
                    <p><strong>Type :</strong> Bailleur privé</p>
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
      </div>

      {/* Informations sur le logement */}
      <h2 className="fr-mb-2w">Informations sur le logement</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <p><strong>Type :</strong> Appartement T3</p>
                <p><strong>Surface :</strong> 65 m²</p>
                <p><strong>Loyer mensuel :</strong> 950,00 €</p>
                <p><strong>Charges :</strong> 150,00 €</p>
                <p><strong>Dépôt de garantie :</strong> 950,00 €</p>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <p><strong>Date d'entrée :</strong> 01/09/2020</p>
                <p><strong>Type de bail :</strong> Bail d'habitation loi de 89</p>
                <p><strong>Durée du bail :</strong> 3 ans</p>
                <p><strong>Date de renouvellement :</strong> 01/09/2023</p>
                <p><strong>DPE :</strong> D (consommation énergétique)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Historique de la dette */}
      <h2 className="fr-mb-2w">Historique de la dette</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Évolution de la dette locative</p>
            <table className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col">Période</th>
                  <th scope="col">Loyer dû</th>
                  <th scope="col">Montant payé</th>
                  <th scope="col">Reste à payer</th>
                  <th scope="col">Dette cumulée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Janvier 2025</td>
                  <td>1 100,00 €</td>
                  <td>500,00 €</td>
                  <td>600,00 €</td>
                  <td>600,00 €</td>
                </tr>
                <tr>
                  <td>Février 2025</td>
                  <td>1 100,00 €</td>
                  <td>400,00 €</td>
                  <td>700,00 €</td>
                  <td>1 300,00 €</td>
                </tr>
                <tr>
                  <td>Mars 2025</td>
                  <td>1 100,00 €</td>
                  <td>300,00 €</td>
                  <td>800,00 €</td>
                  <td>2 100,00 €</td>
                </tr>
                <tr>
                  <td>Avril 2025</td>
                  <td>1 100,00 €</td>
                  <td>700,00 €</td>
                  <td>400,00 €</td>
                  <td>2 500,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Timeline détaillée */}
      <CaseTimelineDetailed events={events} />

      {/* Évaluation et recommandations */}
      <h2 className="fr-mb-2w">Évaluation et recommandations</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <legend className="fr-fieldset__legend">Évaluation de la situation</legend>
                <div className="fr-fieldset__content">
                  <div className="fr-radio-group">
                    <input
                      type="radio"
                      id="evaluation-1"
                      name="evaluation"
                      value="recoverable"
                      checked={evaluation === 'recoverable'}
                      onChange={() => setEvaluation('recoverable')}
                    />
                    <label className="fr-label" htmlFor="evaluation-1">Situation recouvrable avec accompagnement</label>
                  </div>
                  <div className="fr-radio-group">
                    <input
                      type="radio"
                      id="evaluation-2"
                      name="evaluation"
                      value="partial-recoverable"
                      checked={evaluation === 'partial-recoverable'}
                      onChange={() => setEvaluation('partial-recoverable')}
                    />
                    <label className="fr-label" htmlFor="evaluation-2">Situation partiellement recouvrable</label>
                  </div>
                  <div className="fr-radio-group">
                    <input
                      type="radio"
                      id="evaluation-3"
                      name="evaluation"
                      value="critical"
                      checked={evaluation === 'critical'}
                      onChange={() => setEvaluation('critical')}
                    />
                    <label className="fr-label" htmlFor="evaluation-3">Situation critique nécessitant des mesures d'urgence</label>
                  </div>
                  <div className="fr-radio-group">
                    <input
                      type="radio"
                      id="evaluation-4"
                      name="evaluation"
                      value="relocation"
                      checked={evaluation === 'relocation'}
                      onChange={() => setEvaluation('relocation')}
                    />
                    <label className="fr-label" htmlFor="evaluation-4">Relogement recommandé</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="fr-input-group fr-mt-3w">
              <label className="fr-label" htmlFor="recommendations">
                Recommandations
              </label>
              <textarea className="fr-input" id="recommendations" name="recommendations" rows={5} defaultValue="1. Mobiliser le FSL pour apurer une partie de la dette.
2. Proposer un nouveau plan d'apurement sur 18 mois avec des mensualités adaptées aux ressources du ménage.
3. Orienter vers une assistante sociale pour un accompagnement budgétaire.
4. Vérifier l'éligibilité à une aide exceptionnelle de la CAF."></textarea>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <button className="fr-btn fr-btn--secondary fr-fi-add-line fr-btn--icon-left">
              Ajouter à l'ordre du jour CCAPEX
            </button>
            <button className="fr-btn fr-fi-mail-line fr-btn--icon-left">
              Envoyer un avis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
