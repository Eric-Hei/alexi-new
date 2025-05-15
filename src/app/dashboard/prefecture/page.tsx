import React from 'react';
import Link from 'next/link';

export default function PrefectureDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord préfecture</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace de travail. Supervisez ici les procédures d'expulsion et accédez aux statistiques départementales.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/prefecture/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/prefecture/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
              <span className="fr-badge fr-badge--sm fr-badge--error">7</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Statistiques */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Statistiques départementales
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Procédures actives
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      342
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Commandements
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      156
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Assignations
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--info">
                      98
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Demandes de concours
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      45
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Notifications à traiter */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Notifications à traiter
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Notifications reçues nécessitant une action</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Type</th>
                  <th scope="col">Commissaire</th>
                  <th scope="col">Date de réception</th>
                  <th scope="col">Commune</th>
                  <th scope="col">Délai</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Commandement de payer</td>
                  <td>Me Dubois</td>
                  <td>10/05/2025</td>
                  <td>Paris 20e</td>
                  <td>2 jours</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/prefecture/notification/12345" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                      <Link href="/dashboard/prefecture/case/12345" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Voir le dossier
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Assignation</td>
                  <td>Me Martin</td>
                  <td>11/05/2025</td>
                  <td>Paris 16e</td>
                  <td>1 jour</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/prefecture/notification/12346" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                      <Link href="/dashboard/prefecture/case/12346" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Voir le dossier
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demandes de concours de la force publique */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Demandes de concours de la force publique
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Demandes en attente de décision</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Commissaire</th>
                  <th scope="col">Date de demande</th>
                  <th scope="col">Commune</th>
                  <th scope="col">Délai légal</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12320</td>
                  <td>Me Dupont</td>
                  <td>01/05/2025</td>
                  <td>Paris 18e</td>
                  <td>30 jours</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">En attente d'enquête</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/prefecture/force/12320" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                      <Link href="/dashboard/prefecture/case/12320" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Voir le dossier
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12315</td>
                  <td>Me Leroy</td>
                  <td>28/04/2025</td>
                  <td>Paris 15e</td>
                  <td>23 jours</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Enquête sociale en cours</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/prefecture/force/12315" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                      <Link href="/dashboard/prefecture/case/12315" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Voir le dossier
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>
      
      {/* Analyse et rapports */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Analyse et rapports
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-card fr-card--grey fr-card--no-border">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h3>Tendances des expulsions</h3>
                      <p>Évolution des procédures d'expulsion sur les 12 derniers mois</p>
                      <Link href="/dashboard/prefecture/analytics/trends" className="fr-btn fr-btn--secondary fr-btn--sm fr-fi-line-chart-line fr-btn--icon-left">
                        Voir le rapport
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-card fr-card--grey fr-card--no-border">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h3>Cartographie des impayés</h3>
                      <p>Répartition géographique des procédures par commune</p>
                      <Link href="/dashboard/prefecture/analytics/map" className="fr-btn fr-btn--secondary fr-btn--sm fr-fi-map-pin-2-line fr-btn--icon-left">
                        Voir la carte
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actions rapides */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12">
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Actions rapides
              </h2>
              <div className="fr-card__content">
                <div className="fr-btns-group fr-btns-group--inline-md">
                  <Link href="/dashboard/prefecture/search" className="fr-btn fr-fi-search-line fr-btn--icon-left">
                    Rechercher un dossier
                  </Link>
                  <Link href="/dashboard/prefecture/reports" className="fr-btn fr-btn--secondary fr-fi-file-download-line fr-btn--icon-left">
                    Générer un rapport
                  </Link>
                  <Link href="/dashboard/prefecture/ccapex" className="fr-btn fr-btn--tertiary fr-fi-user-group-line fr-btn--icon-left">
                    Convoquer la CCAPEX
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

