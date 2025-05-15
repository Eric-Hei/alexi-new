import React from 'react';
import Link from 'next/link';

export default function SocialAlertsPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Système d'alerte précoce</h1>
          <p className="fr-text--lead">
            Identifiez et intervenez rapidement sur les situations à risque d'expulsion.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/social" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
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
                  <label className="fr-label" htmlFor="alert-type">Type d'alerte</label>
                  <select className="fr-select" id="alert-type" name="alert-type">
                    <option value="all">Tous les types</option>
                    <option value="new-unpaid">Nouvel impayé</option>
                    <option value="payment-command">Commandement de payer</option>
                    <option value="assignment">Assignation</option>
                    <option value="vulnerable">Ménage vulnérable</option>
                    <option value="child">Présence d'enfants</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="priority">Priorité</label>
                  <select className="fr-select" id="priority" name="priority">
                    <option value="all">Toutes les priorités</option>
                    <option value="high">Haute</option>
                    <option value="medium">Moyenne</option>
                    <option value="low">Basse</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="status">Statut</label>
                  <select className="fr-select" id="status" name="status">
                    <option value="all">Tous les statuts</option>
                    <option value="new">Nouvelle</option>
                    <option value="in-progress">En cours de traitement</option>
                    <option value="assigned">Assignée</option>
                    <option value="resolved">Résolue</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-3">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="sector">Secteur</label>
                  <select className="fr-select" id="sector" name="sector">
                    <option value="all">Tous les secteurs</option>
                    <option value="north">Nord</option>
                    <option value="south">Sud</option>
                    <option value="east">Est</option>
                    <option value="west">Ouest</option>
                    <option value="center">Centre</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-mt-2w">
                <button className="fr-btn fr-btn--secondary fr-fi-refresh-line fr-btn--icon-left">
                  Actualiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alertes prioritaires */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Alertes prioritaires
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Alertes nécessitant une intervention immédiate</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Type</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Détecté le</th>
                  <th scope="col">Délai d'intervention</th>
                  <th scope="col">Priorité</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12345</td>
                  <td>Assignation</td>
                  <td>Jean Dupont</td>
                  <td>12 rue des Lilas, 75020 Paris</td>
                  <td>10/05/2025</td>
                  <td><span className="fr-text--bold fr-text--error">1 jour</span></td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Haute</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12345" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Prendre en charge
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12346</td>
                  <td>Ménage vulnérable</td>
                  <td>Marie Martin</td>
                  <td>45 avenue Victor Hugo, 75016 Paris</td>
                  <td>11/05/2025</td>
                  <td><span className="fr-text--bold fr-text--error">2 jours</span></td>
                  <td><span className="fr-badge fr-badge--error fr-badge--no-icon">Haute</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12346" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Prendre en charge
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelles alertes */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Nouvelles alertes
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Alertes détectées au cours des 7 derniers jours</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Type</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Détecté le</th>
                  <th scope="col">Priorité</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12350</td>
                  <td>Nouvel impayé</td>
                  <td>Sophie Petit</td>
                  <td>8 rue du Commerce, 75015 Paris</td>
                  <td>12/05/2025</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">Moyenne</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12350" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Prendre en charge
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12349</td>
                  <td>Présence d'enfants</td>
                  <td>Thomas Bernard</td>
                  <td>25 rue Lepic, 75018 Paris</td>
                  <td>11/05/2025</td>
                  <td><span className="fr-badge fr-badge--warning fr-badge--no-icon">Moyenne</span></td>
                  <td>
                    <div className="fr-btns-group fr-btns-group--inline">
                      <Link href="/dashboard/social/case/12349" className="fr-btn fr-btn--sm">
                        Voir
                      </Link>
                      <button className="fr-btn fr-btn--sm fr-btn--secondary">
                        Prendre en charge
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Alertes en cours de traitement */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Alertes en cours de traitement
          </h2>
          <div className="fr-card__content">
            <div className="fr-table fr-table--bordered">
              <caption>Alertes assignées à des travailleurs sociaux</caption>
              <thead>
                <tr>
                  <th scope="col">Référence</th>
                  <th scope="col">Type</th>
                  <th scope="col">Locataire</th>
                  <th scope="col">Assigné à</th>
                  <th scope="col">Date d'assignation</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ALEXI-2025-12340</td>
                  <td>Commandement de payer</td>
                  <td>Lucas Martin</td>
                  <td>Émilie Dubois</td>
                  <td>05/05/2025</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Contact établi</span></td>
                  <td>
                    <Link href="/dashboard/social/case/12340" className="fr-btn fr-btn--sm">
                      Voir
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>ALEXI-2025-12338</td>
                  <td>Ménage vulnérable</td>
                  <td>Camille Leroy</td>
                  <td>Marc Dupont</td>
                  <td>03/05/2025</td>
                  <td><span className="fr-badge fr-badge--info fr-badge--no-icon">Rendez-vous planifié</span></td>
                  <td>
                    <Link href="/dashboard/social/case/12338" className="fr-btn fr-btn--sm">
                      Voir
                    </Link>
                  </td>
                </tr>
              </tbody>
            </div>
          </div>
        </div>
      </div>

      {/* Configuration des alertes */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Configuration des alertes
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-card fr-card--grey fr-card--no-border">
                  <div className="fr-card__body">
                    <div className="fr-card__content">
                      <h3>Critères de priorisation</h3>
                      <ul className="fr-list">
                        <li><strong>Haute priorité :</strong> Assignation, présence d'enfants de moins de 3 ans, personnes âgées de plus de 75 ans, personnes handicapées</li>
                        <li><strong>Priorité moyenne :</strong> Commandement de payer, familles avec enfants, personnes âgées de 60 à 75 ans</li>
                        <li><strong>Priorité basse :</strong> Premier impayé, autres situations</li>
                      </ul>
                      <div className="fr-btns-group fr-mt-2w">
                        <Link href="/dashboard/social/alerts/settings" className="fr-btn fr-btn--secondary fr-btn--sm">
                          Modifier les critères
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
                      <h3>Notifications</h3>
                      <div className="fr-form-group">
                        <fieldset className="fr-fieldset">
                          <legend className="fr-fieldset__legend">Recevoir des notifications pour</legend>
                          <div className="fr-fieldset__content">
                            <div className="fr-checkbox-group">
                              <input type="checkbox" id="notif-1" name="notifications[]" value="high-priority" checked />
                              <label className="fr-label" htmlFor="notif-1">Alertes haute priorité</label>
                            </div>
                            <div className="fr-checkbox-group">
                              <input type="checkbox" id="notif-2" name="notifications[]" value="medium-priority" checked />
                              <label className="fr-label" htmlFor="notif-2">Alertes priorité moyenne</label>
                            </div>
                            <div className="fr-checkbox-group">
                              <input type="checkbox" id="notif-3" name="notifications[]" value="low-priority" />
                              <label className="fr-label" htmlFor="notif-3">Alertes priorité basse</label>
                            </div>
                            <div className="fr-checkbox-group">
                              <input type="checkbox" id="notif-4" name="notifications[]" value="sector" checked />
                              <label className="fr-label" htmlFor="notif-4">Uniquement mon secteur</label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="fr-btns-group fr-mt-2w">
                        <button className="fr-btn fr-btn--secondary fr-btn--sm">
                          Enregistrer les préférences
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

      {/* Actions */}
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <button className="fr-btn fr-btn--secondary fr-fi-download-line fr-btn--icon-left">
              Exporter la liste
            </button>
            <button className="fr-btn fr-fi-mail-line fr-btn--icon-left">
              Envoyer un rapport
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

