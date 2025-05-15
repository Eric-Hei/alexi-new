import React from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div className="fr-card fr-card--shadow fr-p-4w">
            <div className="fr-card__body">
              <h1 className="fr-card__title fr-mb-4w">Mot de passe oublié</h1>
              <p className="fr-text--lg fr-mb-3w">
                Saisissez votre adresse email pour recevoir un lien de réinitialisation de votre mot de passe.
              </p>
              <form>
                <div className="fr-fieldset">
                  <div className="fr-fieldset__element">
                    <div className="fr-input-group">
                      <label className="fr-label" htmlFor="email">
                        Adresse email
                        <span className="fr-hint-text">Format attendu : nom@exemple.fr</span>
                      </label>
                      <input className="fr-input" type="email" id="email" name="email" required />
                    </div>
                  </div>
                </div>
                <div className="fr-mt-4w">
                  <button type="submit" className="fr-btn fr-btn--lg fr-mb-2w">
                    Envoyer le lien de réinitialisation
                  </button>
                </div>
              </form>
              <div className="fr-mt-4w">
                <p>
                  <Link href="/login" className="fr-link fr-fi-arrow-left-line fr-link--icon-left">
                    Retour à la page de connexion
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
