import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('🔍 Navigating to https://rhisaesthetic.co.uk/...');
  await page.goto('https://rhisaesthetic.co.uk/', { waitUntil: 'networkidle' });

  // Find all gallery/testimonial images
  console.log('\n📸 Analyzing gallery images...');
  const galleryImages = await page.locator('section#results img').all();

  console.log(`Found ${galleryImages.length} gallery images`);

  for (let i = 0; i < galleryImages.length; i++) {
    const img = galleryImages[i];
    const src = await img.getAttribute('src');
    const alt = await img.getAttribute('alt');
    console.log(`\nImage ${i + 1}:`);
    console.log(`  Alt: ${alt}`);
    console.log(`  Src: ${src}`);
  }

  // Take screenshot of gallery section
  await page.locator('section#results').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'gallery-analysis.png', fullPage: false });

  console.log('\n✅ Screenshot saved as gallery-analysis.png');

  await browser.close();
})();
