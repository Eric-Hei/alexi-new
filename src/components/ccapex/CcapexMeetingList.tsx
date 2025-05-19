'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CcapexMeeting, CcapexMeetingCase, Case } from '@prisma/client';

interface CcapexMeetingWithCases extends CcapexMeeting {
  cases: (CcapexMeetingCase & {
    case: Case;
  })[];
}

interface CcapexMeetingListProps {
  meetings: CcapexMeetingWithCases[];
  showAddButton?: boolean;
  onAddMeeting?: () => void;
}

const CcapexMeetingList: React.FC<CcapexMeetingListProps> = ({
  meetings,
  showAddButton = false,
  onAddMeeting,
}) => {
  const [expandedMeetingId, setExpandedMeetingId] = useState<string | null>(null);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const toggleExpand = (meetingId: string) => {
    setExpandedMeetingId(expandedMeetingId === meetingId ? null : meetingId);
  };

  const parseAttendees = (attendeesJson: string | null) => {
    if (!attendeesJson) return [];
    
    try {
      return JSON.parse(attendeesJson);
    } catch (error) {
      console.error('Erreur lors du parsing des participants:', error);
      return [];
    }
  };

  return (
    <div className="fr-ccapex-meetings">
      <div className="fr-grid-row fr-grid-row--middle fr-mb-3w">
        <div className="fr-col">
          <h2>Réunions CCAPEX</h2>
        </div>
        {showAddButton && onAddMeeting && (
          <div className="fr-col-auto">
            <button 
              className="fr-btn fr-btn--secondary fr-icon-add-line fr-btn--icon-left" 
              onClick={onAddMeeting}
            >
              Nouvelle réunion
            </button>
          </div>
        )}
      </div>

      {meetings.length === 0 ? (
        <div className="fr-alert fr-alert--info">
          <p>Aucune réunion CCAPEX programmée.</p>
        </div>
      ) : (
        <div className="fr-accordion-group">
          {meetings.map((meeting) => (
            <section 
              key={meeting.id} 
              className={`fr-accordion ${expandedMeetingId === meeting.id ? 'fr-accordion--expanded' : ''}`}
            >
              <h3 className="fr-accordion__title">
                <button
                  className="fr-accordion__btn"
                  aria-expanded={expandedMeetingId === meeting.id}
                  aria-controls={`accordion-${meeting.id}`}
                  onClick={() => toggleExpand(meeting.id)}
                >
                  Réunion du {formatDate(meeting.date)} - {meeting.department}
                </button>
              </h3>
              <div className="fr-collapse" id={`accordion-${meeting.id}`}>
                <div className="fr-grid-row fr-grid-row--gutters">
                  <div className="fr-col-12 fr-col-md-6">
                    <div className="fr-card fr-card--grey fr-p-3w">
                      <h4 className="alexi-card-title">Informations</h4>
                      <ul className="fr-list">
                        <li><strong>Date :</strong> {formatDate(meeting.date)}</li>
                        <li><strong>Lieu :</strong> {meeting.location}</li>
                        <li><strong>Département :</strong> {meeting.department}</li>
                      </ul>
                      
                      {meeting.agenda && (
                        <div className="fr-mt-2w">
                          <h5>Ordre du jour</h5>
                          <p>{meeting.agenda}</p>
                        </div>
                      )}
                      
                      {meeting.minutes && (
                        <div className="fr-mt-2w">
                          <h5>Compte-rendu</h5>
                          <p>{meeting.minutes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="fr-col-12 fr-col-md-6">
                    <div className="fr-card fr-card--grey fr-p-3w">
                      <h4 className="alexi-card-title">Participants</h4>
                      {meeting.attendees ? (
                        <ul className="fr-list">
                          {parseAttendees(meeting.attendees).map((attendee: any, index: number) => (
                            <li key={index}>
                              <strong>{attendee.name}</strong>
                              {attendee.role && <span> - {attendee.role}</span>}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>Aucun participant enregistré</p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="fr-mt-3w">
                  <h4>Dossiers examinés</h4>
                  {meeting.cases.length === 0 ? (
                    <p>Aucun dossier associé à cette réunion</p>
                  ) : (
                    <table className="fr-table">
                      <caption className="fr-sr-only">Dossiers examinés lors de la réunion CCAPEX</caption>
                      <thead>
                        <tr>
                          <th scope="col">Référence</th>
                          <th scope="col">Priorité</th>
                          <th scope="col">Décision</th>
                          <th scope="col">Recommandation</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {meeting.cases
                          .sort((a, b) => a.priority - b.priority)
                          .map((meetingCase) => (
                            <tr key={meetingCase.id}>
                              <td>{meetingCase.case.reference}</td>
                              <td>{meetingCase.priority}</td>
                              <td>{meetingCase.decision || '-'}</td>
                              <td>{meetingCase.recommendation || '-'}</td>
                              <td>
                                <Link 
                                  href={`/dashboard/ccapex/case/${meetingCase.caseId}`}
                                  className="fr-btn fr-btn--sm fr-btn--tertiary fr-icon-arrow-right-line fr-btn--icon-right"
                                >
                                  Voir
                                </Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default CcapexMeetingList;
