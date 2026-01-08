import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('\n🧪 Testing Site Pages...\n');

  // Test 1: Homepage redirects to skin-lesion-removal
  console.log('✓ Test 1: Homepage redirect');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const url1 = page.url();
  console.log('  Current URL:', url1);
  console.log('  Expected: /skin-lesion-removal');
  console.log('  Result:', url1.includes('/skin-lesion-removal') ? '✅ PASS' : '❌ FAIL');

  // Screenshot skin lesion removal page
  console.log('\n✓ Test 2: Skin Lesion Removal Page');
  await page.goto('http://localhost:5173/skin-lesion-removal', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Full page screenshot
  await page.screenshot({
    path: 'skin-lesion-removal-full.png',
    fullPage: true
  });
  console.log('  Full page screenshot: skin-lesion-removal-full.png ✅');

  // Hero screenshot
  await page.screenshot({
    path: 'skin-lesion-removal-hero.png',
    clip: { x: 0, y: 0, width: 1920, height: 1000 }
  });
  console.log('  Hero screenshot: skin-lesion-removal-hero.png ✅');

  // Mobile screenshot
  await page.setViewportSize({ width: 375, height: 667 });
  await page.screenshot({
    path: 'skin-lesion-removal-mobile.png',
    fullPage: true
  });
  console.log('  Mobile screenshot: skin-lesion-removal-mobile.png ✅');

  // Reset viewport
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Test 3: Plasma Fibroblast Page
  console.log('\n✓ Test 3: Plasma Fibroblast Page');
  await page.goto('http://localhost:5173/plasma-fibroblast', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const url3 = page.url();
  console.log('  Current URL:', url3);
  console.log('  Result:', url3.includes('/plasma-fibroblast') ? '✅ PASS' : '❌ FAIL');

  // Screenshot plasma page
  await page.screenshot({
    path: 'plasma-fibroblast-hero.png',
    clip: { x: 0, y: 0, width: 1920, height: 1000 }
  });
  console.log('  Hero screenshot: plasma-fibroblast-hero.png ✅');

  // Test 4: Check key elements on skin lesion page
  console.log('\n✓ Test 4: Page Elements Check');
  await page.goto('http://localhost:5173/skin-lesion-removal', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  const hasH1 = await page.locator('h1').count() > 0;
  console.log('  H1 present:', hasH1 ? '✅' : '❌');

  const hasCTA = await page.locator('text=£49').count() > 0;
  console.log('  £49 offer visible:', hasCTA ? '✅' : '❌');

  const hasBeforeAfter = await page.locator('text=BEFORE').count() > 0;
  console.log('  Before/After section:', hasBeforeAfter ? '✅' : '❌');

  const hasFAQ = await page.locator('text=Questions?').count() > 0;
  console.log('  FAQ section:', hasFAQ ? '✅' : '❌');

  // Test 5: Navigation test
  console.log('\n✓ Test 5: Footer Navigation');
  const plasmaLink = page.locator('a[href="/plasma-fibroblast"]').first();
  if (await plasmaLink.count() > 0) {
    await plasmaLink.click();
    await page.waitForTimeout(1000);
    const currentUrl = page.url();
    console.log('  Clicked Plasma Fibroblast link');
    console.log('  Navigated to:', currentUrl);
    console.log('  Result:', currentUrl.includes('/plasma-fibroblast') ? '✅ PASS' : '❌ FAIL');
  }

  await browser.close();

  console.log('\n✅ All tests complete!\n');
  console.log('📸 Screenshots saved:');
  console.log('  - skin-lesion-removal-full.png');
  console.log('  - skin-lesion-removal-hero.png');
  console.log('  - skin-lesion-removal-mobile.png');
  console.log('  - plasma-fibroblast-hero.png\n');
})();
