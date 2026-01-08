import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('\n🧪 Testing Catch-All Route...\n');

  // Test various unknown URLs
  const testUrls = [
    'http://localhost:5173/random-page',
    'http://localhost:5173/doesnt-exist',
    'http://localhost:5173/old-page',
    'http://localhost:5173/test/nested/path'
  ];

  for (const url of testUrls) {
    console.log(`Testing: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);

    const finalUrl = page.url();
    const redirected = finalUrl.includes('/skin-lesion-removal');

    console.log(`  → Redirected to: ${finalUrl}`);
    console.log(`  → Result: ${redirected ? '✅ PASS' : '❌ FAIL'}\n`);
  }

  // Test known routes still work
  console.log('Testing known routes...\n');

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log(`/ → ${page.url()} ${page.url().includes('/skin-lesion-removal') ? '✅' : '❌'}`);

  await page.goto('http://localhost:5173/skin-lesion-removal', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log(`/skin-lesion-removal → ${page.url()} ${page.url().includes('/skin-lesion-removal') ? '✅' : '❌'}`);

  await page.goto('http://localhost:5173/plasma-fibroblast', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  console.log(`/plasma-fibroblast → ${page.url()} ${page.url().includes('/plasma-fibroblast') ? '✅' : '❌'}`);

  console.log('\n✅ All routing tests complete!\n');

  await browser.close();
})();
