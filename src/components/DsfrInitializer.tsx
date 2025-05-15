'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function DsfrInitializer() {
  useEffect(() => {
    // Initialiser le DSFR manuellement si window.dsfr existe
    if (typeof window !== 'undefined' && window.dsfr && window.dsfr.start) {
      try {
        window.dsfr.start();
        console.log('DSFR initialized manually');
      } catch (error) {
        console.error('Error initializing DSFR:', error);
      }
    }
  }, []);

  return (
    <>
      <Script
        src="/dsfr/dsfr.module.min.js"
        type="module"
        strategy="afterInteractive"
      />
      <Script
        src="/dsfr/dsfr.nomodule.min.js"
        noModule
        strategy="afterInteractive"
      />
    </>
  );
}
