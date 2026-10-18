import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { TechIconBadge } from '../data/techIcons';

/**
 * Pochette d'album géométrique abstraite (composition originale jazz)
 */
function AlbumCoverSvg({ project }) {
  const { id, palette } = project;

  if (project.status === 'soon') {
    return (
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect width="300" height="300" fill={palette.bg} />
        {/* Sillons concentriques pâles */}
        <circle cx="150" cy="150" r="120" stroke={palette.shape} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        <circle cx="150" cy="150" r="80" stroke={palette.shape} strokeWidth="1" opacity="0.2" />
        {/* Glyphe point d'interrogation jazz stylisé */}
        <text
          x="150"
          y="180"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="96"
          fontWeight="700"
          fill={palette.shape}
          opacity="0.85"
        >
          ?
        </text>
        <text
          x="20"
          y="35"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="14"
          letterSpacing="2"
          fill={palette.shape}
          opacity="0.7"
        >
          {project.albumNumber}
        </text>
      </svg>
    );
  }

  if (id === 'esthetique-plus') {
    return (
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect width="300" height="300" fill={palette.bg} />
        {/* Composition jazz : grands arcs et formes dynamiques */}
        <path d="M0 0 L180 0 L60 300 L0 300 Z" fill={palette.circle2} opacity="0.85" />
        <circle cx="220" cy="90" r="70" fill={palette.circle1} />
        <circle cx="220" cy="90" r="35" fill={palette.bg} />
        <path d="M120 180 L300 240 L300 300 L90 300 Z" fill={palette.shape} opacity="0.9" />
        {/* Trame de points jazz */}
        <g fill={palette.shape} opacity="0.3">
          <circle cx="250" cy="20" r="3" />
          <circle cx="270" cy="20" r="3" />
          <circle cx="290" cy="20" r="3" />
          <circle cx="250" cy="40" r="3" />
          <circle cx="270" cy="40" r="3" />
          <circle cx="290" cy="40" r="3" />
        </g>
        <text
          x="20"
          y="32"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="15"
          letterSpacing="2"
          fill="#FFF2DF"
        >
          {project.albumNumber}
        </text>
        <text
          x="20"
          y="280"
          fontFamily="Fraunces, serif"
          fontSize="18"
          fontWeight="700"
          fill="#FFF2DF"
        >
          ESTHETIQUE+
        </text>
      </svg>
    );
  }

  // and-construction
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect width="300" height="300" fill={palette.bg} />
      {/* Rythmes verticaux et blocs jazz constructivistes */}
      <rect x="30" y="40" width="45" height="220" fill={palette.circle1} />
      <rect x="90" y="80" width="45" height="180" fill={palette.shape} />
      <rect x="150" y="30" width="45" height="230" fill={palette.circle2} />
      <circle cx="240" cy="180" r="50" fill={palette.circle1} />
      <circle cx="240" cy="180" r="20" fill="#FFF2DF" />
      <text
        x="20"
        y="30"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="15"
        letterSpacing="2"
        fill="#FFF2DF"
      >
        {project.albumNumber}
      </text>
      <text
        x="20"
        y="285"
        fontFamily="Fraunces, serif"
        fontSize="17"
        fontWeight="700"
        fill="#FFF2DF"
      >
        AND CONST.
      </text>
    </svg>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projets"
      className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* En-tête */}
        <div className="mb-14">
          <p className="font-display tracking-widest text-sm sm:text-base text-amber-500 uppercase">
            {t('projects.surtitle')}
          </p>
          <h2
            id="projects-title"
            className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink"
          >
            {t('projects.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Grille de pochettes d'albums */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl border border-mocha-500/30 bg-surface p-6 shadow-warm hover:border-amber-500/80 transition-all duration-300 hover:-translate-y-1.5 focus-within:border-amber-500"
            >
              {/* Conteneur pochette d'album carrée + vinyle glissant au hover/focus */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-6 bg-espresso-950 flex items-center justify-center shadow-lg">
                {/* Disque vinyle noir qui glisse hors de la pochette au survol/focus */}
                <div
                  className="absolute right-0 h-[88%] w-[88%] rounded-full shadow-2xl transition-transform duration-700 ease-out group-hover:translate-x-1/4 group-focus-within:translate-x-1/4"
                  style={{
                    background:
                      'repeating-radial-gradient(circle, #0e0705 0px, #180d0a 2px, #0e0705 3px, #22120e 4px, #0e0705 5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
                  }}
                  aria-hidden="true"
                >
                  {/* Macaron central du vinyle */}
                  <div
                    className="absolute inset-[36%] rounded-full flex items-center justify-center"
                    style={{
                      background: 'radial-gradient(circle, #800020, #4d0013)',
                      border: '1.5px solid #D3A376',
                    }}
                  >
                    <span className="font-display text-[9px] text-cream-100 uppercase tracking-widest">
                      NKJ
                    </span>
                    <div className="absolute h-2.5 w-2.5 rounded-full bg-espresso-950 border border-caramel-400" />
                  </div>
                </div>

                {/* Pochette cartonnée supérieure */}
                <div className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-md">
                  <AlbumCoverSvg project={project} />
                  {/* Trame papier subtile sur la pochette */}
                  <div className="absolute inset-0 paper-texture pointer-events-none opacity-40" />
                </div>
              </div>

              {/* Titre & Statut */}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  {t(project.titleKey)}
                </h3>
                {project.status === 'soon' && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-caramel-400 text-espresso-950">
                    {t('projects.statusSoon')}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed grow mb-4">
                {t(project.descriptionKey)}
              </p>

              {/* Tags avec pastilles logos */}
              <ul className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-mocha-500/30 bg-page/80 text-xs font-medium text-ink"
                  >
                    <TechIconBadge name={tag} size={13} />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>

              {/* Boutons d'action */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-mocha-500/20">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-burnt-700 text-espresso-950 hover:text-cream-100 font-sans font-bold text-xs tracking-wide transition-all duration-300"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    <span>{t('projects.viewSite')}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-mocha-500/40 text-caramel-400/90 text-xs font-semibold select-none">
                    <ExternalLink size={13} aria-hidden="true" />
                    <span>{t('projects.viewSite')}</span>
                  </span>
                )}

                {project.codeUrl ? (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-caramel-400/50 hover:border-amber-500 bg-transparent text-ink hover:text-amber-500 font-sans font-semibold text-xs transition-all duration-300"
                  >
                    <Github size={14} aria-hidden="true" />
                    <span>{t('projects.viewCode')}</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-dashed border-mocha-500/40 text-caramel-400/90 text-xs font-medium select-none">
                    <Github size={13} aria-hidden="true" />
                    <span>{t('projects.viewCode')}</span>
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
