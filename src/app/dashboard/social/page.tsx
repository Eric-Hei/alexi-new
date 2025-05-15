import React from 'react';
import Link from 'next/link';

export default function SocialWorkerDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord services sociaux</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace de travail. Gérez ici les dossiers des locataires en difficulté.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/social/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/social/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
            </Link>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Statistiques
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Dossiers actifs
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      42
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Urgents
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      En médiation
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--info">
                      15
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Résolus ce mois
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--success">
                      12
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dossiers urgents */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Dossiers urgents
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Dossiers nécessitant une intervention rapide</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Échéance</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Jean Dupont</td>
                  <td>12 rue des Lilas, 75020 Paris</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Assignation</span></td>
                  <td>15/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12345" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <Link href="/dashboard/social/case/12345/contact" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Contacter
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12347</td>
                  <td>Marie Martin</td>
                  <td>45 avenue Victor Hugo, 75016 Paris</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Audience</span></td>
                  <td>20/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12347" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <Link href="/dashboard/social/case/12347/contact" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Contacter
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12350</td>
                  <td>Pierre Durand</td>
                  <td>8 rue du Commerce, 75015 Paris</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">Commandement de payer</span></td>
                  <td>25/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12350" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <Link href="/dashboard/social/case/12350/contact" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Contacter
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
            <div className="fr-mt-2w">
              <Link href="/dashboard/social/cases/urgent" className="fr-link fr-fi-arrow-right-line fr-link--icon-right">
                Voir tous les dossiers urgents
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Demandes d'aide */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Demandes d'aide en attente
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Demandes d'aide financière à traiter</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Type d'aide</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Date de demande</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FSL-2025-4567</td>
                  <td>Jean Dupont</td>
                  <td>FSL</td>
                  <td>1 200,00 €</td>
                  <td>05/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/aid/4567" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>FSL-2025-4570</td>
                  <td>Sophie Petit</td>
                  <td>FSL</td>
                  <td>800,00 €</td>
                  <td>07/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/aid/4570" className="fr-btn fr-btn--sm">
                        Traiter
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
            <div className="fr-mt-2w">
              <Link href="/dashboard/social/aids" className="fr-link fr-fi-arrow-right-line fr-link--icon-right">
                Voir toutes les demandes d'aide
              </Link>
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
                  <Link href="/dashboard/social/case/new" className="fr-btn fr-fi-add-line fr-btn--icon-left">
                    Nouveau dossier
                  </Link>
                  <Link href="/dashboard/social/search" className="fr-btn fr-btn--secondary fr-fi-search-line fr-btn--icon-left">
                    Rechercher un dossier
                  </Link>
                  <Link href="/dashboard/social/reports" className="fr-btn fr-btn--tertiary fr-fi-file-download-line fr-btn--icon-left">
                    Générer un rapport
                  </Link>
                  <Link href="/dashboard/social/calendar" className="fr-btn fr-btn--tertiary fr-fi-calendar-line fr-btn--icon-left">
                    Calendrier des audiences
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

