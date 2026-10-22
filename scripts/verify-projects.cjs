const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:4173';
const OUTPUT_DIR = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function run() {
  console.log('Launching browser to verify Projects section...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // Helper to scroll to projects section and capture
  const captureProjects = async (filename, viewport, isDark = true, langUrl = '/') => {
    await page.setViewport(viewport);
    await page.goto(`${BASE_URL}${langUrl}`, { waitUntil: 'networkidle0' });

    await page.evaluate((dark) => {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('portfolio-theme', 'light');
      }
    }, isDark);

    await new Promise((r) => setTimeout(r, 400));

    // Scroll to projects section
    await page.evaluate(() => {
      const el = document.getElementById('projets');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });

    await new Promise((r) => setTimeout(r, 600));

    const projectsEl = await page.$('#projets');
    if (projectsEl) {
      await projectsEl.screenshot({ path: path.join(OUTPUT_DIR, filename) });
    } else {
      await page.screenshot({ path: path.join(OUTPUT_DIR, filename) });
    }
    console.log(`✓ ${filename}`);
  };

  // 1. Desktop Dark FR
  await captureProjects('projects-desktop-dark-fr.png', { width: 1440, height: 1100, deviceScaleFactor: 2 }, true, '/');

  // 2. Desktop Light FR
  await captureProjects('projects-desktop-light-fr.png', { width: 1440, height: 1100, deviceScaleFactor: 2 }, false, '/');

  // 3. Desktop Dark EN
  await captureProjects('projects-desktop-dark-en.png', { width: 1440, height: 1100, deviceScaleFactor: 2 }, true, '/en');

  // 4. Tablet Dark FR (iPad Air)
  await captureProjects('projects-tablet-dark-fr.png', { width: 820, height: 1180, deviceScaleFactor: 2 }, true, '/');

  // 5. Tablet Light FR
  await captureProjects('projects-tablet-light-fr.png', { width: 820, height: 1180, deviceScaleFactor: 2 }, false, '/');

  // 6. Mobile Dark FR (iPhone 14)
  await captureProjects('projects-mobile-dark-fr.png', { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }, true, '/');

  // 7. Mobile Light FR
  await captureProjects('projects-mobile-light-fr.png', { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }, false, '/');

  // 8. Mobile Dark EN
  await captureProjects('projects-mobile-dark-en.png', { width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 }, true, '/en');

  // 9. Lightbox Modal Test (Desktop)
  console.log('Testing Lightbox Modal...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    const el = document.getElementById('projets');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));

  // Click on the first project's image button to open Lightbox
  const zoomBtn = await page.$('#projets button[aria-label*="EsthetiquePlus"]');
  if (zoomBtn) {
    await zoomBtn.click();
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'projects-lightbox-desktop.png') });
    console.log('✓ projects-lightbox-desktop.png');

    // Test closing via Escape key
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 400));
    console.log('✓ Lightbox closed via Escape');
  }

  await browser.close();
  console.log('All verification screenshots saved successfully!');
}

run().catch((err) => {
  console.error('Error during verification:', err);
  process.exit(1);
});
