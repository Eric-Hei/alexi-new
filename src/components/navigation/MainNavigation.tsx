'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { getRoleLabel, getDashboardPath } from '@/utils/dashboardUtils';

export default function MainNavigation() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const pathname = usePathname();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  // Détermine si un lien est actif
  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav className="fr-nav" id="navigation-menu" role="navigation" aria-label="Menu principal">
      <ul className="fr-nav__list">
        <li className="fr-nav__item">
          <Link className={`fr-nav__link ${isActive('/') ? 'fr-nav__link--active' : ''}`} href="/">
            Accueil
          </Link>
        </li>

        {isAuthenticated ? (
          // Menu pour utilisateur connecté
          <>
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link ${isActive(getDashboardPath(session.user.role)) ? 'fr-nav__link--active' : ''}`}
                href={getDashboardPath(session.user.role)}
              >
                Mon tableau de bord
              </Link>
            </li>

            {/* Liens spécifiques selon le rôle */}
            {session.user.role === 'TENANT' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/tenant/aid') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/tenant/aid"
                >
                  Demander une aide
                </Link>
              </li>
            )}

            {session.user.role === 'LANDLORD' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/landlord/mediation') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/landlord/mediation"
                >
                  Demander une médiation
                </Link>
              </li>
            )}

            {session.user.role === 'JUDICIAL_OFFICER' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/judicial/notification/new') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/judicial/notification/new"
                >
                  Nouvelle notification
                </Link>
              </li>
            )}

            {session.user.role === 'MEDIATOR' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/mediator/case') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/mediator/case"
                >
                  Mes dossiers
                </Link>
              </li>
            )}

            {session.user.role === 'SOCIAL_WORKER' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/social/alerts') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/social/alerts"
                >
                  Alertes
                </Link>
              </li>
            )}

            {session.user.role === 'PREFECTURE' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/prefecture/analytics') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/prefecture/analytics/trends"
                >
                  Statistiques
                </Link>
              </li>
            )}

            {session.user.role === 'CCAPEX' && (
              <li className="fr-nav__item">
                <Link
                  className={`fr-nav__link ${isActive('/dashboard/ccapex/meeting') ? 'fr-nav__link--active' : ''}`}
                  href="/dashboard/ccapex/meeting/new"
                >
                  Planifier une réunion
                </Link>
              </li>
            )}

            {/* Lien vers les ressources */}
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link ${isActive('/resources') ? 'fr-nav__link--active' : ''}`}
                href="/resources"
              >
                Ressources
              </Link>
            </li>

            {/* Lien vers l'aide */}
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link ${isActive('/help') ? 'fr-nav__link--active' : ''}`}
                href="/help"
              >
                Aide
              </Link>
            </li>

            {/* Bouton de déconnexion */}
            <li className="fr-nav__item">
              <button
                className="fr-nav__link fr-fi-logout-box-r-line fr-link--icon-right"
                onClick={handleSignOut}
              >
                Se déconnecter
              </button>
            </li>
          </>
        ) : (
          // Menu pour utilisateur non connecté
          <>
            <li className="fr-nav__item">
              <button className="fr-nav__btn" aria-expanded="false" aria-controls="menu-dashboard">
                Tableau de bord
              </button>
              <div className="fr-collapse fr-menu" id="menu-dashboard">
                <ul className="fr-menu__list">
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/tenant">
                      Espace locataire
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/landlord">
                      Espace bailleur
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/judicial">
                      Espace commissaire de justice
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/mediator">
                      Espace médiateur
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/social">
                      Espace services sociaux
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/prefecture">
                      Espace préfecture
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/ccapex">
                      Espace CCAPEX
                    </Link>
                  </li>
                  <li>
                    <Link className="fr-nav__link" href="/dashboard/analytics">
                      Analyses et statistiques
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link ${isActive('/resources') ? 'fr-nav__link--active' : ''}`}
                href="/resources"
              >
                Ressources
              </Link>
            </li>
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link ${isActive('/help') ? 'fr-nav__link--active' : ''}`}
                href="/help"
              >
                Aide
              </Link>
            </li>
            <li className="fr-nav__item">
              <Link
                className={`fr-nav__link fr-fi-account-line fr-link--icon-left ${isActive('/login') ? 'fr-nav__link--active' : ''}`}
                href="/login"
              >
                Se connecter
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
