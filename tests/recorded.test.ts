import {chromium, test} from "@playwright/test"

test("test", async () => {
    const browser =  await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span")

  await page.getByRole("link", { name: "Login" }).click();
  await page.getByPlaceholder("E-Mail Address").click();
  await page
    .getByPlaceholder("E-Mail Address")
    .fill("alina.mikhedkina@gmail.com");
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill("@@szmpXQsrGvaX8");
  await page.getByRole("button", { name: "Login" }).click();
  

  // const page1 = await context.newPage();
  // await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

  await page.getByRole("button", {name: "My Account"}).hover();
  await page.getByRole("link", { name: "Logout", exact: true }).click();
  await page.getByRole("heading", { name: " Account Logout" }).click();

  // ---------------------
  await context.close();
  await browser.close();

});
