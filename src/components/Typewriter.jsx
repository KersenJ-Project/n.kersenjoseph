import React from 'react';
import useTypewriter from '../hooks/useTypewriter';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

/**
 * Composant Typewriter accessible :
 * - Fournit la liste complète des phrases aux lecteurs d'écran (sr-only).
 * - Masque l'animation visuelle aux outils d'assistance (aria-hidden="true").
 * - Curseur animé orange chaud amber-500.
 */
export default function Typewriter({ phrases }) {
  const animatedText = useTypewriter(phrases);
  const reduced = usePrefersReducedMotion();

  if (!phrases || phrases.length === 0) return null;

  return (
    <>
      {/* Texte complet pour l'accessibilité et les lecteurs d'écran */}
      <span className="sr-only">
        {phrases.join(' — ')}
      </span>

      {/* Rendu visuel animé */}
      <span aria-hidden="true" className="text-amber-500 font-serif italic">
        {animatedText}
        <span
          className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-amber-500 ${
            reduced ? 'opacity-100' : 'animate-caret-jazz'
          }`}
        />
      </span>
    </>
  );
}
