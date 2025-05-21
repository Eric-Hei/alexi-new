import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom-icons.css";
import { Providers } from "./providers";
import UserMenu from "@/components/auth/UserMenu";
import MainNavigation from "@/components/navigation/MainNavigation";
import DsfrInitializer from "@/components/DsfrInitializer";

// Import DSFR styles
import "@gouvfr/dsfr/dist/dsfr.min.css";
import "@gouvfr/dsfr/dist/utility/icons/icons-system/icons-system.min.css";
import "@gouvfr/dsfr/dist/utility/icons/icons-business/icons-business.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALEXI - Prévention des expulsions locatives",
  description: "Application de gestion et de prévention des expulsions locatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-fr-scheme="system" suppressHydrationWarning>
      <head>
        {/* Les styles et scripts DSFR sont importés directement en haut du fichier */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <DsfrInitializer />
        <Providers>
        <div className="fr-container">
          <header role="banner" className="fr-header">
            <div className="fr-header__body">
              <div className="fr-container">
                <div className="fr-header__body-row">
                  <div className="fr-header__brand fr-enlarge-link">
                    <div className="fr-header__brand-top">
                      <div className="fr-header__logo">
                        <p className="fr-logo">
                          République<br />Française
                        </p>
                      </div>
                      <div className="fr-header__navbar">
                        <button className="fr-btn--menu fr-btn" data-fr-opened="false" aria-controls="modal-menu" aria-haspopup="menu" title="Menu">
                          Menu
                        </button>
                      </div>
                    </div>
                    <div className="fr-header__service">
                      <a href="/" title="Accueil - ALEXI">
                        <p className="fr-header__service-title">ALEXI</p>
                      </a>
                      <p className="fr-header__service-tagline">Prévention des expulsions locatives</p>
                    </div>
                  </div>
                  <div className="fr-header__tools">
                    <UserMenu />
                  </div>
                </div>
              </div>
            </div>
            <div className="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="modal-menu-title">
              <div className="fr-container">
                <button className="fr-link--close fr-link" aria-controls="modal-menu">Fermer</button>
                <div className="fr-header__menu-links"></div>
                <MainNavigation />
              </div>
            </div>
          </header>
          <main role="main">
            {children}
          </main>
          <footer className="fr-footer" role="contentinfo">
            <div className="fr-container">
              <div className="fr-footer__body">
                <div className="fr-footer__brand fr-enlarge-link">
                  <a href="/" title="Retour à l'accueil">
                    <p className="fr-logo">
                      République<br />Française
                    </p>
                  </a>
                </div>
                <div className="fr-footer__content">
                  <p className="fr-footer__content-desc">ALEXI - Application de gestion et de prévention des expulsions locatives</p>
                </div>
              </div>
              <div className="fr-footer__bottom">
                <ul className="fr-footer__bottom-list">
                  <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" href="/privacy">Politique de confidentialité</a>
                  </li>
                  <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" href="/privacy">Accessibilité : Non conforme</a>
                  </li>
                  <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" href="/terms">Conditions d'utilisation</a>
                  </li>
                  <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" href="/legal">Mentions légales</a>
                  </li>
                  <li className="fr-footer__bottom-item">
                    <a className="fr-footer__bottom-link" href="/cookies">Gestion des cookies</a>
                  </li>
                </ul>
                <div className="fr-footer__bottom-copy">
                  <p>© République Française 2025</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
        </Providers>
      </body>
    </html>
  );
}
