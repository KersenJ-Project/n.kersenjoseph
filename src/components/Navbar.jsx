import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('navbar.home') },
    { to: '/about', label: t('navbar.about') },
    { to: '/contact', label: t('navbar.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-sm">
            <Scale className="h-5 w-5 text-sky-300" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Cabinet d&apos;avocat
            </span>
            <span className="font-heading text-sm sm:text-base font-semibold text-slate-50">
              Maître SAINT-HILAIRE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-1 py-1 transition-colors duration-200 hover:text-sky-300"
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-sky-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Basculer le menu de navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden border-t border-slate-800 bg-slate-950/98 backdrop-blur"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            <div className="px-4 pb-4 pt-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'bg-sky-500/10 text-sky-200'
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <LanguageSwitcher isMobile />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}