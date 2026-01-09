import { chromium } from 'playwright';
import fs from 'fs';

const competitors = [
  {
    name: 'Excel-Clinic',
    url: 'https://excelclinic.co.uk/minor-surgery/?gad_source=1&gad_campaignid=21713307320&gclid=Cj0KCQiApfjKBhC0ARIsAMiR_Is2j9QJOmcuaAQMEYXh-nMYLHi07yuDZ3SaO4Z6-GuQIg9B3HwFsSwaAro1EALw_wcB'
  },
  {
    name: 'Wall-Street-Dermatology',
    url: 'https://www.wallstreetdermatology.com/mole-removal/'
  },
  {
    name: 'CLNQ',
    url: 'https://www.clnq.com/skin-treatments/laser-mole-removal/?gad_source=1&gad_campaignid=20685502956&gclid=Cj0KCQiAyP3KBhD9ARIsAAJLnnYTBqyPXaNjqBoY9frAN7gN01UnN49fI0xyv5gkQsCe2eDRO73xiJIaAse0EALw_wcB'
  }
];

(async () => {
  const browser = await chromium.launch();
  const analysisReport = [];

  for (const competitor of competitors) {
    console.log(`\n\n${'='.repeat(80)}`);
    console.log(`Analyzing: ${competitor.name}`);
    console.log(`URL: ${competitor.url}`);
    console.log('='.repeat(80));

    const page = await browser.newPage();
    await page.setViewportSize({ width: 1920, height: 1080 });

    try {
      await page.goto(competitor.url, { waitUntil: 'networkidle', timeout: 60000 });
      await page.waitForTimeout(3000); // Wait for animations/lazy loading

      // Take full page screenshot
      const fullPagePath = `competitor-${competitor.name}-full.png`;
      await page.screenshot({
        path: fullPagePath,
        fullPage: true
      });
      console.log(`Screenshot saved: ${fullPagePath}`);

      // Take hero section screenshot
      const heroPath = `competitor-${competitor.name}-hero.png`;
      await page.screenshot({
        path: heroPath,
        clip: { x: 0, y: 0, width: 1920, height: 1000 }
      });
      console.log(`Hero screenshot saved: ${heroPath}`);

      // Deep analysis
      const analysis = await page.evaluate(() => {
        const data = {
          pageTitle: document.title,
          metaDescription: document.querySelector('meta[name="description"]')?.content || '',

          // Hero section
          hero: {
            h1: '',
            h2: '',
            subheadline: '',
            firstParagraph: '',
            ctaButtons: []
          },

          // All headings in order
          allHeadings: [],

          // CTAs throughout page
          allCTAs: [],

          // Credentials and trust signals
          credentials: [],
          trustSignals: [],

          // Pricing
          pricing: {
            found: false,
            details: []
          },

          // Process/Steps
          process: {
            found: false,
            steps: []
          },

          // USPs
          usps: [],

          // Before/After
          beforeAfter: {
            found: false,
            count: 0,
            approach: ''
          },

          // FAQs
          faqs: {
            found: false,
            count: 0,
            topics: []
          },

          // Page sections
          sections: [],

          // Guarantees
          guarantees: [],

          // Overall text snippets for tone analysis
          textSnippets: []
        };

        // Extract hero section
        const h1 = document.querySelector('h1');
        if (h1) {
          data.hero.h1 = h1.innerText.trim();

          // Try to find subheadline near h1
          let nextEl = h1.nextElementSibling;
          let attempts = 0;
          while (nextEl && attempts < 5) {
            const tag = nextEl.tagName.toLowerCase();
            const text = nextEl.innerText?.trim();

            if ((tag === 'h2' || tag === 'p' || tag === 'div') && text && text.length > 20) {
              if (tag === 'h2') data.hero.h2 = text;
              if (!data.hero.subheadline && tag === 'p') data.hero.subheadline = text;
              if (!data.hero.firstParagraph && text.length > 30) data.hero.firstParagraph = text;
              break;
            }
            nextEl = nextEl.nextElementSibling;
            attempts++;
          }
        }

        // Get all headings in order
        document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
          const text = h.innerText.trim();
          if (text && text.length > 0) {
            data.allHeadings.push({
              level: h.tagName,
              text: text
            });
          }
        });

        // Extract all CTAs
        const ctaSelectors = [
          'a[href*="book"]',
          'a[href*="consult"]',
          'a[href*="appointment"]',
          'a[href*="contact"]',
          'button',
          '.btn',
          '.button',
          '[class*="cta"]'
        ];

        const ctaSet = new Set();
        ctaSelectors.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => {
            const text = el.innerText?.trim();
            if (text && text.length > 0 && text.length < 100) {
              ctaSet.add(text);
            }
          });
        });
        data.allCTAs = Array.from(ctaSet);

        // Look for credentials
        const credentialKeywords = ['doctor', 'dr.', 'md', 'certified', 'qualified', 'gmc', 'years experience', 'specialist', 'consultant', 'accredited', 'registered'];
        document.querySelectorAll('p, div, span, li').forEach(el => {
          const text = el.innerText?.trim().toLowerCase();
          if (text && credentialKeywords.some(kw => text.includes(kw))) {
            const snippet = el.innerText.trim();
            if (snippet.length < 300 && snippet.length > 10) {
              data.credentials.push(snippet);
            }
          }
        });

        // Look for trust signals
        const trustKeywords = ['trustpilot', 'google review', 'rated', 'award', 'featured', 'certified', '5 star', 'satisfaction'];
        document.querySelectorAll('*').forEach(el => {
          const text = el.innerText?.trim().toLowerCase();
          const classes = (typeof el.className === 'string') ? el.className.toLowerCase() : '';
          if ((text && trustKeywords.some(kw => text.includes(kw))) ||
              trustKeywords.some(kw => classes.includes(kw))) {
            const snippet = el.innerText?.trim();
            if (snippet && snippet.length < 200 && snippet.length > 5) {
              data.trustSignals.push(snippet);
            }
          }
        });

        // Pricing detection
        const priceRegex = /[£$]\s*\d+(?:,\d{3})*(?:\.\d{2})?/g;
        document.querySelectorAll('p, div, span, li, td, th').forEach(el => {
          const text = el.innerText?.trim();
          if (text && text.match(priceRegex)) {
            const snippet = text.length < 300 ? text : text.substring(0, 300);
            data.pricing.details.push(snippet);
            data.pricing.found = true;
          }
        });

        // Process/Steps detection
        const processKeywords = ['step', 'process', 'procedure', 'how it works', 'what to expect'];
        document.querySelectorAll('h2, h3, h4').forEach(h => {
          const text = h.innerText?.trim().toLowerCase();
          if (text && processKeywords.some(kw => text.includes(kw))) {
            data.process.found = true;

            // Get following list or paragraphs
            let next = h.nextElementSibling;
            let stepCount = 0;
            while (next && stepCount < 10) {
              if (next.tagName === 'OL' || next.tagName === 'UL') {
                next.querySelectorAll('li').forEach(li => {
                  data.process.steps.push(li.innerText.trim());
                });
                break;
              } else if (next.tagName === 'DIV' || next.tagName === 'P') {
                const text = next.innerText?.trim();
                if (text && text.length > 20) {
                  data.process.steps.push(text);
                }
              }
              next = next.nextElementSibling;
              stepCount++;
            }
          }
        });

        // USPs detection
        const uspKeywords = ['why choose', 'benefits', 'advantages', 'what makes us', 'unique'];
        document.querySelectorAll('h2, h3, h4').forEach(h => {
          const text = h.innerText?.trim().toLowerCase();
          if (text && uspKeywords.some(kw => text.includes(kw))) {
            let next = h.nextElementSibling;
            let count = 0;
            while (next && count < 8) {
              if (next.tagName === 'UL') {
                next.querySelectorAll('li').forEach(li => {
                  data.usps.push(li.innerText.trim());
                });
                break;
              }
              next = next.nextElementSibling;
              count++;
            }
          }
        });

        // Before/After detection
        const beforeAfterImages = document.querySelectorAll('img[alt*="before"], img[alt*="after"], [class*="before"], [class*="after"]');
        if (beforeAfterImages.length > 0) {
          data.beforeAfter.found = true;
          data.beforeAfter.count = beforeAfterImages.length;

          // Check for gallery structure
          if (document.querySelector('[class*="gallery"]') || document.querySelector('[class*="slider"]')) {
            data.beforeAfter.approach = 'Gallery/Slider format';
          } else {
            data.beforeAfter.approach = 'Individual images';
          }
        }

        // FAQ detection
        const faqElements = document.querySelectorAll('[class*="faq"], [id*="faq"], [class*="accordion"]');
        if (faqElements.length > 0) {
          data.faqs.found = true;
          data.faqs.count = faqElements.length;

          faqElements.forEach(el => {
            el.querySelectorAll('h3, h4, summary, [class*="question"]').forEach(q => {
              const text = q.innerText?.trim();
              if (text && text.length > 5 && text.length < 300) {
                data.faqs.topics.push(text);
              }
            });
          });
        }

        // Section structure
        document.querySelectorAll('section, article, [class*="section"]').forEach(section => {
          const heading = section.querySelector('h2, h3');
          if (heading) {
            data.sections.push(heading.innerText.trim());
          }
        });

        // Guarantees
        const guaranteeKeywords = ['guarantee', 'money back', 'satisfaction', 'risk-free', 'no-obligation'];
        document.querySelectorAll('p, div, li').forEach(el => {
          const text = el.innerText?.trim().toLowerCase();
          if (text && guaranteeKeywords.some(kw => text.includes(kw))) {
            const snippet = el.innerText.trim();
            if (snippet.length < 300 && snippet.length > 20) {
              data.guarantees.push(snippet);
            }
          }
        });

        // Text snippets for tone analysis
        document.querySelectorAll('p').forEach((p, idx) => {
          if (idx < 20) { // First 20 paragraphs
            const text = p.innerText?.trim();
            if (text && text.length > 30) {
              data.textSnippets.push(text);
            }
          }
        });

        return data;
      });

      analysisReport.push({
        name: competitor.name,
        url: competitor.url,
        screenshots: {
          full: fullPagePath,
          hero: heroPath
        },
        ...analysis
      });

      console.log(`Analysis complete for ${competitor.name}`);

    } catch (error) {
      console.log(`Error analyzing ${competitor.name}: ${error.message}`);
      analysisReport.push({
        name: competitor.name,
        url: competitor.url,
        error: error.message
      });
    }

    await page.close();
  }

  await browser.close();

  // Save raw JSON data
  fs.writeFileSync('competitor-analysis-raw.json', JSON.stringify(analysisReport, null, 2));
  console.log('\n\nRaw analysis saved to: competitor-analysis-raw.json');

  // Generate markdown report
  let markdown = '# Competitor Deep Dive Analysis\n\n';
  markdown += `Analysis Date: ${new Date().toISOString()}\n\n`;
  markdown += '---\n\n';

  analysisReport.forEach((competitor, idx) => {
    if (competitor.error) {
      markdown += `## ${idx + 1}. ${competitor.name}\n\n`;
      markdown += `**URL:** ${competitor.url}\n\n`;
      markdown += `**Error:** ${competitor.error}\n\n`;
      markdown += '---\n\n';
      return;
    }

    markdown += `## ${idx + 1}. ${competitor.name}\n\n`;
    markdown += `**URL:** ${competitor.url}\n\n`;

    markdown += `### Screenshots\n\n`;
    markdown += `- Full page: \`${competitor.screenshots.full}\`\n`;
    markdown += `- Hero section: \`${competitor.screenshots.hero}\`\n\n`;

    markdown += `### Page Title & Meta\n\n`;
    markdown += `**Title:** ${competitor.pageTitle}\n\n`;
    markdown += `**Meta Description:** ${competitor.metaDescription}\n\n`;

    markdown += `### Hero Section\n\n`;
    markdown += `**H1 Headline:** "${competitor.hero.h1}"\n\n`;
    if (competitor.hero.h2) markdown += `**H2:** "${competitor.hero.h2}"\n\n`;
    if (competitor.hero.subheadline) markdown += `**Subheadline:** "${competitor.hero.subheadline}"\n\n`;
    if (competitor.hero.firstParagraph) markdown += `**First Paragraph:** "${competitor.hero.firstParagraph}"\n\n`;

    markdown += `### CTAs (Call-to-Actions)\n\n`;
    if (competitor.allCTAs.length > 0) {
      competitor.allCTAs.forEach(cta => {
        markdown += `- "${cta}"\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No CTAs detected.\n\n';
    }

    markdown += `### Credentials & Positioning\n\n`;
    if (competitor.credentials.length > 0) {
      competitor.credentials.slice(0, 10).forEach(cred => {
        markdown += `- ${cred}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No specific credentials detected.\n\n';
    }

    markdown += `### Trust Signals\n\n`;
    if (competitor.trustSignals.length > 0) {
      competitor.trustSignals.slice(0, 10).forEach(signal => {
        markdown += `- ${signal}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No trust signals detected.\n\n';
    }

    markdown += `### Pricing\n\n`;
    if (competitor.pricing.found) {
      competitor.pricing.details.slice(0, 10).forEach(price => {
        markdown += `- ${price}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No pricing information displayed.\n\n';
    }

    markdown += `### Process/Steps\n\n`;
    if (competitor.process.found) {
      competitor.process.steps.forEach((step, idx) => {
        markdown += `${idx + 1}. ${step}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No clear process/steps section found.\n\n';
    }

    markdown += `### Unique Selling Points\n\n`;
    if (competitor.usps.length > 0) {
      competitor.usps.forEach(usp => {
        markdown += `- ${usp}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No explicit USPs found.\n\n';
    }

    markdown += `### Before/After Gallery\n\n`;
    if (competitor.beforeAfter.found) {
      markdown += `**Found:** Yes\n`;
      markdown += `**Count:** ${competitor.beforeAfter.count} images\n`;
      markdown += `**Approach:** ${competitor.beforeAfter.approach}\n\n`;
    } else {
      markdown += 'No before/after gallery detected.\n\n';
    }

    markdown += `### FAQs\n\n`;
    if (competitor.faqs.found) {
      markdown += `**Count:** ${competitor.faqs.count} FAQ sections\n\n`;
      markdown += `**Topics:**\n\n`;
      competitor.faqs.topics.slice(0, 15).forEach(topic => {
        markdown += `- ${topic}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No FAQ section found.\n\n';
    }

    markdown += `### Page Structure (Section Order)\n\n`;
    if (competitor.sections.length > 0) {
      competitor.sections.forEach((section, idx) => {
        markdown += `${idx + 1}. ${section}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'Section structure unclear.\n\n';
    }

    markdown += `### All Headings (In Order)\n\n`;
    competitor.allHeadings.slice(0, 30).forEach((h, idx) => {
      markdown += `${idx + 1}. **[${h.level}]** ${h.text}\n`;
    });
    markdown += '\n';

    markdown += `### Guarantees & Risk Reversals\n\n`;
    if (competitor.guarantees.length > 0) {
      competitor.guarantees.forEach(guarantee => {
        markdown += `- ${guarantee}\n`;
      });
      markdown += '\n';
    } else {
      markdown += 'No explicit guarantees found.\n\n';
    }

    markdown += `### Tone Analysis (Sample Text)\n\n`;
    if (competitor.textSnippets.length > 0) {
      markdown += '**First few paragraphs for tone reference:**\n\n';
      competitor.textSnippets.slice(0, 5).forEach((snippet, idx) => {
        markdown += `${idx + 1}. "${snippet}"\n\n`;
      });
    }

    markdown += `### Clinical vs Warm Assessment\n\n`;
    markdown += `*[Manual assessment based on copy above]*\n\n`;

    markdown += '---\n\n';
  });

  fs.writeFileSync('competitor-deep-dive.md', markdown);
  console.log('Markdown report saved to: competitor-deep-dive.md');
  console.log('\nAnalysis complete!');
})();
