import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { m, useScroll, useSpring } from 'motion/react';
import { experienceItems } from '../data/experience';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function Experience() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 75%'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 20 });

  return (
    <section
      id="parcours"
      ref={containerRef}
      className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-4xl">
        {/* En-tête */}
        <div className="mb-16">
          <p className="font-display tracking-widest text-sm sm:text-base text-amber-500 uppercase">
            {t('experience.surtitle')}
          </p>
          <h2
            id="experience-title"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink"
          >
            {t('experience.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline verticale façon pistes d'enregistrement */}
        <div className="relative pl-6 sm:pl-10">
          {/* Ligne de fond */}
          <div
            className="absolute left-[9px] sm:left-[13px] top-3 bottom-4 w-[2px] bg-mocha-500/25 rounded-full"
            aria-hidden="true"
          />

          {/* Ligne animée au défilement (vert/orange amber) */}
          <m.div
            className="absolute left-[9px] sm:left-[13px] top-3 bottom-4 w-[2px] bg-amber-500 rounded-full origin-top"
            style={{ scaleY: reduced ? 1 : scaleY }}
            aria-hidden="true"
          />

          <ol className="space-y-10 sm:space-y-12 list-none p-0 m-0">
            {experienceItems.map((item) => {
              const details = t(item.detailsKey, { returnObjects: true }) || [];
              return (
                <li key={item.id} className="relative group">
                  {/* Point vinyle sur la timeline */}
                  <span
                    className="absolute -left-6 sm:-left-10 top-3 h-5 w-5 rounded-full border-2 border-amber-500 bg-page flex items-center justify-center shadow-xs transition-transform group-hover:scale-125"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                  </span>

                  {/* Carte piste d'album */}
                  <article className="rounded-2xl border border-mocha-500/30 bg-surface p-6 sm:p-7 shadow-warm hover:border-amber-500/70 transition-all duration-300 hover:-translate-y-1">
                    {/* Track & Date en Bebas Neue */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mocha-500/20 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm tracking-widest text-amber-500 font-bold">
                          {item.track}
                        </span>
                        {item.status === 'current' && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-caramel-400 text-espresso-950">
                            {t('skills.learningBadge')}
                          </span>
                        )}
                      </div>
                      <span className="font-display text-base tracking-wider text-caramel-400">
                        {t(item.dateKey)}
                      </span>
                    </div>

                    {/* Rôle & Établissement */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                      {t(item.roleKey)}
                    </h3>
                    <p className="text-sm font-medium text-caramel-400/90 mt-1 mb-4">
                      {t(item.placeKey)}
                    </p>

                    {/* Détails */}
                    <ul className="list-disc space-y-2 pl-4 text-sm text-muted leading-relaxed">
                      {Array.isArray(details) &&
                        details.map((detail, idx) => (
                          <li key={idx} className="marker:text-amber-500">
                            {detail}
                          </li>
                        ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
