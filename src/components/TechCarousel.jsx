import React from 'react';
import { useTranslation } from 'react-i18next';
import { technologies } from '../data/technologies';
import { TechIconBadge } from '../data/techIcons';

export default function TechCarousel() {
  const { t } = useTranslation();
  // Duplication de la liste pour garantir un cycle continu sans saut
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section
      className="relative w-full py-6 border-y border-mocha-500/30 bg-espresso-950/70 dark:bg-espresso-950/70 light:bg-cream-200/60 overflow-hidden"
      aria-label={t('techCarousel.title')}
    >
      {/* Masques de fondu dégradé latéraux gauche et droite */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-page to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-page to-transparent"
        aria-hidden="true"
      />

      {/* Ruban défilant en animation pure CSS translateX */}
      <div className="marquee-track flex gap-4 items-center">
        {marqueeItems.map((techName, index) => (
          <div
            key={`${techName}-${index}`}
            className="group inline-flex shrink-0 items-center gap-2.5 px-4 py-2 rounded-full border border-mocha-500/30 bg-surface hover:border-amber-500 transition-all duration-300 shadow-xs cursor-default select-none"
          >
            <TechIconBadge name={techName} size={15} />
            <span className="whitespace-nowrap text-xs sm:text-sm font-medium text-ink group-hover:text-amber-500 transition-colors">
              {techName}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
