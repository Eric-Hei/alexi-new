import React from 'react';
import Link from 'next/link';

export default function JudicialOfficerDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord commissaire de justice</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace de travail. Gérez ici les dossiers d'expulsion et soumettez vos notifications dématérialisées.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/judicial/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/judicial/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
              <span className="fr-badge fr-badge--sm fr-badge--error">3</span>
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
                      28
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Notifications à envoyer
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      5
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
                      12
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
                      8
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications à envoyer */}
      <h2 className="fr-mb-2w">Notifications à envoyer</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Notifications en attente d'envoi</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Type</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Date limite</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Commandement de payer</td>
                  <td>Jean Dupont</td>
                  <td>SCI Les Lilas</td>
                  <td>12 rue des Lilas, 75020 Paris</td>
                  <td>15/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/judicial/notification/12345" className="fr-btn fr-btn--sm">
                        Envoyer
                      </Link>
                      <Link href="/dashboard/judicial/edit/12345" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Modifier
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Assignation</td>
                  <td>Marie Martin</td>
                  <td>Pierre Durand</td>
                  <td>45 avenue Victor Hugo, 75016 Paris</td>
                  <td>18/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/judicial/notification/12346" className="fr-btn fr-btn--sm">
                        Envoyer
                      </Link>
                      <Link href="/dashboard/judicial/edit/12346" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Modifier
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Dossiers récents */}
      <h2 className="fr-mb-2w">Dossiers récents</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Derniers dossiers traités</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Dernière action</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12340</td>
                  <td>Sophie Petit</td>
                  <td>OPHLM Paris</td>
                  <td>8 rue du Commerce, 75015 Paris</td>
                  <td><span className="fr-badge fr-badge--success fr-badge--no-icon">Résolu</span></td>
                  <td>Plan d'apurement accepté</td>
                  <td>
                    <Link href="/dashboard/judicial/case/12340" className="fr-btn fr-btn--sm">
                      Voir
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12338</td>
                  <td>Thomas Bernard</td>
                  <td>SCI Montmartre</td>
                  <td>25 rue Lepic, 75018 Paris</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Audience</span></td>
                  <td>Assignation envoyée</td>
                  <td>
                    <Link href="/dashboard/judicial/case/12338" className="fr-btn fr-btn--sm">
                      Voir
                    </Link>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12">
          <h2 className="fr-mb-2w">Actions rapides</h2>
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <div className="fr-btns-group fr-btns-group--inline-md">
                  <Link href="/dashboard/judicial/notification/new" className="fr-btn fr-fi-add-line fr-btn--icon-left">
                    Nouvelle notification
                  </Link>
                  <Link href="/dashboard/judicial/search" className="fr-btn fr-btn--secondary fr-fi-search-line fr-btn--icon-left">
                    Rechercher un dossier
                  </Link>
                  <Link href="/dashboard/judicial/reports" className="fr-btn fr-btn--tertiary fr-fi-file-download-line fr-btn--icon-left">
                    Générer un rapport
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

