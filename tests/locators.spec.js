const { chromium } = require('@playwright/test');

(async () => {
    
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://meesho.com');
    await page.locator('text=Login').click();     
    await page.waitForSelector('input[name="username"]');
    const usernameField = page.locator('input[name="username"]');
    const passwordField = page.locator('input[name="password"]');
    await usernameField.fill('Sathish');
    await passwordField.fill('Sathish@123');
    const loginButton = page.locator('button[type="submit"]'); 
    await loginButton.click();
    await browser.close();
})();
