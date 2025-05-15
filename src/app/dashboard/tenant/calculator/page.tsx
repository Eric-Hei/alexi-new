import React from 'react';
import Link from 'next/link';

export default function BudgetCalculatorPage() {
  return (
    <div className="fr-py-8w">
      <div className="fr-grid-row fr-grid-row--gutters fr-grid-row--middle fr-mb-4w">
        <div className="fr-col">
          <h1>Calculateur de budget</h1>
          <p className="fr-text--lead">
            Analysez vos revenus et dépenses pour établir un plan de remboursement adapté à votre situation.
          </p>
        </div>
        <div className="fr-col-auto">
          <Link href="/dashboard/tenant" className="fr-btn fr-btn--secondary fr-fi-arrow-left-line fr-btn--icon-left">
            Retour au tableau de bord
          </Link>
        </div>
      </div>

      <div className="fr-card fr-card--shadow fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Informations sur votre dette</h2>
            <div className="fr-grid-row fr-grid-row--gutters">
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Montant total dû
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      2 500,00 €
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Loyer mensuel actuel
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      800,00 €
                    </p>
                  </div>
                </div>
              </div>
              <div className="fr-col-12 fr-col-md-4">
                <div className="fr-tile fr-tile--horizontal">
                  <div className="fr-tile__body">
                    <h3 className="fr-tile__title">
                      Charges mensuelles
                    </h3>
                    <p className="fr-tile__desc fr-text--bold fr-text--lg">
                      100,00 €
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form>
        <div className="fr-grid-row fr-grid-row--gutters">
          <div className="fr-col-12 fr-col-md-6">
            <div className="fr-card fr-card--shadow fr-mb-4w">
              <div className="fr-card__body">
                <div className="fr-card__content">
                  <h2>Vos revenus mensuels</h2>
                  <div className="fr-fieldset">
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="salary">
                          Salaire net
                          <span className="fr-hint-text">Après prélèvement à la source</span>
                        </label>
                        <input className="fr-input" type="number" id="salary" name="salary" />
                      </div>
                    </div>
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="benefits">
                          Allocations (CAF, Pôle Emploi...)
                          <span className="fr-hint-text">RSA, allocations familiales, APL, etc.</span>
                        </label>
                        <input className="fr-input" type="number" id="benefits" name="benefits" />
                      </div>
                    </div>
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="other-income">
                          Autres revenus
                          <span className="fr-hint-text">Pension alimentaire, revenus locatifs, etc.</span>
                        </label>
                        <input className="fr-input" type="number" id="other-income" name="other-income" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fr-col-12 fr-col-md-6">
            <div className="fr-card fr-card--shadow fr-mb-4w">
              <div className="fr-card__body">
                <div className="fr-card__content">
                  <h2>Vos dépenses mensuelles</h2>
                  <div className="fr-fieldset">
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="utilities">
                          Factures (eau, électricité, gaz)
                        </label>
                        <input className="fr-input" type="number" id="utilities" name="utilities" />
                      </div>
                    </div>
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="food">
                          Alimentation
                        </label>
                        <input className="fr-input" type="number" id="food" name="food" />
                      </div>
                    </div>
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="transport">
                          Transport
                        </label>
                        <input className="fr-input" type="number" id="transport" name="transport" />
                      </div>
                    </div>
                    <div className="fr-fieldset__element">
                      <div className="fr-input-group">
                        <label className="fr-label" htmlFor="other-expenses">
                          Autres dépenses essentielles
                          <span className="fr-hint-text">Téléphone, internet, assurances, etc.</span>
                        </label>
                        <input className="fr-input" type="number" id="other-expenses" name="other-expenses" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fr-card fr-card--shadow fr-mb-4w">
          <div className="fr-card__body">
            <div className="fr-card__content">
              <h2>Capacité de remboursement</h2>
              <div className="fr-fieldset">
                <div className="fr-fieldset__element">
                  <div className="fr-input-group">
                    <label className="fr-label" htmlFor="repayment-amount">
                      Montant mensuel que vous pouvez consacrer au remboursement de votre dette
                      <span className="fr-hint-text">En plus du loyer courant</span>
                    </label>
                    <input className="fr-input" type="number" id="repayment-amount" name="repayment-amount" />
                  </div>
                </div>
                <div className="fr-fieldset__element">
                  <div className="fr-select-group">
                    <label className="fr-label" htmlFor="repayment-duration">
                      Durée souhaitée pour le remboursement
                    </label>
                    <select className="fr-select" id="repayment-duration" name="repayment-duration">
                      <option value="3">3 mois</option>
                      <option value="6">6 mois</option>
                      <option value="9">9 mois</option>
                      <option value="12">12 mois</option>
                      <option value="18">18 mois</option>
                      <option value="24">24 mois</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="fr-btns-group fr-btns-group--inline fr-mt-4w">
                <button type="submit" className="fr-btn">
                  Calculer mon plan
                </button>
                <button type="reset" className="fr-btn fr-btn--secondary">
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="fr-card fr-card--shadow fr-card--grey fr-mb-4w">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h2>Besoin d'aide ?</h2>
            <p>
              Si vous avez des difficultés à établir votre budget ou si votre situation ne vous permet pas de proposer un plan de remboursement viable, n'hésitez pas à contacter un travailleur social qui pourra vous accompagner.
            </p>
            <div className="fr-btns-group fr-btns-group--inline fr-mt-2w">
              <Link href="/dashboard/tenant/contact-social" className="fr-btn fr-btn--secondary">
                Contacter un travailleur social
              </Link>
              <Link href="/resources/budget-tips" className="fr-btn fr-btn--tertiary">
                Conseils pour gérer son budget
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
