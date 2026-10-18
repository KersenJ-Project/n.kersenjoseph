import React from 'react';

/**
 * Logo vectoriel pur (monogramme géométrique NJ)
 * Inspiré de la référence visuelle jazz/moderne avec angles nets, coupes en diagonale et biseaux précis.
 */
export default function Logo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${className}`}
      aria-hidden="true"
    >
      {/* Branche gauche du N - tige inclinée biseautée */}
      <path d="M12 78L32 22H46L26 78H12Z" />
      {/* Diagonale centrale tranchante */}
      <path d="M42 22L70 78H54L30 30L42 22Z" />
      {/* Branche droite et crochet du J géométrique */}
      <path d="M68 22H86L70 66C66 74 58 78 50 78H44L48 66H50C54 66 58 64 60 60L68 22Z" />
      {/* Accent coupe biseautée supérieure */}
      <path d="M74 22L84 22L80 32L70 32L74 22Z" opacity="0.85" />
    </svg>
  );
}
