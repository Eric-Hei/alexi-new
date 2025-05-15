import React from 'react';
import Link from 'next/link';

export default function NewNotificationPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Nouvelle notification</h1>
          <p className="fr-text--lead">
            Créez et envoyez une nouvelle notification dématérialisée aux parties concernées.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/judicial" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Informations importantes</h2>
            <p>
              Les notifications envoyées via ALEXI sont automatiquement transmises aux parties concernées (locataire, bailleur) ainsi qu'aux autorités compétentes (préfecture, CCAPEX) selon le type de document.
            </p>
            <ul className="fr-list">
              <li>Vérifiez soigneusement toutes les informations avant l'envoi.</li>
              <li>Les documents joints doivent être au format PDF et ne pas dépasser 10 Mo.</li>
              <li>Une fois envoyée, la notification ne peut plus être modifiée.</li>
              <li>Un accusé de réception vous sera transmis après validation par la préfecture.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Type de notification
          </h2>
          <div className="fr-card__content">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <legend className="fr-fieldset__legend">Sélectionnez le type de notification</legend>
                <div className="fr-fieldset__content">
                  <div className="fr-radio-group">
                    <input type="radio" id="notification-type-1" name="notification-type" value="commandement-payer" />
                    <label className="fr-label" htmlFor="notification-type-1">Commandement de payer</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="notification-type-2" name="notification-type" value="assignation" />
                    <label className="fr-label" htmlFor="notification-type-2">Assignation</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="notification-type-3" name="notification-type" value="decision-justice" />
                    <label className="fr-label" htmlFor="notification-type-3">Décision de justice</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="notification-type-4" name="notification-type" value="commandement-quitter" />
                    <label className="fr-label" htmlFor="notification-type-4">Commandement de quitter les lieux</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="notification-type-5" name="notification-type" value="autre" />
                    <label className="fr-label" htmlFor="notification-type-5">Autre</label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Informations du dossier
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="reference">
                    Référence du dossier
                    <span className="fr-hint-text">Numéro de référence interne</span>
                  </label>
                  <input className="fr-input" type="text" id="reference" name="reference" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="date">
                    Date du document
                  </label>
                  <input className="fr-input" type="date" id="date" name="date" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Informations du locataire
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="tenant-name">
                    Nom et prénom
                  </label>
                  <input className="fr-input" type="text" id="tenant-name" name="tenant-name" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="tenant-email">
                    Email
                  </label>
                  <input className="fr-input" type="email" id="tenant-email" name="tenant-email" />
                </div>
              </div>
              <div className="fr-col-12">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="tenant-address">
                    Adresse du logement
                  </label>
                  <input className="fr-input" type="text" id="tenant-address" name="tenant-address" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Informations du bailleur
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="landlord-name">
                    Nom / Raison sociale
                  </label>
                  <input className="fr-input" type="text" id="landlord-name" name="landlord-name" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="landlord-email">
                    Email
                  </label>
                  <input className="fr-input" type="email" id="landlord-email" name="landlord-email" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Document
          </h2>
          <div className="fr-card__content">
            <div className="fr-upload-group">
              <label className="fr-label" htmlFor="file-upload">
                Joindre le document (PDF)
                <span className="fr-hint-text">Taille maximale : 10 Mo</span>
              </label>
              <input className="fr-upload" type="file" id="file-upload" name="file-upload" accept=".pdf" />
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
              Envoyer la notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

