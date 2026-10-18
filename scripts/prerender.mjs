import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

async function prerender() {
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const appPath = pathToFileURL(path.join(rootDir, 'dist-ssr', 'App.js')).href;
  const i18nPath = pathToFileURL(path.join(rootDir, 'src', 'i18n.js')).href;
  const App = (await import(appPath)).default;
  const i18n = (await import(i18nPath)).default;

  // Détection et préchargement de la police du Hero Fraunces 700 (LCP < 2.5s)
  const assets = fs.readdirSync(path.join(distDir, 'assets'));
  const frauncesBold = assets.find((f) => f.startsWith('fraunces-latin-700-') && f.endsWith('.woff2'));
  const preloadTag = frauncesBold
    ? `<link rel="preload" href="/assets/${frauncesBold}" as="font" type="font/woff2" crossorigin="anonymous" />`
    : '';

  // 1. Prérendu Français (/)
  await i18n.changeLanguage('fr');
  const appHtmlFr = ReactDOMServer.renderToString(React.createElement(App));
  let htmlFr = template
    .replace('<div id="root"></div>', `<div id="root">${appHtmlFr}</div>`)
    .replace('<html lang="fr"', '<html lang="fr"');

  if (preloadTag) {
    htmlFr = htmlFr.replace('</head>', `  ${preloadTag}\n  </head>`);
  }

  fs.writeFileSync(path.join(distDir, 'index.html'), htmlFr, 'utf-8');
  console.log('✓ Prerendered / (fr) -> dist/index.html');

  // 2. Prérendu Anglais (/en)
  await i18n.changeLanguage('en');
  const appHtmlEn = ReactDOMServer.renderToString(React.createElement(App));
  const enDir = path.join(distDir, 'en');
  if (!fs.existsSync(enDir)) {
    fs.mkdirSync(enDir, { recursive: true });
  }

  let htmlEn = template
    .replace('<html lang="fr"', '<html lang="en"')
    .replace(
      '<title>Nyle Kersen Joseph — Développeur Full Stack | Portfolio</title>',
      '<title>Nyle Kersen Joseph — Full Stack Developer | Portfolio</title>'
    )
    .replace(
      '<meta name="description" content="Portfolio de Nyle Kersen Joseph, développeur full stack et finissant en Techniques de l\'informatique au Cégep Marie-Victorin. Projets web multilingues, React, bases de données." />',
      '<meta name="description" content="Portfolio of Nyle Kersen Joseph, Full Stack Developer and Computer Science Technology student at Cégep Marie-Victorin. Multilingual web projects, React, databases." />'
    )
    .replace('<div id="root"></div>', `<div id="root">${appHtmlEn}</div>`);

  if (preloadTag) {
    htmlEn = htmlEn.replace('</head>', `  ${preloadTag}\n  </head>`);
  }

  fs.writeFileSync(path.join(enDir, 'index.html'), htmlEn, 'utf-8');
  console.log('✓ Prerendered /en (en) -> dist/en/index.html');

  // Nettoyage du répertoire temporaire dist-ssr
  const distSsrDir = path.join(rootDir, 'dist-ssr');
  if (fs.existsSync(distSsrDir)) {
    fs.rmSync(distSsrDir, { recursive: true, force: true });
    console.log('✓ Cleaned up dist-ssr');
  }
}

prerender().catch(console.error);
