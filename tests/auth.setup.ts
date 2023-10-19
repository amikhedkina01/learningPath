import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/")

    await page.getByRole('button', {name: 'My account'}).hover();
    await page.click("text=Login");
    await page.locator("#input-email").fill("alina.mikhedkina@gmail.com")
    await page.locator("#input-password").fill("@@szmpXQsrGvaX8")
    await page.getByRole("button", {name:'Login'})
    await page.waitForTimeout(3000);
    await page.waitForURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    await expect(page.getByRole('button', { name: 'Edit your account information' })).toBeVisible();

    await page.context().storageState({ path: authFile });


});