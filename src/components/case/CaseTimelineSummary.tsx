'use client';

import React from 'react';
import { ProcedureStage } from '@prisma/client';

// Type pour les étapes de la procédure avec dates et statut
type TimelineStep = {
  stage: ProcedureStage;
  label: string;
  date?: Date | null;
  status: 'completed' | 'current' | 'upcoming';
};

// Propriétés du composant
interface CaseTimelineSummaryProps {
  currentStage: ProcedureStage;
  stageHistory: {
    stage: ProcedureStage;
    date: Date;
  }[];
}

// Fonction pour obtenir le libellé d'une étape
const getStageLabel = (stage: ProcedureStage): string => {
  const labels: Record<ProcedureStage, string> = {
    UNPAID_REPORT: 'Signalement de l\'impayé',
    PAYMENT_COMMAND: 'Commandement de payer',
    ASSIGNMENT: 'Assignation',
    HEARING: 'Audience',
    DECISION: 'Décision de justice',
    EVICTION_COMMAND: 'Commandement de quitter les lieux',
    EVICTION: 'Expulsion'
  };
  return labels[stage];
};

// Ordre des étapes de la procédure
const stageOrder: ProcedureStage[] = [
  'UNPAID_REPORT',
  'PAYMENT_COMMAND',
  'ASSIGNMENT',
  'HEARING',
  'DECISION',
  'EVICTION_COMMAND',
  'EVICTION'
];

export default function CaseTimelineSummary({ currentStage, stageHistory }: CaseTimelineSummaryProps) {
  // Création de la timeline avec toutes les étapes
  const timeline: TimelineStep[] = stageOrder.map(stage => {
    const historyEntry = stageHistory.find(entry => entry.stage === stage);
    const stageIndex = stageOrder.indexOf(stage);
    const currentStageIndex = stageOrder.indexOf(currentStage);

    let status: 'completed' | 'current' | 'upcoming';
    if (stageIndex < currentStageIndex) {
      status = 'completed';
    } else if (stageIndex === currentStageIndex) {
      status = 'current';
    } else {
      status = 'upcoming';
    }

    return {
      stage,
      label: getStageLabel(stage),
      date: historyEntry?.date || null,
      status
    };
  });

  return (
    <div className="fr-mb-4w">
      <h2 className="fr-mb-2w">Progression de la procédure</h2>
      <div className="fr-card fr-card--shadow">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-stepper">
              <div className="fr-stepper__steps" data-fr-current-step={stageOrder.indexOf(currentStage) + 1} data-fr-steps={stageOrder.length}>
                {timeline.map((step, index) => (
                  <div key={step.stage} className={`fr-stepper__step ${step.status === 'current' ? 'fr-stepper__step--current' : ''} ${step.status === 'completed' ? 'fr-stepper__step--success' : ''}`}>
                    <div className="fr-stepper__state">
                      <span className="fr-stepper__state-title">{step.label}</span>
                      {step.date ? (
                        <span className="fr-stepper__state-detail">
                          {new Date(step.date).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                        </span>
                      ) : (
                        <span className="fr-stepper__state-detail">
                          {step.status === 'upcoming' ? 'À venir' : 'Non renseigné'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
