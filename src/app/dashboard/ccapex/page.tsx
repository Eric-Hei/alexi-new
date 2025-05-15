import React from 'react';
import Link from 'next/link';

export default function CcapexDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord CCAPEX</h1>
          <p className="fr-text--lead">
            Bienvenue sur l'espace de la Commission de Coordination des Actions de Prévention des Expulsions Locatives.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/ccapex/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/ccapex/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
              <span className="fr-badge fr-badge--sm fr-badge--error">12</span>
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
                      Dossiers actifs
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      248
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Dossiers urgents
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      42
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
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      76
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Taux de prévention
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--success">
                      58%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prochaine réunion */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Prochaine réunion CCAPEX
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-card fr-card--grey fr-card--no-border">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h3>Informations de la réunion</h3>
                      <p><strong>Date :</strong> 25/05/2025</p>
                      <p><strong>Heure :</strong> 14:00 - 17:00</p>
                      <p><strong>Lieu :</strong> Préfecture de Paris - Salle 302</p>
                      <p><strong>Format :</strong> Présentiel avec option visioconférence</p>
                      <p><strong>Dossiers à l'ordre du jour :</strong> 15</p>
                      <div className="fr-btns-group fr-mt-2w">
                        <Link href="/dashboard/ccapex/meeting/next" className="fr-btn fr-btn--secondary">
                          Voir les détails
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-card fr-card--grey fr-card--no-border">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h3>Actions requises</h3>
                      <ul className="fr-list">
                        <li>Confirmer votre présence avant le 20/05/2025</li>
                        <li>Préparer les avis sur les 5 dossiers qui vous sont assignés</li>
                        <li>Soumettre vos propositions d'ajout à l'ordre du jour avant le 18/05/2025</li>
                      </ul>
                      <div className="fr-btns-group fr-mt-2w">
                        <button className="fr-btn">
                          Confirmer ma présence
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dossiers prioritaires */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Dossiers prioritaires
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Dossiers nécessitant une attention immédiate</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Commune</th>
                  <th scope="col">Stade</th>
                  <th scope="col">Échéance</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Jean Dupont</td>
                  <td>SCI Les Lilas</td>
                  <td>Paris 20e</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Assignation</span></td>
                  <td>20/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/ccapex/case/12345" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Ajouter à l'ODJ
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Marie Martin</td>
                  <td>Pierre Durand</td>
                  <td>Paris 16e</td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Commandement de quitter</span></td>
                  <td>22/05/2025</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/ccapex/case/12346" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Ajouter à l'ODJ
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Signalements récents */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Signalements récents
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Nouveaux signalements d'impayés des 7 derniers jours</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col" style={{ minWidth: '140px' }}>Référence</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Bailleur</th>
                  <th scope="col">Montant</th>
                  <th scope="col">Commune</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12/05/2025</td>
                  <td>ALEXI-2025-12350</td>
                  <td>Sophie Petit</td>
                  <td>OPHLM Paris</td>
                  <td>1 800,00 €</td>
                  <td>Paris 15e</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/ccapex/case/12350" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Assigner
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>11/05/2025</td>
                  <td>ALEXI-2025-12349</td>
                  <td>Thomas Bernard</td>
                  <td>SCI Montmartre</td>
                  <td>2 200,00 €</td>
                  <td>Paris 18e</td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/ccapex/case/12349" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Assigner
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques de prévention */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Statistiques de prévention
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div style={{ height: '300px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique d'efficacité des interventions</p>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <p className="fr-text--sm fr-mb-2w">Résultats des interventions</p>
                <div className="fr-table fr-table--bordered">
                  <thead>
                    <tr>
                      <th scope="col">Type d'intervention</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Taux de succès</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Médiation</td>
                      <td>78</td>
                      <td>68%</td>
                    </tr>
                    <tr>
                      <td>Aide FSL</td>
                      <td>124</td>
                      <td>82%</td>
                    </tr>
                    <tr>
                      <td>Accompagnement social</td>
                      <td>156</td>
                      <td>74%</td>
                    </tr>
                    <tr>
                      <td>Plan d'apurement</td>
                      <td>92</td>
                      <td>65%</td>
                    </tr>
                  </tbody>
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
                  <Link href="/dashboard/ccapex/meeting/new" className="fr-btn fr-fi-calendar-line fr-btn--icon-left">
                    Planifier une réunion
                  </Link>
                  <Link href="/dashboard/ccapex/search" className="fr-btn fr-btn--secondary fr-fi-search-line fr-btn--icon-left">
                    Rechercher un dossier
                  </Link>
                  <Link href="/dashboard/ccapex/reports" className="fr-btn fr-btn--tertiary fr-fi-file-download-line fr-btn--icon-left">
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

