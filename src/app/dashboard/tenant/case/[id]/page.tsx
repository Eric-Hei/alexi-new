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
  stage: ProcedureStage.PAYMENT_ORDER,
  debtAmount: 2500,
  landlord: {
    name: 'SCI Les Lilas',
    type: 'Bailleur privé',
    representative: 'Michel Dubois',
    email: 'contact@scililas.fr',
    phone: '01 23 45 67 89',
    address: '24 avenue des Fleurs, 75020 Paris',
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
    address: '12 rue des Lilas, 75020 Paris',
  }
};

const mockStageHistory = [
  { stage: ProcedureStage.UNPAID_REPORT, date: new Date('2025-03-01') },
  { stage: ProcedureStage.PAYMENT_ORDER, date: new Date('2025-03-15') },
];

const mockEvents: CaseEventDetail[] = [
  {
    id: '1',
    date: new Date('2025-03-01T10:30:00'),
    type: EventType.NOTIFICATION,
    description: 'Signalement de l\'impayé par le bailleur',
    actor: 'SCI Les Lilas',
  },
  {
    id: '2',
    date: new Date('2025-03-05T14:15:00'),
    type: EventType.DOCUMENT,
    description: 'Envoi d\'une mise en demeure',
    actor: 'SCI Les Lilas',
  },
  {
    id: '3',
    date: new Date('2025-03-15T09:00:00'),
    type: EventType.LEGAL,
    description: 'Commandement de payer délivré par commissaire de justice',
    actor: 'Me Martin',
  },
  {
    id: '4',
    date: new Date('2025-03-20T11:45:00'),
    type: EventType.CONTACT,
    description: 'Appel téléphonique du locataire pour expliquer sa situation',
    actor: 'Jean Dupont',
  },
];

export default function TenantCasePage({ params }: { params: { id: string } }) {
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
            Suivi de votre dossier d'impayé de loyer.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/tenant" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
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
                      Reçu le 15/03/2025 - Délai de 2 mois pour régulariser la situation
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

      {/* Informations sur le bailleur */}
      <h2 className="fr-mb-2w">Informations sur le bailleur</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12">
                <p><strong>Nom :</strong> {caseData.landlord.name}</p>
                <p><strong>Type :</strong> {caseData.landlord.type}</p>
                <p><strong>Représentant :</strong> {caseData.landlord.representative}</p>
                <p><strong>Email :</strong> {caseData.landlord.email}</p>
                <p><strong>Téléphone :</strong> {caseData.landlord.phone}</p>
                <p><strong>Adresse :</strong> {caseData.landlord.address}</p>
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
            <Link href={`/dashboard/tenant/mediation?case=${caseId}`} className="fr-btn fr-btn--secondary fr-fi-discuss-line fr-btn--icon-left">
              Demander une médiation
            </Link>
            <Link href={`/dashboard/tenant/aid/fsl?case=${caseId}`} className="fr-btn fr-fi-money-euro-circle-line fr-btn--icon-left">
              Demander une aide FSL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
