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
      name: "Mario Marcolongo — AI-Native Systems Builder & Scientific Fact-Checker",
      short_name: "Mario Marcolongo",
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

    // Generate site.webmanifest
    const manifestPath = path.join(publicDir, 'site.webmanifest');
    const manifest = {
      name: "Mario Marcolongo — AI-Native Systems Builder & Scientific Fact-Checker",
      short_name: "Mario Marcolongo",
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
