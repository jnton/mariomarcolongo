#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const svgPath = path.join(publicDir, 'favicon.svg');

const sizes = [
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-192x192.png', size: 192 },
  { name: 'favicon-512x512.png', size: 512 },
  { name: 'favicon.ico', size: 32 }
];

function pngToIco(pngBuffer, width = 32, height = 32) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(1, 4); // Number of images: 1

  const entry = Buffer.alloc(16);
  entry.writeUInt8(width >= 256 ? 0 : width, 0);   // Width
  entry.writeUInt8(height >= 256 ? 0 : height, 1); // Height
  entry.writeUInt8(0, 2);                          // Color palette
  entry.writeUInt8(0, 3);                          // Reserved
  entry.writeUInt16LE(1, 4);                       // Color planes
  entry.writeUInt16LE(32, 6);                      // Bits per pixel
  entry.writeUInt32LE(pngBuffer.length, 8);        // Image data size
  entry.writeUInt32LE(22, 12);                     // Offset (6 + 16)

  return Buffer.concat([header, entry, pngBuffer]);
}

function ensureValidIco(filePath) {
  if (!fs.existsSync(filePath)) return;
  const buffer = fs.readFileSync(filePath);
  // Check if already valid ICO (starts with 00 00 01 00)
  if (buffer.length > 4 && buffer[0] === 0x00 && buffer[1] === 0x00 && buffer[2] === 0x01 && buffer[3] === 0x00) {
    return;
  }
  // Check if PNG (starts with 89 50 4E 47)
  if (buffer.length > 8 && buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47) {
    const icoBuffer = pngToIco(buffer);
    fs.writeFileSync(filePath, icoBuffer);
    console.log(`✓ Converted raw PNG ${path.basename(filePath)} to valid MS Windows icon resource (.ico format)`);
  }
}

async function generateFavicons() {
  console.log('Generating high-resolution favicons from favicon.svg...');
  if (!fs.existsSync(svgPath)) {
    console.error('Error: favicon.svg not found at', svgPath);
    process.exit(1);
  }

  const svgContent = fs.readFileSync(svgPath, 'utf8');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } catch (launchErr) {
    console.warn('⚠️  Skipping live favicon generation: headless browser/shared libraries unavailable in serverless environment.');
    console.warn('   Using existing pre-generated static favicons from /public.');
    
    // Ensure site.webmanifest is generated even if screenshots are skipped
    const manifestPath = path.join(publicDir, 'site.webmanifest');
    const manifest = {
      name: "Mario Marcolongo — Portfolio",
      short_name: "Marcolongo",
      icons: [
        { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
      ],
      theme_color: "#12160F",
      background_color: "#12160F",
      display: "standalone"
    };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('✓ Verified/Generated site.webmanifest');
    ensureValidIco(path.join(publicDir, 'favicon.ico'));
    return;
  }

  try {
    const page = await browser.newPage();

    for (const { name, size } of sizes) {
      await page.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
      await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { margin: 0; padding: 0; width: ${size}px; height: ${size}px; overflow: hidden; background: transparent; }
            svg { width: 100%; height: 100%; display: block; }
          </style>
        </head>
        <body>
          ${svgContent}
        </body>
        </html>
      `, { waitUntil: 'domcontentloaded' });

      const element = await page.$('svg');
      const outputPath = path.join(publicDir, name);
      await element.screenshot({ path: outputPath, omitBackground: true });
      console.log(`✓ Generated ${name} (${size}x${size})`);
    }

    ensureValidIco(path.join(publicDir, 'favicon.ico'));

    // Generate site.webmanifest
    const manifestPath = path.join(publicDir, 'site.webmanifest');
    const manifest = {
      name: "Mario Marcolongo — Portfolio",
      short_name: "Marcolongo",
      icons: [
        { src: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/favicon-512x512.png", sizes: "512x512", type: "image/png" }
      ],
      theme_color: "#12160F",
      background_color: "#12160F",
      display: "standalone"
    };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('✓ Generated site.webmanifest');

  } finally {
    if (browser) await browser.close();
  }
}

generateFavicons().catch(err => {
  console.error('Fatal error generating favicons:', err);
  process.exit(1);
});
