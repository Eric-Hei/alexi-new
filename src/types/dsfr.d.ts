// Déclaration de type pour le DSFR
interface DsfrWindow extends Window {
  dsfr?: {
    start: () => void;
    verbose?: boolean;
    mode?: string;
  };
}

declare global {
  interface Window extends DsfrWindow {}
}
