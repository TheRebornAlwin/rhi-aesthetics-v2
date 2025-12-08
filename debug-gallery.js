import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }
  });
  const page = await context.newPage();

  console.log('🔍 Navigating to localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });

  // Scroll to gallery section
  await page.locator('section#results').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  console.log('\n📊 DEBUGGING GALLERY SPACING:');

  // Get first image containers from DIFFERENT ROWS (first and third item = vertical spacing)
  const firstContainer = page.locator('section#results div.grid > div').first();
  const thirdContainer = page.locator('section#results div.grid > div').nth(2); // Third item is in second row

  const firstBox = await firstContainer.boundingBox();
  const thirdBox = await thirdContainer.boundingBox();

  console.log('First container (row 1) position:', firstBox);
  console.log('Third container (row 2) position:', thirdBox);

  if (firstBox && thirdBox) {
    const actualVerticalGap = thirdBox.y - (firstBox.y + firstBox.height);
    console.log('⚠️  ACTUAL VERTICAL GAP BETWEEN ROWS:', actualVerticalGap, 'px');
  }

  // Check container styles
  const firstContainerStyles = await firstContainer.evaluate(el => ({
    margin: window.getComputedStyle(el).margin,
    marginTop: window.getComputedStyle(el).marginTop,
    marginBottom: window.getComputedStyle(el).marginBottom,
    padding: window.getComputedStyle(el).padding,
    height: window.getComputedStyle(el).height,
    display: window.getComputedStyle(el).display,
  }));
  console.log('First container styles:', firstContainerStyles);

  // Check image styles
  const firstImage = page.locator('section#results div.grid img').first();
  const imageStyles = await firstImage.evaluate(el => ({
    margin: window.getComputedStyle(el).margin,
    marginTop: window.getComputedStyle(el).marginTop,
    marginBottom: window.getComputedStyle(el).marginBottom,
    borderRadius: window.getComputedStyle(el).borderRadius,
    objectFit: window.getComputedStyle(el).objectFit,
    height: window.getComputedStyle(el).height,
    width: window.getComputedStyle(el).width,
  }));
  console.log('First image styles:', imageStyles);

  const imageBox = await firstImage.boundingBox();
  console.log('First image bounding box:', imageBox);

  if (firstBox && imageBox) {
    const containerImageGap = imageBox.y - firstBox.y;
    console.log('⚠️  GAP BETWEEN CONTAINER AND IMAGE:', containerImageGap, 'px');
  }

  console.log('\n📊 DEBUGGING BORDER RADIUS:');
  const containerBorderRadiusCheck = await firstContainer.evaluate(el => {
    const style = window.getComputedStyle(el);
    return {
      borderRadius: style.borderRadius,
      borderTopLeftRadius: style.borderTopLeftRadius,
      overflow: style.overflow,
    };
  });
  console.log('CONTAINER border radius details:', containerBorderRadiusCheck);

  const imageBorderRadiusCheck = await firstImage.evaluate(el => {
    const style = window.getComputedStyle(el);
    return {
      borderRadius: style.borderRadius,
      overflow: style.overflow,
    };
  });
  console.log('IMAGE border radius details:', imageBorderRadiusCheck);

  console.log('\n📸 Taking screenshot for visual inspection...');
  await page.screenshot({
    path: 'debug-gallery-screenshot.png',
    clip: {
      x: 0,
      y: firstBox?.y || 0,
      width: 375,
      height: 800
    }
  });

  console.log('\n✅ Debug complete! Check debug-gallery-screenshot.png');

  await browser.close();
})();
