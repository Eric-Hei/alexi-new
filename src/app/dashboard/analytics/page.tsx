import React from 'react';
import Link from 'next/link';

export default function AnalyticsDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord analytique</h1>
          <p className="fr-text--lead">
            Explorez les données et tendances des procédures d'expulsion pour informer les décisions et mesurer l'impact des actions de prévention.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-select-group">
            <label className="fr-label fr-mb-0" htmlFor="period-select">
              Période
            </label>
            <select className="fr-select" id="period-select" name="period-select">
              <option value="last-12-months">12 derniers mois</option>
              <option value="last-6-months">6 derniers mois</option>
              <option value="last-3-months">3 derniers mois</option>
              <option value="current-year">Année en cours</option>
              <option value="last-year">Année précédente</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Filtres</h2>
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="department">Département</label>
                  <select className="fr-select" id="department" name="department">
                    <option value="all">Tous les départements</option>
                    <option value="75">Paris (75)</option>
                    <option value="92">Hauts-de-Seine (92)</option>
                    <option value="93">Seine-Saint-Denis (93)</option>
                    <option value="94">Val-de-Marne (94)</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="commune">Commune</label>
                  <select className="fr-select" id="commune" name="commune">
                    <option value="all">Toutes les communes</option>
                    <option value="75001">Paris 1er</option>
                    <option value="75002">Paris 2e</option>
                    <option value="75003">Paris 3e</option>
                    {/* Autres communes */}
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="housing-type">Type de logement</label>
                  <select className="fr-select" id="housing-type" name="housing-type">
                    <option value="all">Tous les logements</option>
                    <option value="social">Logement social</option>
                    <option value="private">Logement privé</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="procedure-stage">Stade de la procédure</label>
                  <select className="fr-select" id="procedure-stage" name="procedure-stage">
                    <option value="all">Tous les stades</option>
                    <option value="signalement">Signalement</option>
                    <option value="commandement">Commandement de payer</option>
                    <option value="assignation">Assignation</option>
                    <option value="decision">Décision de justice</option>
                    <option value="commandement-quitter">Commandement de quitter</option>
                    <option value="expulsion">Expulsion</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-mt-2w">
                <button className="fr-btn fr-btn--secondary fr-fi-refresh-line fr-btn--icon-left">
                  Actualiser les données
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs clés */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Indicateurs clés
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Total des procédures
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      1 245
                    </p>
                    <p className="fr-text--xs fr-text--error">
                      +8,5% vs période précédente
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
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      487
                    </p>
                    <p className="fr-text--xs fr-text--warning">
                      +3,2% vs période précédente
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Expulsions effectives
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      87
                    </p>
                    <p className="fr-text--xs fr-text--success">
                      -12,1% vs période précédente
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
                      62%
                    </p>
                    <p className="fr-text--xs fr-text--success">
                      +5,3% vs période précédente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graphiques principaux */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-lg-8">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Évolution mensuelle des procédures
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '400px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique d'évolution mensuelle des procédures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-lg-4">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Répartition par stade
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '400px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique de répartition par stade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graphiques secondaires */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Répartition par type de logement
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '300px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique de répartition par type de logement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Efficacité des interventions
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '300px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique d'efficacité des interventions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carte des impayés */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Cartographie des procédures
          </h2>
          <div className="fr-card__content">
            {/* Emplacement pour la carte - à remplacer par un composant de carte réel */}
            <div style={{ height: '500px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p className="fr-text--lg fr-text--bold">Carte de répartition géographique des procédures</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau de données */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Données détaillées
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Statistiques par commune</p>
            <div className="fr-table fr-table--bordered">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Commune</th>
                    <th scope="col">Signalements</th>
                    <th scope="col">Commandements</th>
                    <th scope="col">Assignations</th>
                    <th scope="col">Décisions</th>
                    <th scope="col">Expulsions</th>
                    <th scope="col">Taux de prévention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Paris 20e</td>
                    <td>145</td>
                    <td>98</td>
                    <td>65</td>
                    <td>42</td>
                    <td>12</td>
                    <td>58%</td>
                  </tr>
                  <tr>
                    <td>Paris 18e</td>
                    <td>132</td>
                    <td>87</td>
                    <td>54</td>
                    <td>38</td>
                    <td>10</td>
                    <td>62%</td>
                  </tr>
                  <tr>
                    <td>Paris 19e</td>
                    <td>128</td>
                    <td>85</td>
                    <td>52</td>
                    <td>35</td>
                    <td>9</td>
                    <td>65%</td>
                  </tr>
                  <tr>
                    <td>Paris 15e</td>
                    <td>98</td>
                    <td>65</td>
                    <td>42</td>
                    <td>28</td>
                    <td>7</td>
                    <td>70%</td>
                  </tr>
                  <tr>
                    <td>Paris 13e</td>
                    <td>95</td>
                    <td>62</td>
                    <td>40</td>
                    <td>25</td>
                    <td>6</td>
                    <td>72%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <button className="fr-btn fr-btn--secondary fr-fi-download-line fr-btn--icon-left">
              Exporter en CSV
            </button>
            <button className="fr-btn fr-fi-file-download-line fr-btn--icon-left">
              Générer un rapport PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

