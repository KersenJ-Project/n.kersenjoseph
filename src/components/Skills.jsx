import React from 'react';
import { useTranslation } from 'react-i18next';
import { skillCategories } from '../data/skills';
import { onlineCourses } from '../data/links';
import { TechIconBadge } from '../data/techIcons';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="competences"
      className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* En-tête de section style jaquette de vinyle */}
        <div className="mb-14">
          <p className="font-display tracking-widest text-sm sm:text-base text-amber-500 uppercase">
            {t('skills.surtitle')}
          </p>
          <h2
            id="skills-title"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink"
          >
            {t('skills.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Grille Bento style dos d'album de jazz */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col rounded-2xl border border-mocha-500/30 bg-surface p-6 shadow-warm hover:border-amber-500/60 transition-all duration-300 hover:-translate-y-1"
            >
              {/* En-tête de piste */}
              <div className="flex items-center justify-between border-b border-mocha-500/20 pb-3 mb-4">
                <span className="font-display text-xs tracking-wider text-caramel-400 uppercase font-semibold">
                  {category.trackNumber}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500 text-espresso-950">
                  {category.items.length} TITRES
                </span>
              </div>

              {/* Titre de catégorie */}
              <h3 className="font-serif text-lg font-bold text-ink mb-4">
                {t(category.titleKey)}
              </h3>

              {/* Tracklist numérotée (01, 02, 03...) avec pastilles logos */}
              <ul className="flex flex-col gap-2.5 grow">
                {category.items.map((item, index) => {
                  const trackNum = String(index + 1).padStart(2, '0');
                  return (
                    <li
                      key={item}
                      className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 transition-colors hover:bg-espresso-950/20 dark:hover:bg-cream-100/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-display text-xs tracking-wider text-caramel-400 group-hover:text-amber-500 font-semibold w-5">
                          {trackNum}
                        </span>
                        <TechIconBadge name={item} size={15} />
                        <span className="text-sm font-medium text-ink group-hover:text-amber-500 transition-colors">
                          {item}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}

          {/* Carte Spéciale Bento : "En apprentissage" (Formations en ligne SQL & Python) */}
          <article className="flex flex-col rounded-2xl border-2 border-caramel-400/50 bg-surface p-6 shadow-warm hover:border-amber-500 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            {/* Décor trame de points jazz */}
            <div className="absolute top-2 right-2 w-16 h-16 jazz-dots text-caramel-400/20 pointer-events-none" aria-hidden="true" />

            <div className="flex items-center justify-between border-b border-mocha-500/20 pb-3 mb-4">
              <span className="font-display text-xs tracking-wider text-amber-500 uppercase font-semibold">
                SIDE B — SPECIAL RELEASE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-caramel-400 text-espresso-950">
                {t('skills.learningBadge')}
              </span>
            </div>

            <h3 className="font-serif text-lg font-bold text-ink mb-1">
              {t('skills.learningTitle')}
            </h3>
            <p className="text-xs text-muted mb-4 leading-relaxed">
              {t('skills.learningSubtitle')}
            </p>

            <ul className="flex flex-col gap-3 grow">
              {onlineCourses.map((course) => (
                <li
                  key={course.platform}
                  className="rounded-xl border border-mocha-500/30 bg-espresso-950/30 dark:bg-espresso-950/30 light:bg-cream-100/60 p-3 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-caramel-400">
                      {course.platform}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-espresso-950">
                      {t('skills.learningBadge')}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <TechIconBadge name={course.tech} size={16} />
                    <TechIconBadge name={course.platform} size={16} />
                    <span className="text-sm font-bold text-ink">
                      {course.subject}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Lignes récapitulatives Savoir-être et Langues */}
        <div className="mt-12 rounded-2xl border border-mocha-500/25 bg-surface/60 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-muted">
          <p className="flex items-center gap-2 font-medium">
            <span className="text-amber-500 font-bold">✓</span>
            {t('skills.softSkills')}
          </p>
          <div className="h-px sm:h-4 w-full sm:w-px bg-mocha-500/30" aria-hidden="true" />
          <p className="flex items-center gap-2 font-medium">
            <span className="text-amber-500 font-bold">✓</span>
            {t('skills.languages')}
          </p>
        </div>
      </div>
    </section>
  );
}
