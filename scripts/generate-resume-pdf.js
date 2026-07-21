#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const DOCUMENTS = [
  {
    route: 'cv-resume.html',
    output: 'Mario Marcolongo — AI Safety Evaluation CV.pdf',
    label: 'AI Safety Evaluation CV'
  },
  {
    route: 'cv-research.html',
    output: 'Mario Marcolongo — Research Verification & Data Quality CV.pdf',
    label: 'Research Verification & Data Quality CV'
  }
];

async function generateResumePdfs() {
  const distDir = path.resolve(process.cwd(), 'dist');
  for (const document of DOCUMENTS) {
    const htmlPath = path.join(distDir, document.route);
    if (!fs.existsSync(htmlPath)) throw new Error(`dist/${document.route} not found. Run npm run build first.`);
  }

  const staticServer = await startStaticServer(distDir);
  const browser = await launchBrowser();

  try {
    for (const document of DOCUMENTS) {
      const page = await browser.newPage();
      await page.emulateMediaType('print');
      await page.goto(`${staticServer.origin}/${document.route}`, { waitUntil: 'networkidle0', timeout: 45000 });
      await page.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'light');
      });

      const outPath = path.resolve(process.cwd(), document.output);
      await page.pdf({
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        margin: { top: '0', bottom: '0', left: '0', right: '0' },
        path: outPath
      });

      const pdf = await PDFDocument.load(fs.readFileSync(outPath));
      const pageCount = pdf.getPageCount();
      console.log(`${document.label} PDF page count: ${pageCount}`);
      console.log(`${document.label} PDF path: ${outPath}`);
      if (pageCount !== 2) throw new Error(`${document.label} must be exactly 2 pages; generated ${pageCount}.`);
      await page.close();
    }
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

generateResumePdfs().catch((error) => {
  console.error(`Application CV PDF generation failed: ${error.stack || error.message}`);
  process.exit(1);
});
