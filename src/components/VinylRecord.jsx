import React from 'react';
import { m } from 'motion/react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import Logo from './Logo';

/**
 * Grand disque vinyle interactif avec sillons concentriques, reflet conique,
 * macaron bordeaux oxblood "NJ", trou central et bras de lecture SVG animé.
 */
export default function VinylRecord() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="relative flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Halo d'ambiance chaud sous le vinyle */}
      <div className="absolute -inset-4 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />

      {/* Disque vinyle rotatif */}
      <div
        className={`relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] rounded-full shadow-2xl transition-transform ${
          reduced ? '' : 'animate-vinyl-spin'
        }`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(16, 8, 6, 0.7), inset 0 0 0 2px rgba(211, 163, 118, 0.15)',
        }}
      >
        {/* Sillons du vinyle avec dégradé radial répété */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'repeating-radial-gradient(circle, #100806 0px, #1a0f0d 2px, #100806 3px, #261614 5px, #100806 6px)',
          }}
        />

        {/* Reflet conique brillant simulant la lumière sur les microsillons */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none opacity-60"
          style={{
            background:
              'conic-gradient(from 25deg, transparent 0deg, rgba(255, 242, 223, 0.08) 40deg, transparent 80deg, transparent 180deg, rgba(255, 242, 223, 0.08) 220deg, transparent 260deg)',
          }}
        />

        {/* Rainure de départ externe */}
        <div className="absolute inset-4 rounded-full border border-caramel-400/10 pointer-events-none" />
        <div className="absolute inset-8 rounded-full border border-caramel-400/5 pointer-events-none" />

        {/* Macaron central (Label Oxblood) */}
        <div
          className="absolute inset-[33%] rounded-full flex flex-col items-center justify-center p-3 text-center shadow-inner"
          style={{
            background: 'radial-gradient(circle, #990026 0%, #800020 70%, #5e0018 100%)',
            border: '2px solid rgba(211, 163, 118, 0.4)',
          }}
        >
          {/* Cercle doré fin intérieur */}
          <div className="absolute inset-2 rounded-full border border-caramel-400/30 pointer-events-none" />

          {/* Monogramme NJ */}
          <div className="text-cream-100 drop-shadow-md">
            <Logo size={28} className="text-cream-100" />
          </div>

          {/* Inscription centrale */}
          <span className="mt-1 font-display tracking-widest text-[10px] sm:text-xs text-caramel-400 uppercase font-semibold">
            FULL STACK · 2027
          </span>

          <span className="font-sans text-[8px] tracking-wider text-cream-100/70 uppercase">
            33⅓ RPM · STEREO
          </span>

          {/* Trou central (Spindle hole) */}
          <div
            className="absolute h-4 w-4 rounded-full border-2 border-caramel-400/60 shadow-inner"
            style={{
              background: '#2B1916',
            }}
          />
        </div>
      </div>

      {/* Bras de lecture SVG (Tone Arm) positionné en haut à droite */}
      <m.div
        className="absolute -top-8 -right-4 sm:-top-10 sm:-right-8 w-28 sm:w-36 pointer-events-none z-20 origin-top-right"
        initial={reduced ? false : { rotate: -25, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: '85% 15%' }}
      >
        <svg
          viewBox="0 0 160 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full drop-shadow-xl"
        >
          {/* Base du pivot (anneau métallique) */}
          <circle cx="135" cy="30" r="18" fill="#3E2522" stroke="#D3A376" strokeWidth="3" />
          <circle cx="135" cy="30" r="10" fill="#8C6E63" />
          <circle cx="135" cy="30" r="4" fill="#E8892E" />

          {/* Contrepoids arrière */}
          <rect x="125" y="6" width="20" height="12" rx="3" fill="#D3A376" />

          {/* Tube du bras métallique courbé jazz */}
          <path
            d="M135 30 L110 90 L60 165 L35 190"
            stroke="#D3A376"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Tête de lecture (Cartouche & Diamant) */}
          <g transform="translate(22, 185) rotate(-35)">
            <rect x="0" y="0" width="22" height="12" rx="2" fill="#2B1916" stroke="#E8892E" strokeWidth="2" />
            <path d="M22 6 L28 6" stroke="#FFF2DF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="28" cy="6" r="1.5" fill="#E8892E" />
          </g>
        </svg>
      </m.div>
    </div>
  );
}
