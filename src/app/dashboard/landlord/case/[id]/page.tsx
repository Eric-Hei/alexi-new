'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ProcedureStage, EventType } from '@prisma/client';
import CaseTimelineSummary from '@/components/case/CaseTimelineSummary';
import CaseTimelineDetailed, { CaseEventDetail } from '@/components/case/CaseTimelineDetailed';

// Données fictives pour la démonstration
const mockCase = {
  id: '12345',
  reference: 'ALEXI-2025-12345',
  status: 'IN_PROGRESS',
  stage: 'PAYMENT_COMMAND' as ProcedureStage,
  debtAmount: 2500,
  tenant: {
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com',
    phone: '06 12 34 56 78',
    address: '12 rue des Lilas, 75020 Paris',
    situation: 'Salarié en arrêt maladie'
  },
  housing: {
    type: 'Appartement T3',
    area: 65,
    rent: 950,
    charges: 150,
    deposit: 950,
    leaseStartDate: new Date('2020-09-01'),
    leaseType: 'Bail d\'habitation loi de 89',
    leaseDuration: 36,
    address: '12 rue des Lilas, 75020 Paris'
  }
};

// Historique des étapes
const mockStageHistory = [
  {
    stage: 'UNPAID_REPORT' as ProcedureStage,
    date: new Date('2025-03-01')
  },
  {
    stage: 'PAYMENT_COMMAND' as ProcedureStage,
    date: new Date('2025-04-15')
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
    date: new Date('2025-04-15T11:20:00'),
    type: 'STAGE_CHANGED' as EventType,
    description: 'Passage à l\'étape "Commandement de payer"',
    actor: 'Me Dubois (Commissaire de justice)'
  },
  {
    id: '5',
    date: new Date('2025-04-15T11:25:00'),
    type: 'DOCUMENT_ADDED' as EventType,
    description: 'Ajout du commandement de payer',
    actor: 'Me Dubois (Commissaire de justice)'
  },
  {
    id: '6',
    date: new Date('2025-04-20T16:30:00'),
    type: 'MEDIATION_REQUESTED' as EventType,
    description: 'Demande de médiation initiée',
    actor: 'SCI Les Lilas (Bailleur)'
  }
];

export default function LandlordCasePage({ params }: { params: { id: string } }) {
  // Utiliser React.use pour déballer les params
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // Dans une implémentation réelle, vous récupéreriez les données du dossier depuis l'API
  const [caseData] = useState(mockCase);
  const [stageHistory] = useState(mockStageHistory);
  const [events] = useState(mockEvents);
  const [caseId, setCaseId] = useState(id);

  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Dossier {caseData.reference}</h1>
          <p className="fr-text--lead">
            Suivi du dossier d'impayé concernant {caseData.tenant.name}.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/landlord" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
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
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Statut actuel
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      Commandement de payer
                    </p>
                    <p className="fr-text--sm">
                      Reçu le 15/04/2025 - Délai de 2 mois pour régulariser la situation
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Montant impayé
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      {caseData.debtAmount.toLocaleString('fr-FR')} €
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline simplifiée */}
      <CaseTimelineSummary
        currentStage={caseData.stage}
        stageHistory={stageHistory}
      />

      {/* Timeline détaillée */}
      <CaseTimelineDetailed events={events} />

      {/* Informations sur le locataire */}
      <h2 className="fr-mb-2w">Informations sur le locataire</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12">
                <p><strong>Nom :</strong> {caseData.tenant.name}</p>
                <p><strong>Email :</strong> {caseData.tenant.email}</p>
                <p><strong>Téléphone :</strong> {caseData.tenant.phone}</p>
                <p><strong>Adresse :</strong> {caseData.tenant.address}</p>
                <p><strong>Situation :</strong> {caseData.tenant.situation}</p>
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
                <p><strong>Type :</strong> {caseData.housing.type}</p>
                <p><strong>Surface :</strong> {caseData.housing.area} m²</p>
                <p><strong>Loyer mensuel :</strong> {caseData.housing.rent.toLocaleString('fr-FR')} €</p>
                <p><strong>Charges :</strong> {caseData.housing.charges.toLocaleString('fr-FR')} €</p>
                <p><strong>Dépôt de garantie :</strong> {caseData.housing.deposit.toLocaleString('fr-FR')} €</p>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <p><strong>Date d'entrée :</strong> {caseData.housing.leaseStartDate.toLocaleDateString('fr-FR')}</p>
                <p><strong>Type de bail :</strong> {caseData.housing.leaseType}</p>
                <p><strong>Durée du bail :</strong> {caseData.housing.leaseDuration} mois</p>
                <p><strong>Adresse :</strong> {caseData.housing.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href={`/dashboard/landlord/mediation?case=${caseId}`} className="fr-btn fr-btn--secondary fr-fi-discuss-line fr-btn--icon-left">
              Demander une médiation
            </Link>
            <Link href={`/dashboard/landlord/contact?case=${caseId}`} className="fr-btn fr-fi-mail-line fr-btn--icon-left">
              Contacter le locataire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
