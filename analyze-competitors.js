import { chromium } from 'playwright';
import fs from 'fs';

const competitors = [
  { name: 'LA-Mole-Removal', url: 'https://moleremovallosangeles.com/' },
  { name: 'London-Skin-Clinic', url: 'https://londonskinclinic.london/laser-lesion-removal/' },
  { name: 'NYC-Wall-Street-Derm', url: 'https://www.wallstreetdermatology.com/mole-removal/' },
  { name: 'MACS-Clinic-London', url: 'https://macsclinic.co.uk/mole-and-skin-lesion-removal/' }
];

(async () => {
  const browser = await chromium.launch();
  const analysisReport = [];

  for (const competitor of competitors) {
    console.log(`\n🔍 Analyzing: ${competitor.name}`);
    const page = await browser.newPage();

    try {
      await page.goto(competitor.url, { waitUntil: 'networkidle', timeout: 30000 });

      // Take full page screenshot
      await page.screenshot({
        path: `competitor-${competitor.name}.png`,
        fullPage: true
      });

      // Take hero section screenshot
      await page.screenshot({
        path: `competitor-${competitor.name}-hero.png`,
        clip: { x: 0, y: 0, width: 1920, height: 1000 }
      });

      // Analyze page structure
      const analysis = await page.evaluate(() => {
        const structure = {
          title: document.title,
          h1: document.querySelector('h1')?.innerText || 'None',
          ctaButtons: [],
          pricing: [],
          testimonials: [],
          beforeAfter: false,
          faqCount: 0,
          trustBadges: []
        };

        // Find CTA buttons
        document.querySelectorAll('a[href*="book"], a[href*="consult"], button').forEach(btn => {
          const text = btn.innerText?.trim();
          if (text && text.length < 50 && (text.toLowerCase().includes('book') ||
              text.toLowerCase().includes('consult') || text.toLowerCase().includes('contact'))) {
            structure.ctaButtons.push(text);
          }
        });

        // Look for pricing
        document.querySelectorAll('*').forEach(el => {
          const text = el.innerText || '';
          if (text.match(/£\d+|$\d+/) && el.children.length === 0) {
            structure.pricing.push(text.trim().substring(0, 100));
          }
        });

        // Count testimonials/reviews
        const testimonialSelectors = ['[class*="testimonial"]', '[class*="review"]', '[class*="feedback"]'];
        testimonialSelectors.forEach(sel => {
          structure.testimonials.push(...Array.from(document.querySelectorAll(sel)).map(el => ({
            preview: el.innerText?.substring(0, 150)
          })));
        });

        // Check for before/after
        structure.beforeAfter = !!(
          document.querySelector('[alt*="before"]') ||
          document.querySelector('[alt*="after"]') ||
          document.querySelector('[class*="before"]')
        );

        // Count FAQs
        structure.faqCount = document.querySelectorAll('[class*="faq"], [id*="faq"]').length;

        return structure;
      });

      analysisReport.push({
        name: competitor.name,
        url: competitor.url,
        ...analysis
      });

      console.log(`✅ ${competitor.name} analyzed`);

    } catch (error) {
      console.log(`❌ ${competitor.name} failed: ${error.message}`);
      analysisReport.push({
        name: competitor.name,
        url: competitor.url,
        error: error.message
      });
    }

    await page.close();
  }

  await browser.close();

  // Write analysis report
  fs.writeFileSync('competitor-analysis.json', JSON.stringify(analysisReport, null, 2));
  console.log('\n✅ Analysis complete! Check competitor-analysis.json');
})();
