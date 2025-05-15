'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl,
      });

      if (result?.error) {
        setError('Identifiants incorrects. Veuillez réessayer.');
        setLoading(false);
      } else if (result?.url) {
        router.push(callbackUrl);
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fr-container fr-py-8w">
      <div className="fr-grid-row fr-grid-row--center">
        <div className="fr-col-12 fr-col-md-8 fr-col-lg-6">
          <div className="fr-card fr-card--shadow fr-p-4w">
            <div className="fr-card__body">
              <h1 className="fr-card__title fr-mb-4w">Connexion</h1>
              {error && (
                <div className="fr-alert fr-alert--error fr-mb-4w">
                  <p>{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="fr-fieldset">
                  <div className="fr-fieldset__element">
                    <div className="fr-input-group">
                      <label className="fr-label" htmlFor="email">
                        Adresse email
                        <span className="fr-hint-text">Format attendu : nom@exemple.fr</span>
                      </label>
                      <input
                        className="fr-input"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-password">
                      <label className="fr-label" htmlFor="password">
                        Mot de passe
                        <span className="fr-hint-text">8 caractères minimum</span>
                      </label>
                      <div className="fr-input-wrap">
                        <input
                          className="fr-password__input fr-input"
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          minLength={8}
                        />
                        <button
                          className="fr-password__btn"
                          aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          <span className={showPassword ? "fr-icon-eye-off-line" : "fr-icon-eye-line"} aria-hidden="true"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="fr-fieldset__element">
                    <div className="fr-checkbox-group">
                      <input type="checkbox" id="remember-me" name="remember-me" />
                      <label className="fr-label" htmlFor="remember-me">Se souvenir de moi</label>
                    </div>
                  </div>
                </div>
                <div className="fr-mt-4w">
                  <button
                    type="submit"
                    className="fr-btn fr-btn--lg fr-mb-2w fr-btn--icon-right fr-icon-arrow-right-line"
                    disabled={loading}
                  >
                    {loading ? 'Connexion en cours...' : 'Se connecter'}
                  </button>
                </div>
              </form>
              <div className="fr-mt-4w">
                <p>
                  <Link href="/forgot-password" className="fr-link">Mot de passe oublié ?</Link>
                </p>
                <p className="fr-mt-2w">
                  Vous n'avez pas de compte ? <Link href="/register" className="fr-link">Créer un compte</Link>
                </p>
              </div>
              <div className="fr-mt-4w fr-divider"></div>
              <div className="fr-mt-4w">
                <h2 className="fr-h5">Autres méthodes de connexion</h2>
                <div className="fr-mt-2w">
                  <button
                    onClick={() => signIn('franceconnect', { callbackUrl })}
                    className="fr-btn fr-btn--secondary fr-btn--lg fr-mb-2w"
                    disabled
                  >
                    <img src="/fc-logo.svg" alt="FranceConnect" className="fr-mr-1w" style={{ height: '1.5rem' }} />
                    S'identifier avec FranceConnect (à venir)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
