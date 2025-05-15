import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div className="fr-card fr-card--shadow fr-p-4w">
            <div className="fr-card__body">
              <h1 className="fr-card__title fr-mb-4w">Créer un compte</h1>
              <form>
                <div className="fr-fieldset">
                  <div className="fr-fieldset__element">
                    <div className="fr-select-group">
                      <label className="fr-label" htmlFor="user-type">
                        Je suis
                        <span className="fr-hint-text">Sélectionnez votre profil</span>
                      </label>
                      <select className="fr-select" id="user-type" name="user-type" required>
                        <option value="" selected disabled hidden>Sélectionnez une option</option>
                        <option value="tenant">Locataire</option>
                        <option value="landlord">Bailleur</option>
                        <option value="social">Travailleur social</option>
                        <option value="judicial">Commissaire de justice</option>
                        <option value="prefecture">Agent de préfecture</option>
                      </select>
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-input-group">
                      <label className="fr-label" htmlFor="lastname">
                        Nom
                      </label>
                      <input className="fr-input" type="text" id="lastname" name="lastname" required />
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-input-group">
                      <label className="fr-label" htmlFor="firstname">
                        Prénom
                      </label>
                      <input className="fr-input" type="text" id="firstname" name="firstname" required />
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-input-group">
                      <label className="fr-label" htmlFor="email">
                        Adresse email
                        <span className="fr-hint-text">Format attendu : nom@exemple.fr</span>
                      </label>
                      <input className="fr-input" type="email" id="email" name="email" required />
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-password">
                      <label className="fr-label" htmlFor="password">
                        Mot de passe
                        <span className="fr-hint-text">8 caractères minimum avec au moins 1 majuscule, 1 minuscule et 1 chiffre</span>
                      </label>
                      <div className="fr-input-wrap">
                        <input className="fr-password__input fr-input" type="password" id="password" name="password" required minLength={8} />
                        <button className="fr-password__btn" aria-label="Afficher le mot de passe" type="button">
                          <span className="fr-icon-eye-line" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-password">
                      <label className="fr-label" htmlFor="confirm-password">
                        Confirmer le mot de passe
                      </label>
                      <div className="fr-input-wrap">
                        <input className="fr-password__input fr-input" type="password" id="confirm-password" name="confirm-password" required minLength={8} />
                        <button className="fr-password__btn" aria-label="Afficher le mot de passe" type="button">
                          <span className="fr-icon-eye-line" aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-checkbox-group">
                      <input type="checkbox" id="terms" name="terms" required />
                      <label className="fr-label" htmlFor="terms">
                        J'accepte les <Link href="/terms" className="fr-link">conditions d'utilisation</Link> et la <Link href="/privacy" className="fr-link">politique de confidentialité</Link>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="fr-mt-4w">
                  <button type="submit" className="fr-btn fr-btn--lg fr-mb-2w fr-btn--icon-right fr-icon-arrow-right-line">
                    Créer mon compte
                  </button>
                </div>
              </form>
              <div className="fr-mt-4w">
                <p>
                  Vous avez déjà un compte ? <Link href="/login" className="fr-link">Se connecter</Link>
                </p>
              </div>
              <div className="fr-mt-4w fr-divider"></div>
              <div className="fr-mt-4w">
                <h2 className="fr-h5">Autres méthodes d'inscription</h2>
                <div className="fr-mt-2w">
                  <a href="/api/auth/franceconnect" className="fr-btn fr-btn--secondary fr-btn--lg fr-mb-2w">
                    <img src="/fc-logo.svg" alt="FranceConnect" className="fr-mr-1w" style={{ height: '1.5rem' }} />
                    S'identifier avec FranceConnect
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
