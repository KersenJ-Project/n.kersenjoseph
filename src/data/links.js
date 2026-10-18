import { SITE_URL } from './site';

export const profile = {
  name: 'Nyle Kersen Joseph',
  firstName: 'Nyle',
  initials: 'NJ',
  title: 'Développeur Full Stack',
  email: 'nylekersenjoseph@gmail.com',
  location: 'Repentigny (Québec)',
  postalCode: 'J5Z',
  school: 'Cégep Marie-Victorin',
  siteUrl: SITE_URL,
};

export const socialLinks = {
  github: 'https://github.com/VOTRE-UTILISATEUR',
  linkedin: 'https://www.linkedin.com/in/VOTRE-PROFIL',
};

export const navItems = [
  { id: 'accueil', key: 'nav.home' },
  { id: 'competences', key: 'nav.skills' },
  { id: 'projets', key: 'nav.projects' },
  { id: 'parcours', key: 'nav.experience' },
  { id: 'contact', key: 'nav.contact' },
];

export const onlineCourses = [
  {
    platform: 'Udemy',
    subject: 'SQL',
    tech: 'SQL',
    badgeKey: 'skills.learningBadge',
  },
  {
    platform: 'Code With Mosh',
    subject: 'Python',
    tech: 'Python',
    badgeKey: 'skills.learningBadge',
  },
];
