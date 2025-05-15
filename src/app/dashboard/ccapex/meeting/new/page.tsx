import React from 'react';
import Link from 'next/link';

export default function NewCcapexMeetingPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Planifier une réunion CCAPEX</h1>
          <p className="fr-text--lead">
            Organisez une nouvelle réunion de la Commission de Coordination des Actions de Prévention des Expulsions Locatives.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/ccapex" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Informations importantes</h2>
            <p>
              La CCAPEX se réunit pour examiner les situations d'impayés de loyer et coordonner les actions de prévention des expulsions. Les réunions doivent être planifiées au moins 15 jours à l'avance pour permettre aux membres de s'organiser.
            </p>
            <ul className="fr-list">
              <li>Assurez-vous d'inviter tous les membres permanents de la commission.</li>
              <li>Prévoyez un temps suffisant pour examiner tous les dossiers à l'ordre du jour.</li>
              <li>Joignez les documents nécessaires à l'examen des dossiers.</li>
              <li>Prévoyez une option de participation en visioconférence pour les membres qui ne peuvent pas se déplacer.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Informations générales
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-title">
                    Titre de la réunion
                  </label>
                  <input className="fr-input" type="text" id="meeting-title" name="meeting-title" defaultValue="Réunion CCAPEX - Mai 2025" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="meeting-type">
                    Type de réunion
                  </label>
                  <select className="fr-select" id="meeting-type" name="meeting-type">
                    <option value="regular">Réunion ordinaire</option>
                    <option value="emergency">Réunion d'urgence</option>
                    <option value="thematic">Réunion thématique</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Date et lieu
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-date">
                    Date
                  </label>
                  <input className="fr-input" type="date" id="meeting-date" name="meeting-date" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-start-time">
                    Heure de début
                  </label>
                  <input className="fr-input" type="time" id="meeting-start-time" name="meeting-start-time" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-end-time">
                    Heure de fin
                  </label>
                  <input className="fr-input" type="time" id="meeting-end-time" name="meeting-end-time" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-location">
                    Lieu
                  </label>
                  <input className="fr-input" type="text" id="meeting-location" name="meeting-location" defaultValue="Préfecture de Paris - Salle 302" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="meeting-video-link">
                    Lien de visioconférence (optionnel)
                  </label>
                  <input className="fr-input" type="text" id="meeting-video-link" name="meeting-video-link" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Participants
          </h2>
          <div className="fr-card__content">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <legend className="fr-fieldset__legend">Membres permanents</legend>
                <div className="fr-fieldset__content">
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-1" name="members[]" value="prefecture" checked />
                    <label className="fr-label" htmlFor="member-1">Représentant de la Préfecture</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-2" name="members[]" value="departement" checked />
                    <label className="fr-label" htmlFor="member-2">Représentant du Département</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-3" name="members[]" value="caf" checked />
                    <label className="fr-label" htmlFor="member-3">Représentant de la CAF</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-4" name="members[]" value="adil" checked />
                    <label className="fr-label" htmlFor="member-4">Représentant de l'ADIL</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-5" name="members[]" value="social-housing" checked />
                    <label className="fr-label" htmlFor="member-5">Représentant des bailleurs sociaux</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-6" name="members[]" value="private-housing" checked />
                    <label className="fr-label" htmlFor="member-6">Représentant des bailleurs privés</label>
                  </div>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="member-7" name="members[]" value="tenant-association" checked />
                    <label className="fr-label" htmlFor="member-7">Représentant des associations de locataires</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="fr-input-group fr-mt-3w">
              <label className="fr-label" htmlFor="additional-participants">
                Participants supplémentaires
                <span className="fr-hint-text">Ajoutez d'autres participants séparés par des virgules</span>
              </label>
              <input className="fr-input" type="text" id="additional-participants" name="additional-participants" />
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Ordre du jour
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Dossiers à examiner</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Commune</th>
                  <th scope="col">Stade</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Jean Dupont</td>
                  <td>SCI Les Lilas</td>
                  <td>Paris 20e</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Assignation</span></td>
                  <td>
                    <button className="fr-btn fr-btn--sm fr-btn--tertiary fr-fi-delete-line fr-btn--icon-left">
                      Retirer
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Marie Martin</td>
                  <td>Pierre Durand</td>
                  <td>Paris 16e</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Commandement de quitter</span></td>
                  <td>
                    <button className="fr-btn fr-btn--sm fr-btn--tertiary fr-fi-delete-line fr-btn--icon-left">
                      Retirer
                    </button>
                  </td>
                </tr>
              </tbody>
            </div>

            <div className="fr-btns-group fr-mt-3w">
              <Link href="/dashboard/ccapex/case/search" className="fr-btn fr-btn--secondary fr-fi-add-line fr-btn--icon-left">
                Ajouter un dossier
              </Link>
            </div>

            <div className="fr-input-group fr-mt-3w">
              <label className="fr-label" htmlFor="other-agenda-items">
                Autres points à l'ordre du jour
              </label>
              <textarea className="fr-input" id="other-agenda-items" name="other-agenda-items" rows={3}></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Documents
          </h2>
          <div className="fr-card__content">
            <div className="fr-upload-group">
              <label className="fr-label" htmlFor="meeting-documents">
                Joindre des documents
                <span className="fr-hint-text">Formats acceptés : PDF, DOCX, XLSX (max 10 Mo par fichier)</span>
              </label>
              <input className="fr-upload" type="file" id="meeting-documents" name="meeting-documents" multiple />
            </div>
          </div>
        </div>
      </div>

      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <button className="fr-btn fr-btn--secondary">
              Enregistrer comme brouillon
            </button>
            <button className="fr-btn">
              Planifier la réunion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

