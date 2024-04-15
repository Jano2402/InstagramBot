const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.google.com/intl/es/gmail/about/');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    page.setDefaultTimeout(10000);
    await page.waitForNavigation();

    await page.keyboard.type('Gerardo');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    page.setDefaultTimeout(50000);
    await page.waitForNavigation();
    
    await page.screenshot({ path : 'example.png' });
    
    await browser.close();
  })();