const path = require('path');
const puppeteer = require('puppeteer-core');

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const BASE_URL = 'http://localhost:4173';
const OUTPUT_DIR = path.join(__dirname, '..', 'screenshots');

async function run() {
  console.log('Launching Edge for screenshots...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // 1. Desktop - Sombre - FR
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.waitForSelector('#accueil');
  await new Promise((r) => setTimeout(r, 600)); // Laisser l'animation du bras de lecture se poser
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'desktop-dark-fr.png') });
  console.log('✓ desktop-dark-fr.png');

  // 2. Desktop - Clair - FR
  await page.evaluate(() => {
    // Activer le mode clair
    document.documentElement.classList.remove('dark');
    localStorage.setItem('portfolio-theme', 'light');
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'desktop-light-fr.png') });
  console.log('✓ desktop-light-fr.png');

  // 3. Desktop - Sombre - EN
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  });
  await page.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'desktop-dark-en.png') });
  console.log('✓ desktop-dark-en.png');

  // 4. Mobile - Sombre - FR
  await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'mobile-dark-fr.png') });
  console.log('✓ mobile-dark-fr.png');

  // 5. Mobile - Clair - FR
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('portfolio-theme', 'light');
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'mobile-light-fr.png') });
  console.log('✓ mobile-light-fr.png');

  // 6. Mobile - Sombre - EN
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('portfolio-theme', 'dark');
  });
  await page.goto(`${BASE_URL}/en`, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'mobile-dark-en.png') });
  console.log('✓ mobile-dark-en.png');

  await browser.close();
  console.log('All screenshots captured successfully in screenshots/ !');
}

run().catch((err) => {
  console.error('Error during capture:', err);
  process.exit(1);
});
