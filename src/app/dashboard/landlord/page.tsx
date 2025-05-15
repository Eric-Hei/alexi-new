import React from 'react';
import Link from 'next/link';

export default function LandlordDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord bailleur</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace personnel. Gérez ici vos dossiers d'impayés et suivez leur progression.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/landlord/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/landlord/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
              <span className="fr-badge fr-badge--sm fr-badge--error">2</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Résumé des dossiers */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Résumé de vos dossiers
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Total
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      5
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      En cours
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      3
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Résolus
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--success">
                      2
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Montant total dû
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      7 850,00 €
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fr-btns-group fr-btns-group--inline fr-mt-4w">
              <Link href="/dashboard/landlord/report" className="fr-btn">
                Signaler un nouvel impayé
              </Link>
              <Link href="/dashboard/landlord/statistics" className="fr-btn fr-btn--secondary">
                Voir les statistiques
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des dossiers */}
      <h2 className="fr-mb-2w">Vos dossiers en cours</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Liste des dossiers d'impayés en cours</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Montant dû</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Jean Dupont</td>
                  <td>12 rue des Lilas, 75020 Paris</td>
                  <td>2 500,00 €</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">Commandement de payer</span></td>
                  <td>
                    <Link href="/dashboard/landlord/case/12345" className="fr-btn fr-btn--sm">
                      Détails
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Marie Martin</td>
                  <td>45 avenue Victor Hugo, 75016 Paris</td>
                  <td>3 200,00 €</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Assignation</span></td>
                  <td>
                    <Link href="/dashboard/landlord/case/12346" className="fr-btn fr-btn--sm">
                      Détails
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12347</td>
                  <td>Pierre Durand</td>
                  <td>8 boulevard Haussmann, 75009 Paris</td>
                  <td>2 150,00 €</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Médiation en cours</span></td>
                  <td>
                    <Link href="/dashboard/landlord/case/12347" className="fr-btn fr-btn--sm">
                      Détails
                    </Link>
                  </td>
                </tr>
              </tbody>
            </div>

            <div className="fr-pagination" aria-label="Pagination">
              <ul className="fr-pagination__list">
                <li>
                  <a className="fr-pagination__link fr-pagination__link--first" href="#" aria-label="Première page">
                    Première page
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link fr-pagination__link--prev" href="#" aria-label="Page précédente">
                    Page précédente
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link" aria-current="page" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link" href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link fr-pagination__link--next" href="#" aria-label="Page suivante">
                    Page suivante
                  </a>
                </li>
                <li>
                  <a className="fr-pagination__link fr-pagination__link--last" href="#" aria-label="Dernière page">
                    Dernière page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Propositions de médiation */}
      <h2 className="fr-mb-2w">Propositions de médiation</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-alert fr-alert--info fr-mb-4w">
              <h3 className="fr-alert__title">Information</h3>
              <p>
                La médiation peut vous aider à résoudre les conflits avec vos locataires sans passer par une procédure judiciaire.
                Vous avez actuellement 2 propositions de médiation en attente de votre réponse.
              </p>
            </div>

            <p className="fr-text--sm fr-mb-2w">Propositions de médiation en attente</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Proposition</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Jean Dupont</td>
                  <td>Plan de paiement sur 12 mois</td>
                  <td>10/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/landlord/mediation/12345" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Accepter
                      </button>
                      <button className="fr-btn fr-btn--sm fr-btn--tertiary">
                        Refuser
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12347</td>
                  <td>Pierre Durand</td>
                  <td>Réduction temporaire de loyer</td>
                  <td>12/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/landlord/mediation/12347" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Accepter
                      </button>
                      <button className="fr-btn fr-btn--sm fr-btn--tertiary">
                        Refuser
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Ressources et outils */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <h2 className="fr-mb-2w">Outils disponibles</h2>
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <ul className="fr-list fr-list--icon">
                  <li>
                    <span className="fr-fi-discuss-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/mediation" className="fr-link">
                      Proposer une médiation
                    </Link>
                    <p className="fr-text--sm">Initiez une médiation avec un locataire</p>
                  </li>
                  <li>
                    <span className="fr-fi-mail-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/dashboard/landlord/messages" className="fr-link">
                      Messagerie
                    </Link>
                    <p className="fr-text--sm">Communiquez avec les intervenants des dossiers</p>
                  </li>
                  <li>
                    <span className="fr-fi-file-pdf-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/dashboard/landlord/documents" className="fr-link">
                      Gestion des documents
                    </Link>
                    <p className="fr-text--sm">Accédez à tous les documents liés à vos dossiers</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-col-12 fr-col-md-6">
          <h2 className="fr-mb-2w">Ressources utiles</h2>
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <div className="fr-card__content">
                <ul className="fr-list fr-list--icon">
                  <li>
                    <span className="fr-fi-information-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources" className="fr-link">
                      Guide des procédures
                    </Link>
                    <p className="fr-text--sm">Comprendre les étapes d'une procédure d'expulsion</p>
                  </li>
                  <li>
                    <span className="fr-fi-scales-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources" className="fr-link">
                      Informations juridiques
                    </Link>
                    <p className="fr-text--sm">Consultez vos droits et obligations en tant que bailleur</p>
                  </li>
                  <li>
                    <span className="fr-fi-question-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/contact" className="fr-link">
                      Assistance
                    </Link>
                    <p className="fr-text--sm">Contactez notre équipe pour obtenir de l'aide</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

