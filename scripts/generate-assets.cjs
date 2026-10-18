const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generate() {
  const publicDir = path.join(__dirname, '..', 'public');

  // 1. OG Image SVG (1200 x 630)
  const ogSvg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Fond espresso sombre -->
    <rect width="1200" height="630" fill="#2B1916" />
    
    <!-- Lueur chaude et halo de lampe -->
    <circle cx="200" cy="150" r="450" fill="#E8892E" opacity="0.12" />
    <circle cx="1000" cy="350" r="400" fill="#800020" opacity="0.18" />

    <!-- Trame de points jazz -->
    <g fill="#D3A376" opacity="0.15">
      ${Array.from({ length: 12 })
        .map((_, i) =>
          Array.from({ length: 6 })
            .map(
              (_, j) =>
                `<circle cx="${60 + i * 35}" cy="${400 + j * 35}" r="3" />`
            )
            .join('')
        )
        .join('')}
    </g>

    <!-- Éléments textuels gauche -->
    <g transform="translate(80, 110)">
      <!-- Badge vinyle -->
      <rect x="0" y="0" width="280" height="36" rx="18" fill="#3E2522" stroke="#D3A376" stroke-opacity="0.4" />
      <circle cx="20" cy="18" r="5" fill="#E8892E" />
      <text x="36" y="23" font-family="'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" fill="#D3A376" letter-spacing="2">PORTFOLIO · REPENTIGNY, QC</text>

      <!-- Titre principal -->
      <text x="0" y="115" font-family="Georgia, serif" font-size="64" font-weight="800" fill="#FFF2DF" letter-spacing="-1">
        Nyle Kersen Joseph
      </text>

      <!-- Sous-titre -->
      <text x="0" y="175" font-family="Georgia, serif" font-size="34" font-style="italic" font-weight="600" fill="#E8892E">
        Développeur Full Stack
      </text>

      <!-- Intro / stack -->
      <text x="0" y="240" font-family="'Segoe UI', Roboto, sans-serif" font-size="20" fill="#D3A376" opacity="0.9">
        React · Node.js · TypeScript · SQL · Python · Tailwind CSS
      </text>

      <!-- Inscription jazz bas -->
      <text x="0" y="380" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="#8C6E63" letter-spacing="3">
        STEREO HIGH FIDELITY · 33⅓ RPM · 2026
      </text>
    </g>

    <!-- Disque vinyle géant à droite -->
    <g transform="translate(920, 315)">
      <!-- Disque extérieur -->
      <circle cx="0" cy="0" r="280" fill="#140A08" stroke="#D3A376" stroke-opacity="0.2" stroke-width="3" />
      
      <!-- Sillons concentriques -->
      <circle cx="0" cy="0" r="255" stroke="#251410" stroke-width="4" fill="none" />
      <circle cx="0" cy="0" r="235" stroke="#1C0E0B" stroke-width="5" fill="none" />
      <circle cx="0" cy="0" r="210" stroke="#251410" stroke-width="4" fill="none" />
      <circle cx="0" cy="0" r="185" stroke="#1C0E0B" stroke-width="5" fill="none" />
      <circle cx="0" cy="0" r="160" stroke="#251410" stroke-width="4" fill="none" />
      <circle cx="0" cy="0" r="135" stroke="#1C0E0B" stroke-width="5" fill="none" />

      <!-- Reflet de lumière conique -->
      <path d="M-198 -198 L0 0 L-100 -262 A280 280 0 0 0 -198 -198 Z" fill="#FFF2DF" opacity="0.06" />
      <path d="M198 198 L0 0 L100 262 A280 280 0 0 0 198 198 Z" fill="#FFF2DF" opacity="0.06" />

      <!-- Macaron central bordeaux Oxblood -->
      <circle cx="0" cy="0" r="95" fill="#800020" stroke="#D3A376" stroke-width="2" />
      <circle cx="0" cy="0" r="80" stroke="#D3A376" stroke-opacity="0.4" stroke-width="1" fill="none" />

      <!-- Monogramme NJ -->
      <g fill="#FFF2DF" transform="translate(-25, -28) scale(0.55)">
        <path d="M12 78L32 22H46L26 78H12Z" />
        <path d="M42 22L70 78H54L30 30L42 22Z" />
        <path d="M68 22H86L70 66C66 74 58 78 50 78H44L48 66H50C54 66 58 64 60 60L68 22Z" />
      </g>

      <text x="0" y="38" text-anchor="middle" font-family="'Segoe UI', sans-serif" font-size="11" font-weight="700" fill="#D3A376" letter-spacing="2">
        FULL STACK · 2027
      </text>

      <!-- Trou central (Spindle) -->
      <circle cx="0" cy="0" r="12" fill="#2B1916" stroke="#D3A376" stroke-width="2" />
    </g>

    <!-- Bras de lecture au-dessus -->
    <g transform="translate(980, 60)">
      <circle cx="60" cy="20" r="22" fill="#3E2522" stroke="#D3A376" stroke-width="3" />
      <circle cx="60" cy="20" r="10" fill="#8C6E63" />
      <path d="M60 20 L20 110 L-60 210 L-95 240" stroke="#D3A376" stroke-width="5" stroke-linecap="round" fill="none" />
      <rect x="-115" y="235" width="28" height="15" rx="3" fill="#2B1916" stroke="#E8892E" stroke-width="2" transform="rotate(-30, -115, 235)" />
    </g>
  </svg>
  `;

  // 2. Favicon SVG source (100x100)
  const iconSvg = `
  <svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="22" fill="#2B1916" />
    <circle cx="50" cy="50" r="46" stroke="#E8892E" stroke-width="2.5" opacity="0.6" />
    <circle cx="50" cy="50" r="38" stroke="#800020" stroke-width="2" opacity="0.7" />
    <g fill="#FFF2DF">
      <path d="M18 74L36 26H48L30 74H18Z" />
      <path d="M44 26L68 74H54L34 33L44 26Z" />
      <path d="M66 26H82L68 64C65 71 58 74 51 74H46L49 64H51C54 64 58 62 60 59L66 26Z" />
      <path d="M72 26L80 26L77 34L69 34L72 26Z" opacity="0.9" />
    </g>
  </svg>
  `;

  console.log('Generating OG Image...');
  await sharp(Buffer.from(ogSvg))
    .png({ quality: 95 })
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('Generating PWA and Favicon icons...');
  await sharp(Buffer.from(iconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  await sharp(Buffer.from(iconSvg))
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  await sharp(Buffer.from(iconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  await sharp(Buffer.from(iconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('All icons and og-image generated successfully in public/ !');
}

generate().catch(console.error);
