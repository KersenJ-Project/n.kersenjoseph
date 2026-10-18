import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr.json' with { type: 'json' };
import en from './locales/en.json' with { type: 'json' };

const detectFromUrl = () => {
  if (typeof window === 'undefined') return null;
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith('/en')) return 'en';
  return null;
};

const initialLang = detectFromUrl() || (typeof window !== 'undefined' ? localStorage.getItem('portfolio-language') : null) || 'fr';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: initialLang,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupLocalStorage: 'portfolio-language',
      caches: ['localStorage'],
    },
  });

export function changeLanguage(newLang) {
  const target = newLang === 'en' ? 'en' : 'fr';
  i18n.changeLanguage(target);
  localStorage.setItem('portfolio-language', target);
  
  if (typeof window !== 'undefined') {
    document.documentElement.lang = target;
    const isEn = target === 'en';
    const currentPath = window.location.pathname;
    
    // Synchroniser l'URL sans rechargement de page
    if (isEn && !currentPath.startsWith('/en')) {
      const newUrl = '/en' + (window.location.hash || '');
      window.history.pushState({ lang: 'en' }, '', newUrl);
    } else if (!isEn && currentPath.startsWith('/en')) {
      const newUrl = '/' + (window.location.hash || '');
      window.history.pushState({ lang: 'fr' }, '', newUrl);
    }

    // Mise à jour du titre et de la description SEO
    document.title = i18n.t('seo.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', i18n.t('seo.description'));
    }
  }
}

export default i18n;
