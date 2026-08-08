const fs = require('fs');
const puppeteer = require('puppeteer');
const axeCore = require('axe-core');

async function runAudit(url = 'http://localhost:3000') {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  // inject axe
  await page.addScriptTag({ content: axeCore.source });

  // run axe
  const results = await page.evaluate(async () => {
    return await axe.run(document, {
      runOnly: {
        type: 'tag',
        values: ['wcag2aa', 'wcag21aa', 'wcag2a', 'wcag2aa']
      }
    });
  });

  await browser.close();

  const out = JSON.stringify(results, null, 2);
  fs.writeFileSync('tools/axe-results.json', out);
  console.log('Axe results written to tools/axe-results.json');
  return results;
}

if (require.main === module) {
  const url = process.argv[2] || 'http://localhost:3000';
  runAudit(url)
    .then((r) => {
      console.log('Violations:', r.violations.length);
      if (r.violations && r.violations.length > 0) {
        console.error('Accessibility violations found. Failing audit.');
        process.exit(1);
      }
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(2);
    });
}
