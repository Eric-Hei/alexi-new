'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { getRoleLabel, getDashboardPath } from '@/utils/dashboardUtils';

export default function UserMenu() {
  const { data: session, status } = useSession();
  const isLoading = status === 'loading';
  const isAuthenticated = status === 'authenticated';

  if (isLoading) {
    return (
      <div className="fr-header__tools-links">
        <ul className="fr-btns-group">
          <li>
            <span className="fr-text--sm">Chargement...</span>
          </li>
        </ul>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fr-header__tools-links">
        <ul className="fr-btns-group">
          <li>
            <Link href="/login" className="fr-btn fr-btn--sm fr-btn--secondary fr-fi-account-line fr-btn--icon-left">
              Se connecter
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="fr-header__tools-links">
      <ul className="fr-btns-group">
        <li>
          <div className="fr-dropdown" data-fr-opened="false">
            <button
              className="fr-btn fr-btn--sm fr-btn--tertiary-no-outline fr-fi-account-line fr-btn--icon-left"
              aria-controls="user-menu"
              aria-expanded="false"
            >
              {session.user.firstName} {session.user.lastName}
            </button>
            <div className="fr-collapse fr-menu" id="user-menu">
              <ul className="fr-menu__list">
                <li>
                  <span className="fr-text--sm fr-px-2w fr-py-1w fr-mb-1w fr-display-block fr-text--bold">
                    {getRoleLabel(session.user.role)}
                  </span>
                </li>
                <li>
                  <Link className="fr-nav__link" href={`${getDashboardPath(session.user.role)}/profile`}>
                    Mon profil
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
