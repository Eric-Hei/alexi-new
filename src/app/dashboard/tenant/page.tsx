import React from 'react';
import Link from 'next/link';

export default function TenantDashboardPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Tableau de bord locataire</h1>
          <p className="fr-text--lead">
            Bienvenue sur votre espace personnel. Suivez ici l'état de votre dossier et accédez aux ressources disponibles.
          </p>
        </div>
        <div className="fr-col-auto">
          <div className="fr-btns-group">
            <Link href="/dashboard/tenant/profile" className="fr-btn fr-btn--secondary fr-fi-user-line fr-btn--icon-left">
              Mon profil
            </Link>
            <Link href="/dashboard/tenant/notifications" className="fr-btn fr-btn--tertiary fr-fi-notification-line fr-btn--icon-left">
              Notifications
            </Link>
          </div>
        </div>
      </div>

      {/* Statut du dossier */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            État de votre dossier
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Statut actuel
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg fr-text--warning">
                      Commandement de payer
                    </p>
                    <p className="fr-text--sm">
                      Reçu le 15/04/2025 - Délai de 2 mois pour régulariser la situation
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Montant dû
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      2 500,00 €
                    </p>
                    <p className="fr-text--sm">
                      Dont 2 000,00 € de loyers impayés et 500,00 € de charges
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fr-mt-4w">
              <h3 className="fr-h5">Prochaines étapes</h3>
              <ul className="fr-stepper">
                <li className="fr-stepper__step fr-stepper__step--success">
                  <div className="fr-stepper__state">
                    <span className="fr-stepper__state-title">Signalement</span>
                    <span className="fr-stepper__state-detail">10/04/2025</span>
                  </div>
                </li>
                <li className="fr-stepper__step fr-stepper__step--current">
                  <div className="fr-stepper__state">
                    <span className="fr-stepper__state-title">Commandement de payer</span>
                    <span className="fr-stepper__state-detail">15/04/2025</span>
                  </div>
                </li>
                <li className="fr-stepper__step">
                  <div className="fr-stepper__state">
                    <span className="fr-stepper__state-title">Assignation</span>
                    <span className="fr-stepper__state-detail">Prévue le 15/06/2025</span>
                  </div>
                </li>
                <li className="fr-stepper__step">
                  <div className="fr-stepper__state">
                    <span className="fr-stepper__state-title">Audience</span>
                    <span className="fr-stepper__state-detail">À déterminer</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="fr-btns-group fr-btns-group--inline fr-mt-4w">
              <Link href="/dashboard/tenant/payment" className="fr-btn">
                Effectuer un paiement
              </Link>
              <Link href="/dashboard/tenant/plan" className="fr-btn fr-btn--secondary">
                Proposer un plan d'apurement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Aides disponibles */}
      <h2 className="fr-mb-2w">Aides disponibles</h2>
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Aides financières auxquelles vous pourriez être éligible</p>
            <div className="fr-table fr-table--bordered">
              <thead>
                <tr>
                  <th scope="col">Aide</th>
                  <th scope="col">Organisme</th>
                  <th scope="col">Montant estimé</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fonds de Solidarité Logement (FSL)</td>
                  <td>Département</td>
                  <td>Jusqu'à 1 500,00 €</td>
                  <td>
                    <Link href="/dashboard/tenant/aid/fsl" className="fr-btn fr-btn--sm">
                      Faire une demande
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Aide personnalisée au logement (APL)</td>
                  <td>CAF</td>
                  <td>Jusqu'à 350,00 € / mois</td>
                  <td>
                    <Link href="/dashboard/tenant/aid/apl" className="fr-btn fr-btn--sm">
                      Vérifier éligibilité
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Action Logement</td>
                  <td>Action Logement</td>
                  <td>Jusqu'à 1 200,00 €</td>
                  <td>
                    <Link href="/dashboard/tenant/aid/action-logement" className="fr-btn fr-btn--sm">
                      Faire une demande
                    </Link>
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
                    <span className="fr-fi-calculator-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/dashboard/tenant/calculator" className="fr-link">
                      Calculateur de budget
                    </Link>
                    <p className="fr-text--sm">Analysez vos revenus et dépenses pour établir un plan de remboursement</p>
                  </li>
                  <li>
                    <span className="fr-fi-discuss-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/dashboard/tenant/mediation" className="fr-link">
                      Demander une médiation
                    </Link>
                    <p className="fr-text--sm">Trouvez un accord amiable avec votre bailleur</p>
                  </li>
                  <li>
                    <span className="fr-fi-mail-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/dashboard/tenant/messages" className="fr-link">
                      Messagerie
                    </Link>
                    <p className="fr-text--sm">Communiquez avec les services sociaux et votre bailleur</p>
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
                    <Link href="/resources/tenant-guide" className="fr-link">
                      Guide du locataire
                    </Link>
                    <p className="fr-text--sm">Comprendre vos droits et obligations</p>
                  </li>
                  <li>
                    <span className="fr-fi-scales-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/legal-aid" className="fr-link">
                      Aide juridictionnelle
                    </Link>
                    <p className="fr-text--sm">Bénéficiez d'une assistance juridique gratuite</p>
                  </li>
                  <li>
                    <span className="fr-fi-phone-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/contacts" className="fr-link">
                      Contacts utiles
                    </Link>
                    <p className="fr-text--sm">ADIL, services sociaux, associations...</p>
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

