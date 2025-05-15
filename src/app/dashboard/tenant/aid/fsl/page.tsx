import React from 'react';
import Link from 'next/link';

export default function FslAidPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Demande d'aide FSL</h1>
          <p className="fr-text--lead">
            Formulaire de demande d'aide au Fonds de Solidarité pour le Logement (FSL).
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/tenant" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Informations sur le FSL</h2>
            <p>
              Le Fonds de Solidarité pour le Logement (FSL) peut vous aider à faire face à vos difficultés financières liées au logement. Cette aide peut prendre en charge :
            </p>
            <ul className="fr-list">
              <li>Les impayés de loyer et de charges</li>
              <li>Les factures d'énergie impayées (électricité, gaz, eau)</li>
              <li>Le dépôt de garantie pour un nouveau logement</li>
              <li>Le premier mois de loyer</li>
              <li>Les frais d'agence ou de déménagement</li>
            </ul>
            <p className="fr-text--sm fr-mt-2w">
              <strong>Note :</strong> Ce formulaire vous permet de faire une demande d'aide pour les impayés de loyer. Les informations saisies seront transmises directement au service FSL de votre département.
            </p>
          </div>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Informations personnelles
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="lastname">
                    Nom
                  </label>
                  <input className="fr-input" type="text" id="lastname" name="lastname" defaultValue="Dupont" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="firstname">
                    Prénom
                  </label>
                  <input className="fr-input" type="text" id="firstname" name="firstname" defaultValue="Jean" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="birthdate">
                    Date de naissance
                  </label>
                  <input className="fr-input" type="date" id="birthdate" name="birthdate" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="email">
                    Email
                  </label>
                  <input className="fr-input" type="email" id="email" name="email" defaultValue="jean.dupont@email.com" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="phone">
                    Téléphone
                  </label>
                  <input className="fr-input" type="tel" id="phone" name="phone" defaultValue="06 12 34 56 78" />
                </div>
              </div>
              <div className="fr-col-12">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="address">
                    Adresse
                  </label>
                  <input className="fr-input" type="text" id="address" name="address" defaultValue="12 rue des Lilas, 75020 Paris" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="fr-mb-2w">Composition du foyer</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-select-group">
                  <label className="fr-label" htmlFor="household-size">
                    Nombre de personnes dans le foyer
                  </label>
                  <select className="fr-select" id="household-size" name="household-size">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6 ou plus</option>
                  </select>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="children-count">
                    Dont enfants de moins de 18 ans
                  </label>
                  <input className="fr-input" type="number" id="children-count" name="children-count" min="0" max="10" defaultValue="1" />
                </div>
              </div>
            </div>

            <p className="fr-text--sm fr-mb-2w fr-mt-3w">Membres du foyer</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                  <th scope="col">Date de naissance</th>
                  <th scope="col">Lien de parenté</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dupont</td>
                  <td>Marie</td>
                  <td>12/05/1980</td>
                  <td>Conjointe</td>
                </tr>
                <tr>
                  <td>Dupont</td>
                  <td>Léa</td>
                  <td>25/08/2018</td>
                  <td>Enfant</td>
                </tr>
              </tbody>
            </div>

            <button className="fr-btn fr-btn--secondary fr-fi-add-line fr-btn--icon-left fr-mt-2w">
              Ajouter une personne
            </button>
          </div>
        </div>
      </div>

      <h2 className="fr-mb-2w">Situation financière</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <h3>Ressources mensuelles</h3>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="salary">
                    Salaires
                  </label>
                  <input className="fr-input" type="number" id="salary" name="salary" min="0" step="0.01" defaultValue="1800.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="unemployment">
                    Allocations chômage
                  </label>
                  <input className="fr-input" type="number" id="unemployment" name="unemployment" min="0" step="0.01" defaultValue="0.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="family-benefits">
                    Prestations familiales (CAF)
                  </label>
                  <input className="fr-input" type="number" id="family-benefits" name="family-benefits" min="0" step="0.01" defaultValue="250.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="other-income">
                    Autres ressources
                  </label>
                  <input className="fr-input" type="number" id="other-income" name="other-income" min="0" step="0.01" defaultValue="0.00" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <h3>Charges mensuelles</h3>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="rent">
                    Loyer et charges
                  </label>
                  <input className="fr-input" type="number" id="rent" name="rent" min="0" step="0.01" defaultValue="1100.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="energy">
                    Électricité, gaz, eau
                  </label>
                  <input className="fr-input" type="number" id="energy" name="energy" min="0" step="0.01" defaultValue="150.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="loans">
                    Crédits en cours
                  </label>
                  <input className="fr-input" type="number" id="loans" name="loans" min="0" step="0.01" defaultValue="200.00" />
                </div>
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="other-expenses">
                    Autres charges
                  </label>
                  <input className="fr-input" type="number" id="other-expenses" name="other-expenses" min="0" step="0.01" defaultValue="300.00" />
                </div>
              </div>
            </div>

            <div className="fr-card fr-card--grey fr-card--no-border fr-mt-3w">
              <div className="fr-card__body">
                <div className="fr-card__content">
                  <div className="fr-grid-row fr-grid-row--gutters">
                    <div className="fr-col-12 fr-col-md-6">
                      <p><strong>Total des ressources :</strong> 2 050,00 €</p>
                    </div>
                    <div className="fr-col-12 fr-col-md-6">
                      <p><strong>Total des charges :</strong> 1 750,00 €</p>
                    </div>
                    <div className="fr-col-12">
                      <p><strong>Reste à vivre :</strong> 300,00 € (100,00 € par personne)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="fr-mb-2w">Détails de la dette locative</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="debt-amount">
                    Montant total de la dette
                  </label>
                  <input className="fr-input" type="number" id="debt-amount" name="debt-amount" min="0" step="0.01" defaultValue="2500.00" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="debt-months">
                    Nombre de mois impayés
                  </label>
                  <input className="fr-input" type="number" id="debt-months" name="debt-months" min="0" max="36" defaultValue="3" />
                </div>
              </div>
              <div className="fr-col-12">
                <div className="fr-input-group">
                  <label className="fr-label" htmlFor="debt-reason">
                    Motif de l'impayé
                    <span className="fr-hint-text">Expliquez brièvement la raison de vos difficultés financières</span>
                  </label>
                  <textarea className="fr-input" id="debt-reason" name="debt-reason" rows={3} defaultValue="Arrêt maladie depuis janvier 2025 avec une baisse significative de revenus. Reprise du travail prévue en juin 2025."></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="fr-mb-2w">Pièces justificatives</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-3w">
              Pour traiter votre demande, les services du FSL ont besoin des documents suivants. Vous pouvez les télécharger directement depuis votre espace CAF ou les scanner.
            </p>

            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-upload-group">
                  <label className="fr-label" htmlFor="id-document">
                    Pièce d'identité
                    <span className="fr-hint-text">Carte d'identité, passeport ou titre de séjour</span>
                  </label>
                  <input className="fr-upload" type="file" id="id-document" name="id-document" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-upload-group">
                  <label className="fr-label" htmlFor="lease">
                    Contrat de bail
                  </label>
                  <input className="fr-upload" type="file" id="lease" name="lease" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-upload-group">
                  <label className="fr-label" htmlFor="income-proof">
                    Justificatifs de ressources
                    <span className="fr-hint-text">Bulletins de salaire, attestation CAF, etc.</span>
                  </label>
                  <input className="fr-upload" type="file" id="income-proof" name="income-proof" accept=".pdf,.jpg,.jpeg,.png" multiple />
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-upload-group">
                  <label className="fr-label" htmlFor="debt-proof">
                    Justificatif de la dette
                    <span className="fr-hint-text">Mise en demeure, commandement de payer, etc.</span>
                  </label>
                  <input className="fr-upload" type="file" id="debt-proof" name="debt-proof" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
              </div>
            </div>

            <div className="fr-card fr-card--grey fr-card--no-border fr-mt-3w">
              <div className="fr-card__body">
                <div className="fr-card__content">
                  <h3>Récupération automatique des données CAF</h3>
                  <p>
                    Avec votre autorisation, nous pouvons récupérer automatiquement vos informations auprès de la CAF pour faciliter le traitement de votre demande.
                  </p>
                  <div className="fr-checkbox-group">
                    <input type="checkbox" id="caf-consent" name="caf-consent" />
                    <label className="fr-label" htmlFor="caf-consent">J'autorise ALEXI à récupérer mes données CAF</label>
                  </div>
                  <div className="fr-input-group fr-mt-2w">
                    <label className="fr-label" htmlFor="caf-number">
                      Numéro d'allocataire CAF
                    </label>
                    <input className="fr-input" type="text" id="caf-number" name="caf-number" />
                  </div>
                  <button className="fr-btn fr-btn--secondary fr-mt-2w">
                    Récupérer mes données CAF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="fr-mb-2w">Consentement et validation</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <div className="fr-checkbox-group">
              <input type="checkbox" id="data-consent" name="data-consent" />
              <label className="fr-label" htmlFor="data-consent">J'atteste sur l'honneur l'exactitude des informations fournies</label>
            </div>
            <div className="fr-checkbox-group">
              <input type="checkbox" id="processing-consent" name="processing-consent" />
              <label className="fr-label" htmlFor="processing-consent">J'accepte que mes données soient traitées par les services du FSL et les partenaires concernés</label>
            </div>
          </div>
        </div>
      </div>

      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--right">
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <button className="fr-btn fr-btn--secondary">
              Enregistrer comme brouillon
            </button>
            <button className="fr-btn">
              Soumettre ma demande
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

