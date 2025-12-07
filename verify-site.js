import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('Navigating to localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  console.log('Taking screenshot...');
  await page.screenshot({ path: 'homepage-verification.png', fullPage: true });

  console.log('Checking header nav links color...');
  const navLinks = await page.locator('nav button').first();
  const color = await navLinks.evaluate(el => window.getComputedStyle(el).color);
  console.log('Nav link color:', color);

  console.log('Checking testimonials layout...');
  const testimonialGrid = await page.locator('section').filter({ hasText: 'What Our Customers Say' }).locator('> div > div').last();
  const gridColumns = await testimonialGrid.evaluate(el => window.getComputedStyle(el).gridTemplateColumns);
  console.log('Testimonials grid columns:', gridColumns);

  console.log('Checking gallery section...');
  const galleryExists = await page.locator('section').filter({ hasText: 'Real Results, Real Transformations' }).count();
  console.log('Gallery section exists:', galleryExists > 0);

  console.log('\n✅ Verification complete! Screenshot saved as homepage-verification.png');

  await browser.close();
})();
