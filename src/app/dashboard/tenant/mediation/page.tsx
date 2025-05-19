import React from 'react';
import Link from 'next/link';

export default function MediationPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Demande de médiation</h1>
          <p className="fr-text--lead">
            La médiation est un processus volontaire qui permet de trouver une solution amiable à votre situation d'impayés avec l'aide d'un tiers neutre.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/tenant" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Avantages de la médiation</h2>
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Solution rapide
                    </h3>
                    <p className="fr-tile__desc">
                      Évitez les délais d'une procédure judiciaire qui peut durer plusieurs mois.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Préservation de la relation
                    </h3>
                    <p className="fr-tile__desc">
                      Maintenez un dialogue constructif avec votre bailleur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Solution adaptée
                    </h3>
                    <p className="fr-tile__desc">
                      Trouvez un accord qui tient compte de votre situation financière réelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Votre proposition de plan d'apurement</h2>
              <p className="fr-text--sm fr-mb-3w">
                Avant de demander une médiation, nous vous recommandons de préparer une proposition de plan d'apurement que vous souhaiteriez soumettre à votre bailleur.
              </p>

              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="current-debt">
                      Montant total de la dette
                      <span className="fr-hint-text">Loyers impayés + charges</span>
                    </label>
                    <input className="fr-input" type="number" id="current-debt" name="current-debt" value="2500" readOnly />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="monthly-payment">
                      Montant mensuel proposé pour le remboursement
                      <span className="fr-hint-text">En plus du loyer courant</span>
                    </label>
                    <input className="fr-input" type="number" id="monthly-payment" name="monthly-payment" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-select-group">
                    <label className="fr-label" htmlFor="payment-duration">
                      Durée de remboursement souhaitée
                    </label>
                    <select className="fr-select" id="payment-duration" name="payment-duration" required defaultValue="">
                      <option value="" disabled hidden>Sélectionnez une option</option>
                      <option value="3">3 mois</option>
                      <option value="6">6 mois</option>
                      <option value="9">9 mois</option>
                      <option value="12">12 mois</option>
                      <option value="18">18 mois</option>
                      <option value="24">24 mois</option>
                    </select>
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="first-payment-date">
                      Date du premier versement
                    </label>
                    <input className="fr-input" type="date" id="first-payment-date" name="first-payment-date" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="justification">
                      Justification de votre proposition
                      <span className="fr-hint-text">Expliquez pourquoi cette proposition est adaptée à votre situation</span>
                    </label>
                    <textarea className="fr-input" id="justification" name="justification" rows={5} required></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Informations complémentaires</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Avez-vous déjà sollicité des aides financières ?
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-radio-group">
                        <input type="radio" id="aids-yes" name="aids" value="yes" />
                        <label className="fr-label" htmlFor="aids-yes">Oui</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="aids-no" name="aids" value="no" />
                        <label className="fr-label" htmlFor="aids-no">Non</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="aids-details">
                      Si oui, précisez lesquelles
                      <span className="fr-hint-text">FSL, Action Logement, CCAS, etc.</span>
                    </label>
                    <textarea className="fr-input" id="aids-details" name="aids-details" rows={3}></textarea>
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Souhaitez-vous la présence d'un travailleur social lors de la médiation ?
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-radio-group">
                        <input type="radio" id="social-worker-yes" name="social-worker" value="yes" />
                        <label className="fr-label" htmlFor="social-worker-yes">Oui</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="social-worker-no" name="social-worker" value="no" />
                        <label className="fr-label" htmlFor="social-worker-no">Non</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="additional-info">
                      Informations complémentaires
                      <span className="fr-hint-text">Tout élément utile à la médiation</span>
                    </label>
                    <textarea className="fr-input" id="additional-info" name="additional-info" rows={5}></textarea>
                  </div>
                </div>
              </div>

              <div className="fr-btns-group fr-btns-group--inline fr-mt-4w">
                <button type="submit" className="fr-btn">
                  Soumettre ma demande de médiation
                </button>
                <button type="reset" className="fr-btn fr-btn--secondary">
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Déroulement de la médiation</h2>
            <ol className="fr-list">
              <li>Après soumission de votre demande, votre bailleur sera contacté sous 48h.</li>
              <li>S'il accepte la médiation, un rendez-vous sera fixé (en présentiel ou en visioconférence).</li>
              <li>Un médiateur neutre facilitera la discussion pour trouver un accord.</li>
              <li>Si un accord est trouvé, un protocole sera signé par les deux parties.</li>
              <li>Le respect de ce protocole sera suivi par la plateforme ALEXI.</li>
            </ol>
            <p className="fr-text--sm fr-mt-2w">
              <strong>Note :</strong> La médiation est un processus volontaire. Votre bailleur peut refuser d'y participer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
