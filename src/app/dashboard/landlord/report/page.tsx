import React from 'react';
import Link from 'next/link';

export default function ReportUnpaidRentPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Signaler un impayé de loyer</h1>
          <p className="fr-text--lead">
            Utilisez ce formulaire pour signaler un impayé de loyer et initier une procédure de recouvrement amiable.
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
            <h2>Informations importantes</h2>
            <p>
              Le signalement d'un impayé de loyer via ALEXI permet d'initier une procédure de recouvrement amiable avant d'engager des démarches judiciaires. Voici les étapes qui suivront votre signalement :
            </p>
            <ol className="fr-list">
              <li>Votre locataire sera informé du signalement et invité à régulariser sa situation.</li>
              <li>Les services sociaux pourront être alertés pour proposer des aides adaptées à votre locataire.</li>
              <li>Une médiation pourra être proposée pour trouver une solution amiable.</li>
              <li>Si aucune solution n'est trouvée, vous serez accompagné dans les démarches judiciaires.</li>
            </ol>
          </div>
        </div>
      </div>

      <form>
        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Informations sur le logement</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="property-address">
                      Adresse du logement
                      <span className="fr-hint-text">Numéro, rue, code postal, ville</span>
                    </label>
                    <input className="fr-input" type="text" id="property-address" name="property-address" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-select-group">
                    <label className="fr-label" htmlFor="property-type">
                      Type de logement
                    </label>
                    <select className="fr-select" id="property-type" name="property-type" required>
                      <option value="" selected disabled hidden>Sélectionnez une option</option>
                      <option value="apartment">Appartement</option>
                      <option value="house">Maison</option>
                      <option value="studio">Studio</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="rent-amount">
                      Montant du loyer mensuel (€)
                      <span className="fr-hint-text">Hors charges</span>
                    </label>
                    <input className="fr-input" type="number" id="rent-amount" name="rent-amount" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="charges-amount">
                      Montant des charges mensuelles (€)
                    </label>
                    <input className="fr-input" type="number" id="charges-amount" name="charges-amount" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="lease-start-date">
                      Date de début du bail
                    </label>
                    <input className="fr-input" type="date" id="lease-start-date" name="lease-start-date" required />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Informations sur le locataire</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="tenant-lastname">
                      Nom du locataire
                    </label>
                    <input className="fr-input" type="text" id="tenant-lastname" name="tenant-lastname" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="tenant-firstname">
                      Prénom du locataire
                    </label>
                    <input className="fr-input" type="text" id="tenant-firstname" name="tenant-firstname" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="tenant-email">
                      Adresse email du locataire
                      <span className="fr-hint-text">Si connue</span>
                    </label>
                    <input className="fr-input" type="email" id="tenant-email" name="tenant-email" />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="tenant-phone">
                      Numéro de téléphone du locataire
                      <span className="fr-hint-text">Si connu</span>
                    </label>
                    <input className="fr-input" type="tel" id="tenant-phone" name="tenant-phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Détails de l'impayé</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="unpaid-amount">
                      Montant total impayé (€)
                    </label>
                    <input className="fr-input" type="number" id="unpaid-amount" name="unpaid-amount" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Mois concernés par l'impayé
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-january" name="unpaid-months" value="january" />
                        <label className="fr-label" htmlFor="month-january">Janvier</label>
                      </div>
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-february" name="unpaid-months" value="february" />
                        <label className="fr-label" htmlFor="month-february">Février</label>
                      </div>
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-march" name="unpaid-months" value="march" />
                        <label className="fr-label" htmlFor="month-march">Mars</label>
                      </div>
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-april" name="unpaid-months" value="april" />
                        <label className="fr-label" htmlFor="month-april">Avril</label>
                      </div>
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-may" name="unpaid-months" value="may" />
                        <label className="fr-label" htmlFor="month-may">Mai</label>
                      </div>
                      <div className="fr-checkbox-group">
                        <input type="checkbox" id="month-june" name="unpaid-months" value="june" />
                        <label className="fr-label" htmlFor="month-june">Juin</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="first-unpaid-date">
                      Date du premier impayé
                    </label>
                    <input className="fr-input" type="date" id="first-unpaid-date" name="first-unpaid-date" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Avez-vous déjà contacté le locataire au sujet de cet impayé ?
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-radio-group">
                        <input type="radio" id="contact-yes" name="tenant-contacted" value="yes" />
                        <label className="fr-label" htmlFor="contact-yes">Oui</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="contact-no" name="tenant-contacted" value="no" />
                        <label className="fr-label" htmlFor="contact-no">Non</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="contact-details">
                      Si oui, précisez les démarches déjà effectuées
                    </label>
                    <textarea className="fr-input" id="contact-details" name="contact-details" rows={3}></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Documents justificatifs</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-upload-group">
                    <label className="fr-label" htmlFor="lease-contract">
                      Contrat de bail
                      <span className="fr-hint-text">Format PDF, JPG ou PNG (max 5 Mo)</span>
                    </label>
                    <input className="fr-upload" type="file" id="lease-contract" name="lease-contract" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-upload-group">
                    <label className="fr-label" htmlFor="payment-proof">
                      Justificatifs des impayés
                      <span className="fr-hint-text">Relevés bancaires, quittances non payées, etc. (max 5 Mo)</span>
                    </label>
                    <input className="fr-upload" type="file" id="payment-proof" name="payment-proof" accept=".pdf,.jpg,.jpeg,.png" required />
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-upload-group">
                    <label className="fr-label" htmlFor="previous-communications">
                      Communications précédentes avec le locataire (optionnel)
                      <span className="fr-hint-text">Lettres, emails, SMS, etc. (max 5 Mo)</span>
                    </label>
                    <input className="fr-upload" type="file" id="previous-communications" name="previous-communications" accept=".pdf,.jpg,.jpeg,.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Préférences de traitement</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Êtes-vous ouvert à une médiation avec le locataire ?
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-radio-group">
                        <input type="radio" id="mediation-yes" name="mediation-open" value="yes" />
                        <label className="fr-label" htmlFor="mediation-yes">Oui</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="mediation-no" name="mediation-open" value="no" />
                        <label className="fr-label" htmlFor="mediation-no">Non</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <fieldset className="fr-fieldset">
                    <legend className="fr-fieldset__legend">
                      Acceptez-vous que les services sociaux soient informés de la situation ?
                    </legend>
                    <div className="fr-fieldset__content">
                      <div className="fr-radio-group">
                        <input type="radio" id="social-services-yes" name="social-services-informed" value="yes" />
                        <label className="fr-label" htmlFor="social-services-yes">Oui</label>
                      </div>
                      <div className="fr-radio-group">
                        <input type="radio" id="social-services-no" name="social-services-informed" value="no" />
                        <label className="fr-label" htmlFor="social-services-no">Non</label>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="additional-comments">
                      Commentaires additionnels
                    </label>
                    <textarea className="fr-input" id="additional-comments" name="additional-comments" rows={5}></textarea>
                  </div>
                </div>

                <div className="fr-fieldset__element">
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="terms-agreement" name="terms-agreement" required />
                    <label className="fr-label" htmlFor="terms-agreement">
                      Je certifie que les informations fournies sont exactes et j'accepte les <Link href="/terms" className="fr-link">conditions d'utilisation</Link> du service.
                    </label>
                  </div>
                </div>
              </div>

              <div className="fr-btns-group fr-btns-group--inline fr-mt-4w">
                <button type="submit" className="fr-btn">
                  Soumettre le signalement
                </button>
                <button type="reset" className="fr-btn fr-btn--secondary">
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
