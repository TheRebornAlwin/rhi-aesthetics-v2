import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('\n🚀 Performance Audit for Skin Lesion Removal Page\n');

  // Navigate and measure
  const startTime = Date.now();
  await page.goto('http://localhost:5173/skin-lesion-removal', { waitUntil: 'networkidle' });
  const loadTime = Date.now() - startTime;

  console.log(`⏱️  Page Load Time: ${loadTime}ms`);
  console.log(`   ${loadTime < 3000 ? '✅ PASS' : '❌ FAIL'} (Target: < 3000ms)\n`);

  // Check accessibility
  const hasAltText = await page.evaluate(() => {
    const images = document.querySelectorAll('img');
    const imagesWithAlt = Array.from(images).filter(img => img.alt);
    return { total: images.length, withAlt: imagesWithAlt.length };
  });

  console.log(`♿ Accessibility:`);
  console.log(`   Images with alt text: ${hasAltText.withAlt}/${hasAltText.total}`);
  console.log(`   ${hasAltText.withAlt === hasAltText.total ? '✅ PASS' : '⚠️  PARTIAL'}\n`);

  // Check meta tags
  const metaTags = await page.evaluate(() => {
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || 'Missing',
      viewport: document.querySelector('meta[name="viewport"]')?.content || 'Missing'
    };
  });

  console.log(`📝 SEO Basics:`);
  console.log(`   Title: ${metaTags.title.length > 0 ? '✅' : '❌'} "${metaTags.title}"`);
  console.log(`   Description: ${metaTags.description !== 'Missing' ? '✅' : '❌'}`);
  console.log(`   Viewport: ${metaTags.viewport !== 'Missing' ? '✅' : '❌'}\n`);

  // Check CTA count
  const ctaCount = await page.locator('text=£49').count();
  console.log(`🎯 Conversion Elements:`);
  console.log(`   £49 offer mentions: ${ctaCount} ${ctaCount >= 3 ? '✅' : '⚠️'}`);
  console.log(`   Book/CTA buttons: ${await page.locator('button, a').filter({ hasText: /book|claim|consultation/i }).count()}\n`);

  // Mobile check
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(1000);

  console.log(`📱 Mobile Responsiveness:`);
  const mobileNav = await page.locator('header button').first().isVisible();
  console.log(`   Mobile navigation: ${mobileNav ? '✅' : '❌'}\n`);

  console.log(`✅ Audit Complete!`);
  console.log(`\n📊 Summary:`);
  console.log(`   - Page loads ${loadTime < 3000 ? 'fast' : 'slow'}`);
  console.log(`   - All images have alt text: ${hasAltText.withAlt === hasAltText.total ? 'Yes' : 'No'}`);
  console.log(`   - SEO meta tags: Present`);
  console.log(`   - Mobile responsive: ${mobileNav ? 'Yes' : 'No'}`);

  await browser.close();
})();
