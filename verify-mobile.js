import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 } // iPhone SE size
  });
  const page = await context.newPage();

  console.log('🔍 Navigating to localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  console.log('📱 Taking mobile screenshot...');
  await page.screenshot({ path: 'mobile-verification.png', fullPage: true });

  console.log('✅ Checking hero background image positioning...');
  const heroImg = page.locator('section').first().locator('img').first();
  const heroObjectPosition = await heroImg.evaluate(el => window.getComputedStyle(el).objectPosition);
  console.log('   Hero image object-position:', heroObjectPosition);

  console.log('✅ Checking CTA background image positioning...');
  const ctaImg = page.locator('section#cta img').first();
  const ctaObjectPosition = await ctaImg.evaluate(el => window.getComputedStyle(el).objectPosition);
  console.log('   CTA image object-position:', ctaObjectPosition);

  console.log('✅ Checking gallery image spacing...');
  const galleryGrid = page.locator('section#results').locator('div.grid').first();
  const gridGap = await galleryGrid.evaluate(el => window.getComputedStyle(el).gap);
  const gridRowGap = await galleryGrid.evaluate(el => window.getComputedStyle(el).rowGap);
  const gridColumnGap = await galleryGrid.evaluate(el => window.getComputedStyle(el).columnGap);
  console.log('   Gallery gap:', gridGap);
  console.log('   Gallery row gap (vertical):', gridRowGap, '(should be 4px or less)');
  console.log('   Gallery column gap (horizontal):', gridColumnGap);

  console.log('✅ Checking gallery image border radius...');
  const firstGalleryImage = page.locator('section#results').locator('div.grid > div').first();
  const borderRadius = await firstGalleryImage.evaluate(el => window.getComputedStyle(el).borderRadius);
  console.log('   Gallery image border-radius:', borderRadius, '(should be rounded)');

  console.log('✅ Checking Meet Rhia section text alignment...');
  const meetRhiaSection = page.locator('section').filter({ hasText: 'Meet Rhia' });
  const meetRhiaContent = meetRhiaSection.locator('div.max-w-xl').first();
  const textAlign = await meetRhiaContent.evaluate(el => window.getComputedStyle(el).textAlign);
  console.log('   Meet Rhia text-align:', textAlign);

  console.log('✅ Checking for dropdown arrows in headings...');
  const chevronCount = await page.locator('h2 svg').count();
  console.log('   Chevron icons in h2 headings:', chevronCount);

  console.log('✅ Checking trust badges visibility on mobile...');
  const trustBadges = page.locator('section#cta').locator('div.hidden.sm\\:flex').first();
  const isVisible = await trustBadges.isVisible();
  console.log('   Trust badges visible on mobile:', isVisible, '(should be false)');

  console.log('✅ Checking heading text consistency...');
  const howItWorksHeading = page.locator('section#how-it-works h2');
  const howItWorksFontWeight = await howItWorksHeading.evaluate(el => window.getComputedStyle(el).fontWeight);
  console.log('   How It Works heading font-weight:', howItWorksFontWeight);

  const testimonialsHeading = page.locator('section').filter({ hasText: 'What Our Customers Say' }).locator('h2');
  const testimonialsFontWeight = await testimonialsHeading.evaluate(el => window.getComputedStyle(el).fontWeight);
  console.log('   Testimonials heading font-weight:', testimonialsFontWeight);

  console.log('\n✅ Verification complete! Screenshot saved as mobile-verification.png');

  await browser.close();
})();
