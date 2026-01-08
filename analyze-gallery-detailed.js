import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('🔍 Navigating to https://rhisaesthetic.co.uk/...');
  await page.goto('https://rhisaesthetic.co.uk/', { waitUntil: 'networkidle' });

  // Scroll to gallery
  await page.locator('section#results').scrollIntoViewIfNeeded();
  await page.waitForTimeout(2000);

  // Get all gallery images
  const images = await page.locator('section#results .grid > div img').all();

  console.log(`\n📸 Found ${images.length} gallery images\n`);

  // Take individual screenshots of each image for analysis
  for (let i = 0; i < Math.min(images.length, 12); i++) {
    const img = images[i];
    await img.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);

    const box = await img.boundingBox();
    if (box) {
      await page.screenshot({
        path: `gallery-image-${i + 1}.png`,
        clip: {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        }
      });
      console.log(`✅ Saved screenshot of image ${i + 1}`);
    }
  }

  console.log('\n✅ All screenshots saved!');
  await browser.close();
})();
