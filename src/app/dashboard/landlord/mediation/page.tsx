import React from 'react';
import Link from 'next/link';

export default function LandlordMediationPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Demande de médiation</h1>
          <p className="fr-text--lead">
            Initiez une médiation pour trouver une solution amiable avec votre locataire concernant les impayés de loyer.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/landlord" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Informations sur la médiation</h2>
            <p>
              La médiation est un processus volontaire qui permet de trouver une solution amiable à une situation d'impayés avec l'aide d'un tiers neutre.
            </p>
            <ol className="fr-list">
              <li>Après soumission de votre demande, votre locataire sera contacté sous 48h.</li>
              <li>S'il accepte la médiation, un rendez-vous sera fixé (en présentiel ou en visioconférence).</li>
              <li>Un médiateur neutre facilitera la discussion pour trouver un accord.</li>
              <li>Si un accord est trouvé, un protocole sera signé par les deux parties.</li>
              <li>Le respect de ce protocole sera suivi par la plateforme ALEXI.</li>
            </ol>
            <p className="fr-text--sm fr-mt-2w">
              <strong>Avantages de la médiation :</strong> Procédure rapide, moins coûteuse qu'une action en justice, préserve la relation bailleur-locataire, et permet de trouver des solutions adaptées à chaque situation.
            </p>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Sélection du dossier
          </h2>
          <div className="fr-card__content">
            <div className="fr-select-group">
              <label className="fr-label" htmlFor="case-select">
                Sélectionnez le dossier concerné
                <span className="fr-hint-text">Choisissez le dossier pour lequel vous souhaitez demander une médiation</span>
              </label>
              <select className="fr-select" id="case-select" name="case-select" defaultValue="">
                <option value="" disabled hidden>Sélectionnez un dossier</option>
                <option value="ALEXI-2025-12345">ALEXI-2025-12345 - Jean Dupont - 12 rue des Lilas, 75020 Paris</option>
                <option value="ALEXI-2025-12346">ALEXI-2025-12346 - Marie Martin - 45 avenue Victor Hugo, 75016 Paris</option>
                <option value="ALEXI-2025-12347">ALEXI-2025-12347 - Thomas Bernard - 8 rue du Commerce, 75015 Paris</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Motif de la demande
          </h2>
          <div className="fr-card__content">
            <div className="fr-input-group">
              <label className="fr-label" htmlFor="mediation-reason">
                Précisez le motif de votre demande de médiation
                <span className="fr-hint-text">Expliquez brièvement la situation et ce que vous attendez de la médiation</span>
              </label>
              <textarea className="fr-input" id="mediation-reason" name="mediation-reason" rows={5}></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Proposition de solution
          </h2>
          <div className="fr-card__content">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <legend className="fr-fieldset__legend">Type de solution envisagée</legend>
                <div className="fr-fieldset__content">
                  <div className="fr-radio-group">
                    <input type="radio" id="solution-type-1" name="solution-type" value="payment-plan" />
                    <label className="fr-label" htmlFor="solution-type-1">Plan d'apurement</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="solution-type-2" name="solution-type" value="partial-payment" />
                    <label className="fr-label" htmlFor="solution-type-2">Effacement partiel de la dette</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="solution-type-3" name="solution-type" value="relocation" />
                    <label className="fr-label" htmlFor="solution-type-3">Relogement</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="solution-type-4" name="solution-type" value="other" />
                    <label className="fr-label" htmlFor="solution-type-4">Autre</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="fr-input-group fr-mt-3w">
              <label className="fr-label" htmlFor="solution-details">
                Détails de votre proposition
                <span className="fr-hint-text">Précisez les modalités de votre proposition (montants, échéances, etc.)</span>
              </label>
              <textarea className="fr-input" id="solution-details" name="solution-details" rows={5}></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Disponibilités
          </h2>
          <div className="fr-card__content">
            <div className="fr-form-group">
              <fieldset className="fr-fieldset">
                <legend className="fr-fieldset__legend">Format de médiation préféré</legend>
                <div className="fr-fieldset__content">
                  <div className="fr-radio-group">
                    <input type="radio" id="format-1" name="format" value="in-person" />
                    <label className="fr-label" htmlFor="format-1">En présentiel</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="format-2" name="format" value="video" />
                    <label className="fr-label" htmlFor="format-2">En visioconférence</label>
                  </div>
                  <div className="fr-radio-group">
                    <input type="radio" id="format-3" name="format" value="both" />
                    <label className="fr-label" htmlFor="format-3">Les deux options me conviennent</label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="fr-grid-row fr-grid-row--gutters fr-mt-3w">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="availability-1">
                    Disponibilité 1
                  </label>
                  <input className="fr-input" type="datetime-local" id="availability-1" name="availability-1" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="availability-2">
                    Disponibilité 2
                  </label>
                  <input className="fr-input" type="datetime-local" id="availability-2" name="availability-2" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="availability-3">
                    Disponibilité 3
                  </label>
                  <input className="fr-input" type="datetime-local" id="availability-3" name="availability-3" />
                </div>
              </div>
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
              Envoyer la demande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

