import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { m, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Maximize2, X } from 'lucide-react';
import { projects } from '../data/projects';
import { TechIconBadge } from '../data/techIcons';

// Import des déclinaisons responsives WebP et AVIF générées
import esthetiqueAvif800 from '../assets/screenshots/esthetique-800.avif';
import esthetiqueAvif1200 from '../assets/screenshots/esthetique-1200.avif';
import esthetiqueWebp800 from '../assets/screenshots/esthetique-800.webp';
import esthetiqueWebp1200 from '../assets/screenshots/esthetique-1200.webp';
import esthetiqueDefault from '../assets/screenshots/esthetique.webp';

import andconstructionAvif800 from '../assets/screenshots/andconstruction-800.avif';
import andconstructionAvif1200 from '../assets/screenshots/andconstruction-1200.avif';
import andconstructionWebp800 from '../assets/screenshots/andconstruction-800.webp';
import andconstructionWebp1200 from '../assets/screenshots/andconstruction-1200.webp';
import andconstructionDefault from '../assets/screenshots/andconstruction.webp';

import timeworkAvif800 from '../assets/screenshots/timework-800.avif';
import timeworkAvif1200 from '../assets/screenshots/timework-1200.avif';
import timeworkWebp800 from '../assets/screenshots/timework-800.webp';
import timeworkWebp1200 from '../assets/screenshots/timework-1200.webp';
import timeworkDefault from '../assets/screenshots/timework.webp';

const projectImages = {
  esthetique: {
    avifSrcSet: `${esthetiqueAvif800} 800w, ${esthetiqueAvif1200} 1200w`,
    webpSrcSet: `${esthetiqueWebp800} 800w, ${esthetiqueWebp1200} 1200w`,
    fallback: esthetiqueDefault,
    full: esthetiqueWebp1200,
  },
  andconstruction: {
    avifSrcSet: `${andconstructionAvif800} 800w, ${andconstructionAvif1200} 1200w`,
    webpSrcSet: `${andconstructionWebp800} 800w, ${andconstructionWebp1200} 1200w`,
    fallback: andconstructionDefault,
    full: andconstructionWebp1200,
  },
  timework: {
    avifSrcSet: `${timeworkAvif800} 800w, ${timeworkAvif1200} 1200w`,
    webpSrcSet: `${timeworkWebp800} 800w, ${timeworkWebp1200} 1200w`,
    fallback: timeworkDefault,
    full: timeworkWebp1200,
  },
};

/**
 * Pochette stylisée pour la Piste 04 (Projet à venir)
 */
function UpcomingAlbumCover() {
  return (
    <div
      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden flex items-center justify-center border border-mocha-500/40 shadow-inner bg-gradient-to-br from-espresso-950 via-espresso-900 to-espresso-950"
      aria-hidden="true"
    >
      {/* Sillons concentriques vinyle subtils */}
      <svg
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      >
        <circle cx="200" cy="125" r="110" stroke="#D3A376" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="200" cy="125" r="85" stroke="#D3A376" strokeWidth="1" />
        <circle cx="200" cy="125" r="60" stroke="#E8892E" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="200" cy="125" r="35" stroke="#D3A376" strokeWidth="1" />
      </svg>

      {/* Point d'interrogation jazz stylisé en typographie serif */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="font-serif text-6xl sm:text-7xl font-bold text-caramel-400/80 drop-shadow-md select-none">
          ?
        </span>
        <span className="mt-1 font-display text-[11px] sm:text-xs tracking-widest text-caramel-400/60 uppercase">
          33⅓ RPM · STUDIO SESSION
        </span>
      </div>

      {/* Trame de papier légère */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-30" />
    </div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const [activeLightbox, setActiveLightbox] = useState(null);
  const lastActiveTriggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Blocage du scroll du body lors de l'ouverture de la modale Lightbox
  useEffect(() => {
    if (activeLightbox) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Focus sur le bouton de fermeture de la modale
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeLightbox]);

  // Fermeture via la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeLightbox) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightbox]);

  const openLightbox = (project, triggerEl) => {
    lastActiveTriggerRef.current = triggerEl;
    setActiveLightbox(project);
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
    if (lastActiveTriggerRef.current) {
      lastActiveTriggerRef.current.focus();
    }
  };

  return (
    <section
      id="projets"
      className="relative scroll-mt-24 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl">
        {/* En-tête de section jazz */}
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

        {/* Grille de 4 cartes (2 colonnes sur desktop, 1 colonne sur mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projects.map((project) => {
            const imgData = projectImages[project.imageKey];

            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-mocha-500/30 bg-surface p-6 shadow-warm hover:border-amber-500/80 transition-all duration-300 hover:-translate-y-1.5 focus-within:border-amber-500"
              >
                {/* En-tête de carte : Numéro de piste en Bebas Neue + Type de projet en caramel */}
                <div className="flex items-center justify-between gap-3 mb-4 border-b border-mocha-500/20 pb-3">
                  <span className="font-display text-sm tracking-widest text-amber-500 uppercase font-bold">
                    {t('projects.track', { num: project.trackNumber })}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-caramel-400 bg-caramel-400/10 border border-caramel-400/25">
                    {t(project.typeKey)}
                  </span>
                </div>

                {/* Cadre de fenêtre de navigateur + Vinyle coulissant en arrière-plan */}
                <div className="relative w-full mb-6 flex items-center">
                  {/* Disque vinyle noir qui dépasse subtilement à droite et glisse au survol/focus */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[86%] aspect-square rounded-full transition-transform duration-700 ease-out translate-x-1 sm:translate-x-2 group-hover:translate-x-10 sm:group-hover:translate-x-14 group-focus-within:translate-x-10 sm:group-focus-within:translate-x-14 pointer-events-none z-0"
                    style={{
                      background:
                        'repeating-radial-gradient(circle, #0e0705 0px, #180d0a 2px, #0e0705 3px, #22120e 4px, #0e0705 5px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.6)',
                    }}
                    aria-hidden="true"
                  >
                    {/* Macaron central oxblood avec initiales NKJ */}
                    <div
                      className="absolute inset-[34%] rounded-full flex items-center justify-center shadow-inner"
                      style={{
                        background: 'radial-gradient(circle, #800020, #4d0013)',
                        border: '1.5px solid #D3A376',
                      }}
                    >
                      <span className="font-display text-[9px] text-cream-100 uppercase tracking-widest font-bold select-none">
                        NKJ
                      </span>
                      <div className="absolute h-2.5 w-2.5 rounded-full bg-espresso-950 border border-caramel-400" />
                    </div>
                  </div>

                  {/* Fenêtre de navigateur ou Pochette Projet à venir (au premier plan z-10) */}
                  <div className="relative z-10 w-[92%] sm:w-[91%] rounded-xl overflow-hidden border border-mocha-500/40 bg-espresso-950 shadow-md">
                    {project.isUpcoming ? (
                      <UpcomingAlbumCover />
                    ) : (
                      <>
                        {/* Chrome de la fenêtre avec les 3 pastilles jazz */}
                        <div className="flex items-center justify-between px-3.5 py-2 bg-espresso-900 border-b border-mocha-500/30">
                          {/* 3 pastilles : caramel, ambre, oxblood */}
                          <div className="flex items-center gap-1.5" aria-hidden="true">
                            <span className="h-2.5 w-2.5 rounded-full bg-caramel-400 opacity-90" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-500 opacity-90" />
                            <span className="h-2.5 w-2.5 rounded-full bg-oxblood-700 opacity-90" />
                          </div>

                          {/* Fausse barre d'adresse épurée */}
                          <div className="flex items-center justify-center px-3 py-0.5 rounded bg-espresso-950/70 border border-mocha-500/20 text-[11px] font-mono text-caramel-400/80 truncate max-w-[180px] sm:max-w-[240px]">
                            {project.mockupUrl}
                          </div>

                          {/* Espace visuel équilibrant */}
                          <div className="w-8 sm:w-10" aria-hidden="true" />
                        </div>

                        {/* Zone d'image (ratio 16:10) cliquable pour ouvrir la Lightbox */}
                        {imgData && (
                          <button
                            type="button"
                            onClick={(e) => openLightbox(project, e.currentTarget)}
                            className="block w-full aspect-[16/10] overflow-hidden relative cursor-zoom-in group/img focus:outline-none focus:ring-2 focus:ring-amber-500"
                            aria-label={`${t('projects.zoomImage')} : ${t(project.titleKey)}`}
                          >
                            <picture>
                              <source
                                type="image/avif"
                                srcSet={imgData.avifSrcSet}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                              />
                              <source
                                type="image/webp"
                                srcSet={imgData.webpSrcSet}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 550px"
                              />
                              <img
                                src={imgData.fallback}
                                alt={t(project.altKey)}
                                loading="lazy"
                                decoding="async"
                                width="800"
                                height="500"
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
                              />
                            </picture>

                            {/* Badge indicateur de zoom au survol */}
                            <div className="absolute inset-0 bg-espresso-950/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-espresso-900/90 text-cream-100 text-xs font-medium border border-caramel-400/50 shadow-lg">
                                <Maximize2 size={13} className="text-amber-500" aria-hidden="true" />
                                {t('projects.zoomImage')}
                              </span>
                            </div>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Titre du projet */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink mb-2">
                  {t(project.titleKey)}
                </h3>

                {/* Description fluide (limitée à ~65 caractères de large) */}
                <p className="text-sm text-muted leading-relaxed max-w-[65ch] mb-4 grow">
                  {t(project.descriptionKey)}
                </p>

                {/* Pour TimeWork : 4 pastilles de fonctionnalités clés */}
                {project.features && (
                  <div className="mb-4">
                    <ul
                      className="flex flex-wrap gap-1.5"
                      aria-label="Fonctionnalités principales"
                    >
                      {project.features.map((featureKey) => (
                        <li
                          key={featureKey}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-caramel-400/15 text-caramel-400 border border-caramel-400/30"
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full bg-amber-500"
                            aria-hidden="true"
                          />
                          <span>{t(featureKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags technologiques avec logos officiels */}
                {project.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies utilisées">
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
                )}

                {/* Boutons d'action : affichés UNIQUEMENT si l'URL correspondante est renseignée */}
                {(project.liveUrl || project.codeUrl) && (
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-mocha-500/20 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-burnt-700 text-espresso-950 hover:text-cream-100 font-sans font-bold text-xs tracking-wide transition-all duration-300 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>{t('projects.viewSite')}</span>
                      </a>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-caramel-400/50 hover:border-amber-500 bg-transparent text-ink hover:text-amber-500 font-sans font-semibold text-xs transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                      >
                        <Github size={14} aria-hidden="true" />
                        <span>{t('projects.viewCode')}</span>
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modale accessible */}
      <AnimatePresence>
        {activeLightbox && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${t(activeLightbox.titleKey)} - ${t('projects.zoomImage')}`}
          >
            {/* Arrière-plan sombre avec flou de backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-espresso-950/85 backdrop-blur-sm cursor-pointer"
              aria-hidden="true"
            />

            {/* Boîte de dialogue modale */}
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-5xl rounded-2xl border border-mocha-500/40 bg-surface p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* En-tête de la modale */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-mocha-500/20">
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm tracking-widest text-amber-500 uppercase font-bold">
                    {t('projects.track', { num: activeLightbox.trackNumber })}
                  </span>
                  <span className="h-4 w-px bg-mocha-500/30" aria-hidden="true" />
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-ink truncate">
                    {t(activeLightbox.titleKey)}
                  </h3>
                </div>

                {/* Bouton de fermeture accessible */}
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-full p-2 text-muted hover:text-ink hover:bg-mocha-500/15 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                  aria-label={t('projects.closeLightbox')}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Contenu image haute résolution */}
              <div className="relative overflow-auto rounded-xl border border-mocha-500/30 bg-espresso-950 flex items-center justify-center">
                {projectImages[activeLightbox.imageKey] && (
                  <img
                    src={projectImages[activeLightbox.imageKey].full}
                    alt={t(activeLightbox.altKey)}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Pied de la modale avec lien vers le site si disponible */}
              {activeLightbox.liveUrl && (
                <div className="mt-4 pt-3 flex justify-end border-t border-mocha-500/20">
                  <a
                    href={activeLightbox.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-burnt-700 text-espresso-950 hover:text-cream-100 font-sans font-bold text-xs tracking-wide transition-all duration-300"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    <span>{t('projects.viewSite')}</span>
                  </a>
                </div>
              )}
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
