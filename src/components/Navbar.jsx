import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react"
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
    <nav className="bg-sky-800 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold hidden sm:inline-block">
            Maître SAINT-HILAIRE
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-1 py-1 font-semibold transition-colors duration-200 hover:text-blue-300"
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-sky-600 rounded"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-sky-800 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 text-base hover:text-blue-300 transition-colors duration-200 font-semibold ${
                    location.pathname === link.to ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3">
                <LanguageSwitcher isMobile />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}