import React from 'react';
import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiVercel,
  SiJira,
  SiTrello,
  SiIntellijidea,
  SiFramer,
  SiUdemy,
} from 'react-icons/si';
import {
  FaJava,
  FaDatabase,
  FaAws,
  FaCodeBranch,
  FaNetworkWired,
  FaLaptopCode,
  FaCss3Alt,
} from 'react-icons/fa';
import { DiMsqlServer, DiVisualstudio, DiScrum } from 'react-icons/di';
import {
  TbBrandReactNative,
  TbBrandCSharp,
  TbApi,
  TbLanguage,
} from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';

/**
 * Répertoire exhaustif des technologies avec leurs icônes officielles et couleurs de marque.
 */
export const techCatalog = {
  HTML: { icon: SiHtml5, color: '#E34F26', label: 'HTML5' },
  HTML5: { icon: SiHtml5, color: '#E34F26', label: 'HTML5' },
  CSS: { icon: FaCss3Alt, color: '#1572B6', label: 'CSS3' },
  CSS3: { icon: FaCss3Alt, color: '#1572B6', label: 'CSS3' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind CSS' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E', label: 'JavaScript' },
  TypeScript: { icon: SiTypescript, color: '#3178C6', label: 'TypeScript' },
  React: { icon: SiReact, color: '#61DAFB', label: 'React' },
  'React Native': { icon: TbBrandReactNative, color: '#61DAFB', label: 'React Native' },
  Expo: { icon: SiExpo, color: '#D3A376', label: 'Expo' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E', label: 'Node.js' },
  Java: { icon: FaJava, color: '#ED8B00', label: 'Java' },
  'Spring Boot': { icon: SiSpringboot, color: '#6DB33F', label: 'Spring Boot' },
  Python: { icon: SiPython, color: '#3776AB', label: 'Python' },
  'C#': { icon: TbBrandCSharp, color: '#9B4993', label: 'C#' },
  SQL: { icon: FaDatabase, color: '#E8892E', label: 'SQL' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169E1', label: 'PostgreSQL' },
  MongoDB: { icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
  SQLite: { icon: SiSqlite, color: '#003B57', label: 'SQLite' },
  'Microsoft SQL Server': { icon: DiMsqlServer, color: '#CC292B', label: 'SQL Server' },
  Docker: { icon: SiDocker, color: '#2496ED', label: 'Docker' },
  Kubernetes: { icon: SiKubernetes, color: '#326CE5', label: 'Kubernetes' },
  AWS: { icon: FaAws, color: '#FF9900', label: 'AWS' },
  'AWS (réseaux, machines virtuelles)': { icon: FaAws, color: '#FF9900', label: 'AWS' },
  GNS3: { icon: FaNetworkWired, color: '#4E88AF', label: 'GNS3' },
  Git: { icon: SiGit, color: '#F05032', label: 'Git' },
  'Git Flow': { icon: FaCodeBranch, color: '#A8470F', label: 'Git Flow' },
  GitHub: { icon: SiGithub, color: '#8C6E63', label: 'GitHub' },
  Vercel: { icon: SiVercel, color: '#E8892E', label: 'Vercel' },
  Jira: { icon: SiJira, color: '#0052CC', label: 'Jira' },
  Trello: { icon: SiTrello, color: '#0079BF', label: 'Trello' },
  'VS Code': { icon: VscCode, color: '#007ACC', label: 'VS Code' },
  'Visual Studio': { icon: DiVisualstudio, color: '#5C2D91', label: 'Visual Studio' },
  IntelliJ: { icon: SiIntellijidea, color: '#FE315D', label: 'IntelliJ' },
  'REST API': { icon: TbApi, color: '#009688', label: 'REST API' },
  'Agile/Scrum': { icon: DiScrum, color: '#2A7A78', label: 'Agile/Scrum' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF', label: 'Motion' },
  Motion: { icon: SiFramer, color: '#0055FF', label: 'Motion' },
  i18n: { icon: TbLanguage, color: '#E8892E', label: 'i18n' },
  Udemy: { icon: SiUdemy, color: '#A435F0', label: 'Udemy' },
  'Code With Mosh': { icon: FaLaptopCode, color: '#D3A376', label: 'Code With Mosh' },
};

/**
 * Pastille technologique carrée aux coins arrondis
 * (fond crème en mode sombre, fond espresso en mode clair).
 */
export function TechIconBadge({ name, size = 16, className = '' }) {
  const item = techCatalog[name] || { icon: FaDatabase, color: '#E8892E', label: name };
  const IconComponent = item.icon;

  return React.createElement(
    'span',
    {
      className: `inline-flex items-center justify-center rounded-md p-1 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-cream-100 text-espresso-950 dark:bg-cream-100 dark:text-espresso-950 light:bg-espresso-900 light:text-cream-100 ${className}`,
      style: {
        width: `${size + 8}px`,
        height: `${size + 8}px`,
      },
      'aria-hidden': 'true',
    },
    React.createElement(IconComponent, {
      size,
      style: { color: item.color },
    })
  );
}

export function getTechInfo(name) {
  return techCatalog[name] || { icon: FaDatabase, color: '#E8892E', label: name };
}
