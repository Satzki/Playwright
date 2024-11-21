const {chromium, test, expect} = require('@playwright/test');

test('Browser launch amazon', async () => {
    const browser = await chromium.launch(

        {
            headless: false,

        }
    );

    const page = await browser.newPage();
    await page.goto('https://www.meesho.com/');
    const pagetitle = await page.title();
    console.log(pagetitle);

    const pageurl = await page.url();
    console.log(pageurl);
    });

