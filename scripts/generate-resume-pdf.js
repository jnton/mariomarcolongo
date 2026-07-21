#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

async function generateResumePdf() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const htmlPath = path.join(distDir, 'cv-resume.html');
  if (!fs.existsSync(htmlPath)) throw new Error('dist/cv-resume.html not found. Run `npm run build` first.');

  const staticServer = await startStaticServer(distDir);
  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(`${staticServer.origin}/cv-resume.html`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.evaluate((phone) => {
      document.documentElement.setAttribute('data-theme', 'light');
      const phoneSlot = document.getElementById('cvPhoneSlot');
      if (phoneSlot && phone) {
        phoneSlot.innerHTML = `<span>·</span> <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        phoneSlot.classList.add('has-phone');
      }
    }, process.env.CV_PHONE || '');

    const outPath = path.resolve(process.cwd(), 'Mario Marcolongo — 2-Page Application Résumé.pdf');
    await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: '14mm', bottom: '22mm', left: '16mm', right: '16mm' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `<div style="width:calc(100% - 32mm);margin:0 auto;font:8.5px Arial,sans-serif;color:#64748b;display:flex;justify-content:space-between"><span>Mario Marcolongo · 2-Page Application Résumé</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
      path: outPath
    });

    const pdf = await PDFDocument.load(fs.readFileSync(outPath));
    const pageCount = pdf.getPageCount();
    console.log(`Résumé PDF page count: ${pageCount}`);
    console.log(`Résumé PDF path: ${outPath}`);
    if (pageCount !== 2) throw new Error(`Résumé PDF must be exactly 2 pages; generated ${pageCount}.`);
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

generateResumePdf().catch((error) => {
  console.error(`Résumé PDF generation failed: ${error.stack || error.message}`);
  process.exit(1);
});
