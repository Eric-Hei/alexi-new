import React from 'react';
import Link from 'next/link';

export default function MediatorDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord médiateur</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace de travail. Gérez ici les demandes de médiation entre locataires et bailleurs.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/mediator/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/mediator/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
              <span className="fr-badge fr-badge--sm fr-badge--error">4</span>
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
                      Médiations actives
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      15
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Nouvelles demandes
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      4
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Rendez-vous à venir
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      7
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Taux de réussite
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--success">
                      68%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelles demandes */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Nouvelles demandes de médiation
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Demandes en attente d'acceptation</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Date de demande</th>
                  <th scope="col">Demandeur</th>
                  <th scope="col">Partie adverse</th>
                  <th scope="col">Montant impayé</th>
                  <th scope="col">Urgence</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MED-2025-1234</td>
                  <td>10/05/2025</td>
                  <td>SCI Les Lilas (Bailleur)</td>
                  <td>Jean Dupont</td>
                  <td>2 500,00 €</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Élevée</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/mediator/case/1234" className="fr-btn fr-btn--sm">
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
                  <td>MED-2025-1235</td>
                  <td>11/05/2025</td>
                  <td>Marie Martin (Locataire)</td>
                  <td>Pierre Durand</td>
                  <td>1 800,00 €</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">Moyenne</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/mediator/case/1235" className="fr-btn fr-btn--sm">
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

      {/* Médiations en cours */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Médiations en cours
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Médiations actives nécessitant un suivi</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Prochaine étape</th>
                  <th scope="col">Date</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MED-2025-1230</td>
                  <td>OPHLM Paris</td>
                  <td>Sophie Petit</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Rendez-vous planifié</span></td>
                  <td>Séance de médiation</td>
                  <td>15/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/mediator/case/1230" className="fr-btn fr-btn--sm">
                        Gérer
                      </Link>
                      <Link href="/dashboard/mediator/meeting/1230" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Préparer
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>MED-2025-1228</td>
                  <td>SCI Montmartre</td>
                  <td>Thomas Bernard</td>
                  <td><span className="fr-badge fr-badge--success fr-badge--no-icon">Accord trouvé</span></td>
                  <td>Signature du protocole</td>
                  <td>18/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/mediator/case/1228" className="fr-btn fr-btn--sm">
                        Gérer
                      </Link>
                      <Link href="/dashboard/mediator/protocol/1228" className="fr-btn fr-btn--sm fr-btn--secondary">
                        Protocole
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Calendrier */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Calendrier des rendez-vous
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Prochains rendez-vous de médiation</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Heure</th>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Parties</th>
                  <th scope="col">Format</th>
                  <th scope="col">Lieu/Lien</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15/05/2025</td>
                  <td>10:00</td>
                  <td>MED-2025-1230</td>
                  <td>OPHLM Paris / Sophie Petit</td>
                  <td>Présentiel</td>
                  <td>12 rue de la Médiation, 75001 Paris</td>
                  <td>
                    <Link href="/dashboard/mediator/meeting/1230" className="fr-btn fr-btn--sm">
                      Détails
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>16/05/2025</td>
                  <td>14:30</td>
                  <td>MED-2025-1229</td>
                  <td>Dupont SA / Robert Martin</td>
                  <td>Visioconférence</td>
                  <td>https://visio.alexi.gouv.fr/med-1229</td>
                  <td>
                    <Link href="/dashboard/mediator/meeting/1229" className="fr-btn fr-btn--sm">
                      Détails
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
          <div className="fr-card fr-card--shadow">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Actions rapides
              </h2>
              <div className="fr-card__content">
                <div className="fr-btns-group fr-btns-group--inline-md">
                  <Link href="/dashboard/mediator/calendar" className="fr-btn fr-fi-calendar-line fr-btn--icon-left">
                    Gérer mon calendrier
                  </Link>
                  <Link href="/dashboard/mediator/search" className="fr-btn fr-btn--secondary fr-fi-search-line fr-btn--icon-left">
                    Rechercher un dossier
                  </Link>
                  <Link href="/dashboard/mediator/reports" className="fr-btn fr-btn--tertiary fr-fi-file-download-line fr-btn--icon-left">
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

