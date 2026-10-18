import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyMotion, domAnimation } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCarousel from './components/TechCarousel';

// Découpage en Lazy Loading des sections sous la ligne de flottaison
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function SectionPlaceholder({ minHeight = '500px' }) {
  return (
    <div
      style={{ minHeight }}
      className="w-full flex items-center justify-center opacity-0"
      aria-hidden="true"
    />
  );
}

export default function App() {
  const { t } = useTranslation();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-hidden bg-page text-ink selection:bg-amber-500 selection:text-espresso-950">
        {/* Lien d'évitement accessible pour lecteur d'écran et clavier */}
        <a
          href="#accueil"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:rounded-full focus:bg-amber-500 focus:text-espresso-950 focus:font-bold focus:shadow-xl focus:outline-none"
        >
          {t('nav.skipToContent')}
        </a>

        {/* Barre de navigation principale */}
        <Navbar />

        <main id="main-content">
          <Hero />
          <TechCarousel />

          <Suspense fallback={<SectionPlaceholder minHeight="600px" />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder minHeight="700px" />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder minHeight="600px" />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionPlaceholder minHeight="500px" />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<SectionPlaceholder minHeight="150px" />}>
          <Footer />
        </Suspense>
      </div>
    </LazyMotion>
  );
}
