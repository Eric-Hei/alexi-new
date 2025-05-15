import React from 'react';
import Link from 'next/link';

export default function PrefectureTrendsPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tendances des expulsions</h1>
          <p className="fr-text--lead">
            Analyse de l'évolution des procédures d'expulsion sur les 12 derniers mois.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/prefecture" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
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
                  <label className="fr-label" htmlFor="period">Période</label>
                  <select className="fr-select" id="period" name="period">
                    <option value="12">12 derniers mois</option>
                    <option value="6">6 derniers mois</option>
                    <option value="3">3 derniers mois</option>
                    <option value="1">Dernier mois</option>
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
                  <label className="fr-label" htmlFor="type">Type de procédure</label>
                  <select className="fr-select" id="type" name="type">
                    <option value="all">Toutes les procédures</option>
                    <option value="commandement">Commandements de payer</option>
                    <option value="assignation">Assignations</option>
                    <option value="decision">Décisions de justice</option>
                    <option value="expulsion">Expulsions</option>
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
              <div className="fr-col-12 fr-mt-2w">
                <button className="fr-btn fr-btn--secondary fr-fi-refresh-line fr-btn--icon-left">
                  Actualiser les données
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Graphique principal */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Évolution mensuelle des procédures
          </h2>
          <div className="fr-card__content">
            <div className="fr-mb-3w">
              {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
              <div style={{ height: '400px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p className="fr-text--lg fr-text--bold">Graphique d'évolution mensuelle des procédures</p>
              </div>
            </div>
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
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Variation
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--error">
                      +8,5%
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-6 fr-col-md-3">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Résolutions amiables
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--success">
                      32%
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques détaillées */}
      <div className="fr-grid-row fr-grid-row--gutters">
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Répartition par type de procédure
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '300px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique de répartition par type</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fr-col-12 fr-col-md-6">
          <div className="fr-card fr-card--shadow fr-mb-4w">
            <div className="fr-card__body">
              <h2 className="alexi-card-title">
                Répartition par type de logement
              </h2>
              <div className="fr-card__content">
                {/* Emplacement pour le graphique - à remplacer par un composant de graphique réel */}
                <div style={{ height: '300px', backgroundColor: '#f6f6f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p className="fr-text--lg fr-text--bold">Graphique de répartition par logement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tableau de données */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Données mensuelles détaillées
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Évolution mensuelle des procédures d'expulsion</caption>
              <thead>
                <tr>
                  <th scope="col">Mois</th>
                  <th scope="col">Commandements</th>
                  <th scope="col">Assignations</th>
                  <th scope="col">Décisions</th>
                  <th scope="col">Expulsions</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mai 2025</td>
                  <td>45</td>
                  <td>32</td>
                  <td>28</td>
                  <td>8</td>
                  <td>113</td>
                </tr>
                <tr>
                  <td>Avril 2025</td>
                  <td>52</td>
                  <td>38</td>
                  <td>30</td>
                  <td>12</td>
                  <td>132</td>
                </tr>
                <tr>
                  <td>Mars 2025</td>
                  <td>48</td>
                  <td>35</td>
                  <td>25</td>
                  <td>5</td>
                  <td>113</td>
                </tr>
                <tr>
                  <td>Février 2025</td>
                  <td>40</td>
                  <td>30</td>
                  <td>22</td>
                  <td>3</td>
                  <td>95</td>
                </tr>
                <tr>
                  <td>Janvier 2025</td>
                  <td>38</td>
                  <td>28</td>
                  <td>20</td>
                  <td>2</td>
                  <td>88</td>
                </tr>
              </tbody>
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

