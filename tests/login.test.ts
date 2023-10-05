import {chromium, test} from "@playwright/test"

test("Login test demo", async () => {

    const browser =  await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span")
    // await page.click("text=Login")
    await page.click("//span[text()[normalize-space()='Login']]")

    await page.fill("input[name='email']", "alina.mikhedkina@gmail.com")
    await page.fill("input[name= 'password']", "test123qa")
    await page.click("input[type='submit']");

    await page.waitForTimeout(50000);

    const page1 = await context.newPage();
})