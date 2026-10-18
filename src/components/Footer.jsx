import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { navItems, profile } from '../data/links';

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-mocha-500/30 bg-espresso-950/80 dark:bg-espresso-950/80 light:bg-cream-200/50 py-12 px-4 sm:px-6 lg:px-8 text-center text-sm text-muted relative">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-6">
        {/* Monogramme NJ cliquable pour remonter en haut */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex flex-col items-center gap-2 text-ink hover:text-amber-500 transition-colors cursor-pointer"
          aria-label={t('footer.backToTop')}
        >
          <div className="h-12 w-12 rounded-full border border-mocha-500/30 bg-surface flex items-center justify-center p-2.5 shadow-xs group-hover:border-amber-500 group-hover:scale-105 transition-all">
            <Logo size={28} className="text-ink group-hover:text-amber-500" />
          </div>
          <span className="font-display text-xs tracking-wider text-caramel-400 uppercase flex items-center gap-1">
            <ArrowUp size={12} /> {t('footer.backToTop')}
          </span>
        </button>

        {/* Liens de navigation rapides */}
        <nav aria-label="Liens de pied de page">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 list-none p-0 m-0 text-xs sm:text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-muted hover:text-amber-500 transition-colors"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mentions et ligne ludique jazz */}
        <div className="pt-4 border-t border-mocha-500/20 w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© 2026 {profile.name}. {t('footer.rights')}</p>
          <p className="font-serif italic text-caramel-400">
            {t('footer.pressedIn')}
          </p>
        </div>
      </div>
    </footer>
  );
}
