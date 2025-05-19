'use client';

import React, { useState, useEffect } from 'react';
import { CaseStatistic } from '@prisma/client';

interface CaseStatisticsTableProps {
  statistics: CaseStatistic[];
  title?: string;
  showFilters?: boolean;
}

const CaseStatisticsTable: React.FC<CaseStatisticsTableProps> = ({
  statistics,
  title = 'Statistiques des dossiers',
  showFilters = true,
}) => {
  const [filteredStats, setFilteredStats] = useState<CaseStatistic[]>(statistics);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');

  // Extraire les départements et périodes uniques pour les filtres
  const departments = ['all', ...new Set(statistics.map(stat => stat.department))];
  const periods = ['all', ...new Set(statistics.map(stat => stat.period))];

  useEffect(() => {
    let filtered = [...statistics];
    
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(stat => stat.department === selectedDepartment);
    }
    
    if (selectedPeriod !== 'all') {
      filtered = filtered.filter(stat => stat.period === selectedPeriod);
    }
    
    setFilteredStats(filtered);
  }, [statistics, selectedDepartment, selectedPeriod]);

  const formatPercentage = (value: number): string => {
    return `${(value * 100).toFixed(1)}%`;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="fr-table-container">
      <div className="fr-grid-row fr-grid-row--middle fr-mb-2w">
        <div className="fr-col">
          <h2>{title}</h2>
        </div>
      </div>

      {showFilters && (
        <div className="fr-grid-row fr-grid-row--gutters fr-mb-3w">
          <div className="fr-col-12 fr-col-md-6">
            <div className="fr-select-group">
              <label className="fr-label" htmlFor="department-filter">
                Département
              </label>
              <select
                className="fr-select"
                id="department-filter"
                name="department-filter"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">Tous les départements</option>
                {departments
                  .filter(dept => dept !== 'all')
                  .map(dept => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-6">
            <div className="fr-select-group">
              <label className="fr-label" htmlFor="period-filter">
                Période
              </label>
              <select
                className="fr-select"
                id="period-filter"
                name="period-filter"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option value="all">Toutes les périodes</option>
                {periods
                  .filter(period => period !== 'all')
                  .map(period => (
                    <option key={period} value={period}>
                      {period}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {filteredStats.length === 0 ? (
        <div className="fr-alert fr-alert--info">
          <p>Aucune statistique disponible pour les critères sélectionnés.</p>
        </div>
      ) : (
        <table className="fr-table">
          <caption className="fr-sr-only">{title}</caption>
          <thead>
            <tr>
              <th scope="col">Département</th>
              <th scope="col">Période</th>
              <th scope="col">Nouveaux dossiers</th>
              <th scope="col">Dossiers résolus</th>
              <th scope="col">Expulsions</th>
              <th scope="col">Médiations</th>
              <th scope="col">Taux de prévention</th>
              <th scope="col">Dette moyenne</th>
            </tr>
          </thead>
          <tbody>
            {filteredStats.map((stat) => (
              <tr key={stat.id}>
                <td>{stat.department}</td>
                <td>{stat.period}</td>
                <td>{stat.newCasesCount}</td>
                <td>{stat.resolvedCount}</td>
                <td>{stat.evictionCount}</td>
                <td>{stat.mediationCount}</td>
                <td>{formatPercentage(stat.preventionRate)}</td>
                <td>{formatCurrency(stat.averageDebtAmount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CaseStatisticsTable;
