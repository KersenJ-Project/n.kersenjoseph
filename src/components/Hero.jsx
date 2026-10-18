import React from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { m } from 'motion/react';
import Typewriter from './Typewriter';
import VinylRecord from './VinylRecord';
import { socialLinks } from '../data/links';

export default function Hero() {
  const { t } = useTranslation();
  const typewriterPhrases = t('hero.typewriter', { returnObjects: true }) || [];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Motifs jazz d'ambiance en arrière-plan (aria-hidden SVG) */}
      <svg className="absolute top-12 left-6 w-96 h-36 pointer-events-none select-none opacity-15 -rotate-6" aria-hidden="true">
        <text x="0" y="90" fill="#D3A376" fontFamily="'Bebas Neue', sans-serif" fontSize="110" letterSpacing="4">STEREO</text>
      </svg>
      <svg className="absolute bottom-16 right-10 w-96 h-36 pointer-events-none select-none opacity-10 rotate-12" aria-hidden="true">
        <text x="0" y="90" fill="#D3A376" fontFamily="'Bebas Neue', sans-serif" fontSize="110" letterSpacing="4">33⅓ RPM</text>
      </svg>

      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Colonne gauche : Présentation & Contenu */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge de localisation façon macaron d'album */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-caramel-400/40 bg-surface/80 text-caramel-400 text-xs font-semibold tracking-wider uppercase shadow-xs mb-6">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
            <span>{t('hero.badge')}</span>
          </div>

          {/* Titre principal */}
          <h1
            id="hero-title"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.15]"
          >
            {t('hero.greeting')}{' '}
            <span className="block text-amber-500 font-bold mt-1">
              {t('hero.name')}
            </span>
          </h1>

          {/* Machine à écrire */}
          <div className="mt-4 min-h-[2.5rem] font-serif text-xl sm:text-2xl text-ink font-semibold">
            <Typewriter phrases={typewriterPhrases} />
          </div>

          {/* Pastille discrète des formations en cours */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-md border border-mocha-500/30 bg-espresso-900/60 dark:bg-espresso-900/60 light:bg-cream-200 text-xs font-medium text-caramel-400">
            <span className="text-amber-500 font-bold">●</span>
            <span>{t('hero.currentFocus')}</span>
          </div>

          {/* Paragraphe d'introduction limité à 65 caractères */}
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            {t('hero.intro')}
          </p>

          {/* Boutons d'action CTA et liens sociaux */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo('projets')}
              className="px-6 py-3.5 rounded-full bg-amber-500 hover:bg-burnt-700 text-espresso-950 hover:text-cream-100 font-sans font-bold text-sm tracking-wide transition-all duration-300 shadow-warm hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              {t('hero.ctaProjects')}
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-full border border-caramel-400/60 hover:border-amber-500 bg-transparent text-ink hover:text-amber-500 font-sans font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {t('hero.ctaContact')}
            </button>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Nyle Kersen Joseph (nouvelle fenêtre)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mocha-500/40 bg-surface/80 text-ink hover:text-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-105"
              >
                <Github size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Nyle Kersen Joseph (nouvelle fenêtre)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-mocha-500/40 bg-surface/80 text-ink hover:text-amber-500 hover:border-amber-500 transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Colonne droite : Grand vinyle jazz interactif */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative transform lg:translate-x-6">
            <VinylRecord />
          </div>
        </div>
      </div>

      {/* Indicateur de défilement vers le bas */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-display text-xs tracking-widest text-caramel-400 uppercase">
          {t('hero.scrollHint')}
        </span>
        <button
          type="button"
          onClick={() => scrollTo('competences')}
          aria-label={t('hero.scrollHint')}
          className="text-amber-500 animate-bounce cursor-pointer p-1"
        >
          <ArrowDown size={16} />
        </button>
      </div>
    </section>
  );
}
