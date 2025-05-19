'use client';

import React, { useState, useEffect } from 'react';
import { CaseStatistic } from '@prisma/client';
import CaseStatisticsTable from '@/components/statistics/CaseStatisticsTable';

// Dans une implémentation réelle, ces données seraient chargées depuis l'API
const mockStatistics: CaseStatistic[] = [
  {
    id: '1',
    date: new Date(),
    period: '2023-T1',
    department: '75',
    city: 'Paris',
    newCasesCount: 120,
    resolvedCount: 85,
    evictionCount: 12,
    mediationCount: 45,
    preventionRate: 0.65,
    averageDebtAmount: 3500,
  },
  {
    id: '2',
    date: new Date(),
    period: '2023-T2',
    department: '75',
    city: 'Paris',
    newCasesCount: 135,
    resolvedCount: 90,
    evictionCount: 15,
    mediationCount: 50,
    preventionRate: 0.62,
    averageDebtAmount: 3800,
  },
  {
    id: '3',
    date: new Date(),
    period: '2023-T3',
    department: '75',
    city: 'Paris',
    newCasesCount: 110,
    resolvedCount: 95,
    evictionCount: 10,
    mediationCount: 55,
    preventionRate: 0.70,
    averageDebtAmount: 3200,
  },
  {
    id: '4',
    date: new Date(),
    period: '2023-T4',
    department: '75',
    city: 'Paris',
    newCasesCount: 125,
    resolvedCount: 100,
    evictionCount: 8,
    mediationCount: 60,
    preventionRate: 0.75,
    averageDebtAmount: 3000,
  },
  {
    id: '5',
    date: new Date(),
    period: '2023-T1',
    department: '92',
    city: 'Nanterre',
    newCasesCount: 80,
    resolvedCount: 55,
    evictionCount: 10,
    mediationCount: 30,
    preventionRate: 0.60,
    averageDebtAmount: 4200,
  },
  {
    id: '6',
    date: new Date(),
    period: '2023-T2',
    department: '92',
    city: 'Nanterre',
    newCasesCount: 95,
    resolvedCount: 65,
    evictionCount: 12,
    mediationCount: 35,
    preventionRate: 0.58,
    averageDebtAmount: 4500,
  },
  {
    id: '7',
    date: new Date(),
    period: '2023-T3',
    department: '92',
    city: 'Nanterre',
    newCasesCount: 85,
    resolvedCount: 70,
    evictionCount: 8,
    mediationCount: 40,
    preventionRate: 0.65,
    averageDebtAmount: 4000,
  },
  {
    id: '8',
    date: new Date(),
    period: '2023-T4',
    department: '92',
    city: 'Nanterre',
    newCasesCount: 90,
    resolvedCount: 75,
    evictionCount: 6,
    mediationCount: 45,
    preventionRate: 0.72,
    averageDebtAmount: 3800,
  },
];

export default function StatisticsPage() {
  const [statistics, setStatistics] = useState<CaseStatistic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler le chargement des données depuis l'API
    const fetchStatistics = async () => {
      setIsLoading(true);
      try {
        // Dans une implémentation réelle, vous feriez un appel API ici
        // const response = await fetch('/api/statistics');
        // const data = await response.json();
        
        // Utiliser les données fictives pour la démonstration
        setTimeout(() => {
          setStatistics(mockStatistics);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col">
          <h1>Statistiques des dossiers</h1>
          <p className="fr-text--lead fr-mb-4w">
            Visualisez les statistiques des dossiers d'impayés de loyer par département et par période.
          </p>

          {isLoading ? (
            <div className="fr-alert fr-alert--info">
              <p>Chargement des statistiques...</p>
            </div>
          ) : (
            <CaseStatisticsTable 
              statistics={statistics} 
              title="Statistiques par département et période"
              showFilters={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
