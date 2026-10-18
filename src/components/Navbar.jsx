import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, m, useScroll, useSpring } from 'motion/react';
import { Menu, Moon, Sun, X, Languages } from 'lucide-react';
import { navItems, profile } from '../data/links';
import useTheme from '../hooks/useTheme';
import { changeLanguage } from '../i18n';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('accueil');
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });

  // Observer d'intersection pour l'indicateur de section active
  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLangToggle = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en';
    changeLanguage(nextLang);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="border-b border-mocha-500/25 bg-espresso-950/85 dark:bg-espresso-950/85 light:bg-cream-100/90 backdrop-blur-md transition-colors"
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 sm:px-6 py-3.5">
          {/* Wordmark : Nyle Kersen Joseph avec point amber */}
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('accueil');
            }}
            className="flex items-center rounded-lg px-1 py-1 font-serif text-sm sm:text-base md:text-lg font-semibold tracking-tight text-ink hover:text-amber-500 transition-colors whitespace-nowrap select-none"
          >
            <span>{profile.name}</span>
            <span className="text-amber-500 font-bold ml-0.5">.</span>
          </a>

          {/* Liens de navigation Desktop */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.id);
                  }}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-amber-500 font-semibold'
                      : 'text-muted hover:text-ink'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {t(item.key)}
                  {isActive && (
                    <m.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-amber-500"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Contrôles à droite : Sélecteur FR/EN & Bouton Thème */}
          <div className="flex items-center gap-2">
            {/* Bouton de langue FR / EN */}
            <button
              type="button"
              onClick={handleLangToggle}
              className="inline-flex items-center gap-1.5 rounded-full border border-mocha-500/30 bg-surface px-3 py-1.5 text-xs font-bold text-ink hover:border-amber-500 hover:text-amber-500 transition-colors cursor-pointer"
              aria-label={t('nav.langToggle')}
            >
              <Languages size={14} className="text-amber-500" aria-hidden="true" />
              <span>{i18n.language === 'en' ? 'EN' : 'FR'}</span>
            </button>

            {/* Bouton de thème sombre/clair */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mocha-500/30 bg-surface text-ink hover:border-amber-500 hover:text-amber-500 transition-colors shadow-xs cursor-pointer"
              aria-label={
                theme === 'dark' ? t('nav.themeToggleLight') : t('nav.themeToggleDark')
              }
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Bouton burger mobile */}
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-mocha-500/30 bg-surface text-ink md:hidden cursor-pointer"
              aria-label={open ? t('nav.menuClose') : t('nav.menuOpen')}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Barre de progression fine du défilement en ambre */}
        <m.div
          className="h-[2px] origin-left bg-gradient-to-r from-amber-500 via-caramel-400 to-oxblood-700"
          style={{ scaleX }}
          aria-hidden="true"
        />
      </nav>

      {/* Menu mobile déroulant */}
      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-b border-mocha-500/30 bg-page/95 px-5 py-5 backdrop-blur-xl md:hidden shadow-xl"
          >
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-amber-500/15 text-amber-500'
                          : 'text-ink hover:bg-surface'
                      }`}
                    >
                      {t(item.key)}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-4 border-t border-mocha-500/20 flex items-center justify-between">
              <span className="text-xs text-muted">Langue & Thème</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleLangToggle}
                  className="px-3 py-1.5 rounded-full border border-mocha-500/30 text-xs font-bold text-ink"
                >
                  {i18n.language === 'en' ? 'English' : 'Français'}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-mocha-500/30 text-ink"
                  aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
