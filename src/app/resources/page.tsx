import React from 'react';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Centre de ressources</h1>
          <p className="fr-text--lead">
            Retrouvez ici toutes les informations et outils pour vous aider dans vos démarches liées au logement et à la prévention des expulsions.
          </p>
        </div>
      </div>

      {/* Guides pratiques */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Guides pratiques
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-card fr-card--shadow fr-card--horizontal">
                  <div className="fr-card__body">
                    <h3 className="fr-card__title">
                      <Link className="fr-card__link" href="/resources/tenant-guide">Guide du locataire</Link>
                    </h3>
                    <p className="fr-card__desc">
                      Comprendre vos droits et obligations en tant que locataire.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-card fr-card--shadow fr-card--horizontal">
                  <div className="fr-card__body">
                    <h3 className="fr-card__title">
                      <Link className="fr-card__link" href="/resources/landlord-guide">Guide du bailleur</Link>
                    </h3>
                    <p className="fr-card__desc">
                      Comprendre vos droits et obligations en tant que bailleur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-card fr-card--shadow fr-card--horizontal">
                  <div className="fr-card__body">
                    <h3 className="fr-card__title">
                      <Link className="fr-card__link" href="/resources/eviction-procedure">Procédure d'expulsion</Link>
                    </h3>
                    <p className="fr-card__desc">
                      Les étapes de la procédure d'expulsion et comment y faire face.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aides financières */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Aides financières
          </h2>
          <div className="fr-card__content">
            <p className="fr-text--sm fr-mb-2w">Principales aides disponibles pour les locataires en difficulté</p>
            <div className="fr-table fr-table--bordered">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Aide</th>
                    <th scope="col">Organisme</th>
                    <th scope="col">Conditions d'éligibilité</th>
                    <th scope="col">Montant</th>
                    <th scope="col">Lien</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fonds de Solidarité Logement (FSL)</td>
                    <td>Département</td>
                    <td>Difficultés à payer son loyer, charges ou factures d'énergie</td>
                    <td>Variable selon les départements</td>
                    <td>
                      <Link href="/resources/fsl" className="fr-link">
                        En savoir plus
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Aide personnalisée au logement (APL)</td>
                    <td>CAF / MSA</td>
                    <td>Selon ressources et situation familiale</td>
                    <td>Variable selon situation</td>
                    <td>
                      <Link href="/resources/apl" className="fr-link">
                        En savoir plus
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Action Logement</td>
                    <td>Action Logement</td>
                    <td>Salariés du secteur privé en difficulté</td>
                    <td>Jusqu'à 9 000 €</td>
                    <td>
                      <Link href="/resources/action-logement" className="fr-link">
                        En savoir plus
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Aide juridictionnelle</td>
                    <td>Ministère de la Justice</td>
                    <td>Selon ressources</td>
                    <td>Prise en charge partielle ou totale des frais de justice</td>
                    <td>
                      <Link href="/resources/legal-aid" className="fr-link">
                        En savoir plus
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Contacts utiles */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Contacts utiles
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      ADIL
                    </h3>
                    <p className="fr-tile__desc">
                      Agence Départementale d'Information sur le Logement
                    </p>
                    <p className="fr-text--sm">
                      <strong>Téléphone :</strong> 0 805 160 075 (gratuit)
                    </p>
                    <p className="fr-text--sm">
                      <Link href="https://www.anil.org/lanil-et-les-adil/votre-adil/" className="fr-link" target="_blank" rel="noopener noreferrer">
                        Trouver votre ADIL
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Fondation Abbé Pierre
                    </h3>
                    <p className="fr-tile__desc">
                      Allô Prévention Expulsion
                    </p>
                    <p className="fr-text--sm">
                      <strong>Téléphone :</strong> 0 810 001 505 (prix d'un appel local)
                    </p>
                    <p className="fr-text--sm">
                      <strong>Horaires :</strong> Du lundi au vendredi de 14h à 17h
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Services sociaux
                    </h3>
                    <p className="fr-tile__desc">
                      Centre Communal d'Action Sociale (CCAS)
                    </p>
                    <p className="fr-text--sm">
                      <Link href="/resources/social-services" className="fr-link">
                        Trouver le CCAS le plus proche
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-mt-4w">
              <Link href="/resources/contacts" className="fr-link fr-fi-arrow-right-line fr-link--icon-right">
                Voir tous les contacts utiles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Outils et modèles */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Outils et modèles de documents
          </h2>
          <div className="fr-card__content">
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-6">
                <ul className="fr-list fr-list--icon">
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/payment-plan" className="fr-link">
                      Modèle de plan d'apurement
                    </Link>
                  </li>
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/request-delay" className="fr-link">
                      Modèle de demande de délai au juge
                    </Link>
                  </li>
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/fsl-request" className="fr-link">
                      Modèle de demande d'aide FSL
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="fr-col-12 fr-col-md-6">
                <ul className="fr-list fr-list--icon">
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/ccapex-referral" className="fr-link">
                      Modèle de saisine CCAPEX
                    </Link>
                  </li>
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/social-report" className="fr-link">
                      Modèle de rapport social
                    </Link>
                  </li>
                  <li>
                    <span className="fr-fi-file-download-line fr-fi--lg" aria-hidden="true"></span>
                    <Link href="/resources/templates/mediation-agreement" className="fr-link">
                      Modèle d'accord de médiation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <h2 className="alexi-card-title">
            Questions fréquentes
          </h2>
          <div className="fr-card__content">
            <div className="fr-accordions-group">
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button className="fr-accordion__btn">Que faire si je ne peux pas payer mon loyer ce mois-ci ?</button>
                </h3>
                <div className="fr-collapse">
                  <p>Contactez immédiatement votre bailleur pour l'informer de votre situation et proposer une solution (délai, paiement partiel). Contactez également les services sociaux de votre commune (CCAS) ou l'ADIL pour connaître les aides disponibles.</p>
                </div>
              </section>
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button className="fr-accordion__btn">J'ai reçu un commandement de payer, que dois-je faire ?</button>
                </h3>
                <div className="fr-collapse">
                  <p>Le commandement de payer est une étape préalable à l'assignation en justice. Vous disposez généralement de 2 mois pour régulariser votre situation. Contactez rapidement un travailleur social ou l'ADIL pour être accompagné dans vos démarches.</p>
                </div>
              </section>
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button className="fr-accordion__btn">Comment fonctionne la trêve hivernale ?</button>
                </h3>
                <div className="fr-collapse">
                  <p>La trêve hivernale s'étend du 1er novembre au 31 mars. Pendant cette période, les expulsions avec le concours de la force publique ne peuvent pas être exécutées. Cependant, la procédure judiciaire peut continuer à avancer.</p>
                </div>
              </section>
              <section className="fr-accordion">
                <h3 className="fr-accordion__title">
                  <button className="fr-accordion__btn">Puis-je bénéficier de l'aide juridictionnelle ?</button>
                </h3>
                <div className="fr-collapse">
                  <p>L'aide juridictionnelle permet une prise en charge totale ou partielle des frais de justice selon vos ressources. Pour en bénéficier, vous devez remplir un formulaire disponible au tribunal ou en ligne, et le déposer au bureau d'aide juridictionnelle du tribunal.</p>
                </div>
              </section>
            </div>
            <div className="fr-mt-4w">
              <Link href="/resources/faq" className="fr-link fr-fi-arrow-right-line fr-link--icon-right">
                Voir toutes les questions fréquentes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
