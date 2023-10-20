import { test, expect} from "@playwright/test"

test("Login", async ({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.getByRole('button', {name: 'My account'}).click();
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account')
    await expect(page.getByRole('link', { name: 'Edit your account information' })).toBeVisible(); 
    await page.waitForTimeout(3000);
    await expect(page.getByText('My Orders')).toBeVisible();

})

test ("Logout",async ({page}) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.getByRole('button', {name: 'My account'}).hover();
    await page.click("text=Logout");
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');
    await expect(page.getByText('Account Logout')).toBeVisible();
    
//here we have a setup with defult login, stored in tests/auth.setup.ts, so it will be performed before each test.

})