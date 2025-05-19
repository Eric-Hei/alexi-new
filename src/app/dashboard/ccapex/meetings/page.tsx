'use client';

import React, { useState, useEffect } from 'react';
import { CcapexMeeting, CcapexMeetingCase, Case } from '@prisma/client';
import CcapexMeetingList from '@/components/ccapex/CcapexMeetingList';

// Dans une implémentation réelle, ces données seraient chargées depuis l'API
const mockMeetings = [
  {
    id: '1',
    date: new Date('2025-06-15'),
    location: 'Préfecture de Paris, Salle 302',
    department: '75',
    agenda: 'Examen des dossiers prioritaires du 15ème arrondissement',
    minutes: 'Compte-rendu de la réunion du 15 juin 2025',
    attendees: JSON.stringify([
      { name: 'Isabelle Dupont', role: 'Présidente' },
      { name: 'Jacques Martin', role: 'Secrétaire' },
      { name: 'Nathalie Leroy', role: 'Membre - Département' },
      { name: 'Michel Bernard', role: 'Membre - CAF' },
      { name: 'Christine Moreau', role: 'Membre - ADIL' },
    ]),
    cases: [
      {
        id: 'case-meeting-1',
        meetingId: '1',
        caseId: '1',
        decision: 'Maintien dans le logement avec plan d\'apurement',
        recommendation: 'Suivi renforcé par un travailleur social',
        priority: 1,
        case: {
          id: '1',
          reference: 'ALEXI-2025-12345',
          createdAt: new Date('2025-01-15'),
          updatedAt: new Date('2025-05-20'),
          status: 'IN_PROGRESS',
          stage: 'ASSIGNMENT',
          urgency: 'HIGH',
          debtAmount: 4500,
          description: 'Impayés suite à perte d\'emploi',
          reportDate: new Date('2025-01-15'),
          lastActionDate: new Date('2025-05-20'),
          nextDeadline: new Date('2025-07-01'),
          landlordId: 'landlord-1',
          tenantId: 'tenant-1',
          officerId: null,
          mediatorId: null,
          socialWorkerId: null,
          housingType: 'T3',
          housingArea: 65,
          rent: 950,
          charges: 150,
          deposit: 950,
          leaseStartDate: new Date('2020-09-01'),
          leaseType: 'Vide',
          leaseDuration: 36,
          address: '12 rue des Lilas, 75015 Paris',
          city: 'Paris',
          zipCode: '75015',
          department: '75',
          housingBenefit: true,
          benefitAmount: 250,
        },
      },
      {
        id: 'case-meeting-2',
        meetingId: '1',
        caseId: '2',
        decision: 'Orientation vers le FSL',
        recommendation: 'Demande d\'aide au FSL à déposer rapidement',
        priority: 2,
        case: {
          id: '2',
          reference: 'ALEXI-2025-23456',
          createdAt: new Date('2025-02-10'),
          updatedAt: new Date('2025-05-15'),
          status: 'IN_PROGRESS',
          stage: 'PAYMENT_COMMAND',
          urgency: 'HIGH',
          debtAmount: 3200,
          description: 'Difficultés financières temporaires',
          reportDate: new Date('2025-02-10'),
          lastActionDate: new Date('2025-05-15'),
          nextDeadline: new Date('2025-06-30'),
          landlordId: 'landlord-2',
          tenantId: 'tenant-2',
          officerId: null,
          mediatorId: null,
          socialWorkerId: null,
          housingType: 'T2',
          housingArea: 45,
          rent: 750,
          charges: 100,
          deposit: 750,
          leaseStartDate: new Date('2021-03-01'),
          leaseType: 'Vide',
          leaseDuration: 36,
          address: '8 rue du Commerce, 75015 Paris',
          city: 'Paris',
          zipCode: '75015',
          department: '75',
          housingBenefit: false,
          benefitAmount: null,
        },
      },
    ],
  },
  {
    id: '2',
    date: new Date('2025-07-10'),
    location: 'Préfecture de Paris, Salle 302',
    department: '75',
    agenda: 'Examen des dossiers prioritaires du 18ème arrondissement',
    minutes: null, // Pas encore de compte-rendu
    attendees: JSON.stringify([
      { name: 'Isabelle Dupont', role: 'Présidente' },
      { name: 'Jacques Martin', role: 'Secrétaire' },
      { name: 'Nathalie Leroy', role: 'Membre - Département' },
      { name: 'Michel Bernard', role: 'Membre - CAF' },
      { name: 'Christine Moreau', role: 'Membre - ADIL' },
    ]),
    cases: [
      {
        id: 'case-meeting-3',
        meetingId: '2',
        caseId: '3',
        decision: null, // Pas encore de décision
        recommendation: null, // Pas encore de recommandation
        priority: 1,
        case: {
          id: '3',
          reference: 'ALEXI-2025-34567',
          createdAt: new Date('2025-03-05'),
          updatedAt: new Date('2025-06-01'),
          status: 'IN_PROGRESS',
          stage: 'ASSIGNMENT',
          urgency: 'CRITICAL',
          debtAmount: 5800,
          description: 'Impayés de longue durée',
          reportDate: new Date('2025-03-05'),
          lastActionDate: new Date('2025-06-01'),
          nextDeadline: new Date('2025-07-15'),
          landlordId: 'landlord-3',
          tenantId: 'tenant-3',
          officerId: 'officer-1',
          mediatorId: null,
          socialWorkerId: null,
          housingType: 'T4',
          housingArea: 85,
          rent: 1200,
          charges: 200,
          deposit: 1200,
          leaseStartDate: new Date('2019-06-01'),
          leaseType: 'Vide',
          leaseDuration: 36,
          address: '25 rue Lepic, 75018 Paris',
          city: 'Paris',
          zipCode: '75018',
          department: '75',
          housingBenefit: true,
          benefitAmount: 300,
        },
      },
    ],
  },
];

interface CcapexMeetingWithCases extends CcapexMeeting {
  cases: (CcapexMeetingCase & {
    case: Case;
  })[];
}

export default function CcapexMeetingsPage() {
  const [meetings, setMeetings] = useState<CcapexMeetingWithCases[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données depuis l'API
    const fetchMeetings = async () => {
      setIsLoading(true);
      try {
        // Dans une implémentation réelle, vous feriez un appel API ici
        // const response = await fetch('/api/ccapex/meetings');
        // const data = await response.json();
        
        // Utiliser les données fictives pour la démonstration
        setTimeout(() => {
          setMeetings(mockMeetings as CcapexMeetingWithCases[]);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erreur lors du chargement des réunions CCAPEX:', error);
        setIsLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const handleAddMeeting = () => {
    // Dans une implémentation réelle, vous redirigeriez vers un formulaire de création
    alert('Fonctionnalité de création de réunion à implémenter');
  };

  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col">
          <h1>Réunions CCAPEX</h1>
          <p className="fr-text--lead fr-mb-4w">
            Consultez les réunions passées et à venir de la Commission de Coordination des Actions de Prévention des Expulsions.
          </p>

          {isLoading ? (
            <div className="fr-alert fr-alert--info">
              <p>Chargement des réunions CCAPEX...</p>
            </div>
          ) : (
            <CcapexMeetingList 
              meetings={meetings} 
              showAddButton={true}
              onAddMeeting={handleAddMeeting}
            />
          )}
        </div>
      </div>
    </div>
  );
}
