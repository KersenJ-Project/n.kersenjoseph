const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const screenshotsDir = path.resolve(__dirname, '../src/assets/screenshots');

const images = [
  { file: 'esthetique-websiteImg.png', base: 'esthetique' },
  { file: 'andconstruction-websiteImg.png', base: 'andconstruction' },
  { file: 'timeWork-websiteImg.png', base: 'timework' },
];

async function generate() {
  console.log('Generating optimized WebP and AVIF project images...');

  for (const item of images) {
    const inputPath = path.join(screenshotsDir, item.file);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    const meta = await sharp(inputPath).metadata();
    console.log(`Processing ${item.file} (${meta.width}x${meta.height})...`);

    // Target widths: 800 and 1200 (capped or scaled nicely)
    const sizes = [
      { width: 800, suffix: '-800' },
      { width: 1200, suffix: '-1200' },
    ];

    for (const size of sizes) {
      const avifOut = path.join(screenshotsDir, `${item.base}${size.suffix}.avif`);
      const webpOut = path.join(screenshotsDir, `${item.base}${size.suffix}.webp`);

      await sharp(inputPath)
        .resize({ width: size.width, withoutEnlargement: false })
        .avif({ quality: 80, effort: 4 })
        .toFile(avifOut);

      await sharp(inputPath)
        .resize({ width: size.width, withoutEnlargement: false })
        .webp({ quality: 85, effort: 4 })
        .toFile(webpOut);

      console.log(`  ✓ ${item.base}${size.suffix}.avif & .webp`);
    }

    // Default optimized webp
    const defaultWebp = path.join(screenshotsDir, `${item.base}.webp`);
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(defaultWebp);
    console.log(`  ✓ ${item.base}.webp (default)`);
  }

  console.log('Image generation completed successfully!');
}

generate().catch(err => {
  console.error('Error generating project images:', err);
  process.exit(1);
});
