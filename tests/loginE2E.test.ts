import { test, expect} from "@playwright/test"

test("Login test demo", async ({page}) => {

    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.getByRole('button', {name: 'My account'}).hover();
    await page.click("text=Login");
    await page.locator("#input-email").fill("alina.mikhedkina@gmail.com")
    await page.locator("#input-password").fill("@@szmpXQsrGvaX8")
    await page.getByRole('button', {name: 'Login'}).click();
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    
    await expect(page.getByRole('button', { name: 'Edit your account information' })).toBeVisible();    

})