/**
 * Configuration globale du site et métadonnées SEO.
 * Modifiez SITE_URL pour refléter votre domaine de production final (ex: https://nylekersenjoseph.dev).
 */
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://nylekersenjoseph.vercel.app';

export const siteConfig = {
  author: 'Nyle Kersen Joseph',
  handle: '@nylekersenjoseph',
  email: 'nylekersenjoseph@gmail.com',
  city: 'Repentigny',
  region: 'Québec',
  country: 'Canada',
  postalCode: 'J5Z',
  school: 'Cégep Marie-Victorin',
  siteUrl: SITE_URL,
};
