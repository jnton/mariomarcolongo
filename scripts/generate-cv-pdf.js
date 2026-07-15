#!/usr/bin/env node
/**
 * GENERAL CURRICULUM VITAE PDF GENERATOR (`/cv.html`)
 *
 * Uses a local HTTP server to serve `dist/cv.html`, ensuring 100% exact online styling,
 * injects local-only contact/phone data (`process.env.CV_PHONE` or `window.MARIO_PRIVATE`),
 * switches to crisp light contrast for print, and outputs `Mario Marcolongo — Curriculum Vitae.pdf` locally.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const puppeteer = require('puppeteer');

async function generateCvPdf() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const cvHtmlPath = path.join(distDir, 'cv.html');

  if (!fs.existsSync(cvHtmlPath)) {
    console.error('Error: dist/cv.html not found. Please run `npm run build` first.');
    process.exit(1);
  }

  const server = http.createServer((req, res) => {
    let filePath = path.join(distDir, req.url === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
    if (!fs.existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html; charset=utf-8',
      '.css': 'text/css; charset=utf-8',
      '.js': 'application/javascript; charset=utf-8',
      '.json': 'application/json; charset=utf-8',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.woff2': 'font/woff2'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });

  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const targetUrl = `http://127.0.0.1:${port}/cv.html`;
  console.log(`Local static server listening at http://127.0.0.1:${port}/`);

  const chromePaths = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium'
  ];
  let executablePath = chromePaths.find(p => fs.existsSync(p));

  console.log(`Launching headless Chromium (${executablePath || 'bundled puppeteer'})...`);
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: executablePath || undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium']
  });

  try {
    const page = await browser.newPage();
    console.log(`Navigating to ${targetUrl}...`);
    await page.goto(targetUrl, { waitUntil: ['load', 'networkidle0'], timeout: 30000 });

    const localPhoneEnv = process.env.CV_PHONE || '';

    // Switch theme to light and inject local-only contact/phone data
    await page.evaluate((envPhone) => {
      document.documentElement.setAttribute('data-theme', 'light');
      
      const phoneSlot = document.getElementById('cvPhoneSlot');
      const priv = window.MARIO_PRIVATE || {};
      const phoneStr = envPhone || priv.phone || '';
      
      if (phoneSlot && phoneStr) {
        phoneSlot.innerHTML = `· <a href="tel:${phoneStr.replace(/\s/g, '')}" style="color:inherit; text-decoration:none;">${phoneStr}</a>`;
        phoneSlot.classList.add('has-phone');
      }

      const emailSlots = document.querySelectorAll('.cv-email-slot, [data-email]');
      emailSlots.forEach(el => {
        el.innerHTML = '<a href="mailto:me@mariomarcolongo.com" style="color:inherit; text-decoration:none;">me@mariomarcolongo.com</a>';
      });
    }, localPhoneEnv);

    await page.addStyleTag({
      content: `
        @page {
          margin: 0 !important;
          @bottom-left { content: none !important; }
          @bottom-center { content: none !important; }
          @bottom-right { content: none !important; }
          @top-left { content: none !important; }
          @top-center { content: none !important; }
          @top-right { content: none !important; }
        }
      `
    });

    const targetPdf = 'Mario Marcolongo — Curriculum Vitae.pdf';
    const footerTemplate = `
      <div style="width: calc(100% - 36mm); margin: 0 auto; font-size: 8.5px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #64748b; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; -webkit-print-color-adjust: exact;">
        <span>Mario Marcolongo · Curriculum Vitae</span>
        <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
      </div>
    `;

    // Save only locally to root (ignored by .gitignore, not committed to public/ or dist/)
    const outPath = path.resolve(process.cwd(), targetPdf);
    await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '15mm',
        bottom: '24mm',
        left: '18mm',
        right: '18mm'
      },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: footerTemplate,
      path: outPath
    });
    console.log(`✓ Saved general CV PDF (${fs.statSync(outPath).size} bytes) locally to:\n  ${outPath}`);
  } finally {
    await browser.close();
    server.close();
  }
  console.log(`✓ General CV PDF generation complete.`);
}

generateCvPdf().catch(err => {
  console.error('Fatal error in General CV PDF generation:', err);
  process.exit(1);
});
