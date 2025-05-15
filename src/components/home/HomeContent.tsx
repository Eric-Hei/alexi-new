'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { getRoleLabel, getDashboardPath } from '@/utils/dashboardUtils';

export default function HomeContent() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === 'authenticated';

  return (
    <div className="fr-py-8w">
      {/* Hero section */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col-12 fr-col-md-6">
          <h1>ALEXI</h1>
          <p className="fr-text--lead">
            Application de gestion et de prévention des expulsions locatives
          </p>
          <p className="fr-text">
            ALEXI est une plateforme numérique qui facilite la coordination entre tous les acteurs impliqués dans la prévention des expulsions locatives.
          </p>
          {isAuthenticated ? (
            <Link href={getDashboardPath(session.user.role)} className="fr-btn fr-btn--lg fr-fi-arrow-right-line fr-btn--icon-right">
              Accéder à mon espace {getRoleLabel(session.user.role).toLowerCase()}
            </Link>
          ) : (
            <Link href="/login" className="fr-btn fr-btn--lg fr-fi-account-line fr-btn--icon-right">
              Se connecter
            </Link>
          )}
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <img src="/hero-image.svg" alt="Illustration ALEXI" className="fr-responsive-img" />
        </div>
      </div>

      {/* Accès par profil - affiché uniquement si non connecté */}
      {!isAuthenticated && (
        <div className="fr-grid-row fr-grid-row--gutters fr-mb-4w">
          <div className="fr-col-12">
            <h2>Accès par profil</h2>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/tenant">Espace locataire</a>
                </h3>
                <p className="fr-tile__desc">Accédez à des conseils, des ressources et des outils pour résoudre vos problèmes de dette et éviter l'expulsion.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/landlord">Espace bailleur</a>
                </h3>
                <p className="fr-tile__desc">Signalez facilement les problèmes, accédez à la médiation et suivez l'avancement de vos dossiers.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/judicial">Espace commissaire de justice</a>
                </h3>
                <p className="fr-tile__desc">Soumettez des notifications dématérialisées et suivez l'avancement des procédures d'expulsion.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/mediator">Espace médiateur</a>
                </h3>
                <p className="fr-tile__desc">Gérez les demandes de médiation entre locataires et bailleurs pour trouver des solutions amiables.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/social">Espace services sociaux</a>
                </h3>
                <p className="fr-tile__desc">Suivez les cas actifs, attribuez des tâches et suivez les résultats de la prévention.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/prefecture">Espace préfecture</a>
                </h3>
                <p className="fr-tile__desc">Supervisez les procédures d'expulsion et accédez aux statistiques départementales.</p>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-tile fr-tile--horizontal">
              <div className="fr-tile__body">
                <h3 className="fr-tile__title">
                  <a className="fr-tile__link" href="/dashboard/ccapex">Espace CCAPEX</a>
                </h3>
                <p className="fr-tile__desc">Coordonnez les actions de prévention des expulsions et examinez les dossiers prioritaires.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fonctionnalités - affiché pour tous */}
      <div className="fr-grid-row fr-grid-row--gutters fr-mb-4w">
        <div className="fr-col-12">
          <h2>Fonctionnalités</h2>
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <h3 className="fr-card__title">
                <span className="fr-icon-file-text-line fr-icon--lg" aria-hidden="true"></span>
                Notifications dématérialisées
              </h3>
              <p className="fr-card__desc">Transmission automatique des actes aux parties concernées et aux autorités compétentes.</p>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <h3 className="fr-card__title">
                <span className="fr-icon-discuss-line fr-icon--lg" aria-hidden="true"></span>
                Médiation facilitée
              </h3>
              <p className="fr-card__desc">Mise en relation des locataires et des bailleurs avec des médiateurs pour trouver des solutions amiables.</p>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-4">
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <h3 className="fr-card__title">
                <span className="fr-icon-line-chart-line fr-icon--lg" aria-hidden="true"></span>
                Statistiques et analyses
              </h3>
              <p className="fr-card__desc">Suivi des tendances et évaluation de l'efficacité des mesures de prévention.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ressources - affiché pour tous */}
      <div className="fr-grid-row fr-grid-row--gutters fr-mb-4w">
        <div className="fr-col-12">
          <h2>Ressources</h2>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--horizontal fr-card--shadow">
            <div className="fr-card__body">
              <h3 className="fr-card__title">
                <a className="fr-card__link" href="/resources/guides">Guides et documentation</a>
              </h3>
              <p className="fr-card__desc">Consultez nos guides pratiques sur les procédures d'expulsion et les dispositifs d'aide.</p>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--horizontal fr-card--shadow">
            <div className="fr-card__body">
              <h3 className="fr-card__title">
                <a className="fr-card__link" href="/resources/faq">Questions fréquentes</a>
              </h3>
              <p className="fr-card__desc">Trouvez des réponses aux questions les plus courantes sur les impayés de loyer et les expulsions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
