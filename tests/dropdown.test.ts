import { test, expect } from "@playwright/test";

test("handling dropdown", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#select-demo", {
    // label: "Tuesday"
    // value: "Friday"
    index: 3,
  });
  await page.waitForTimeout(3000);
  await page.locator("//p[@class='selected-value text-size-14']")

  await expect(page.locator("//div[contains(@class,'px-10 pt-10')]//p[1]")).toContainText("Tuesday");
});

test("handling multi select", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
//   await page.selectOption("#multi-select", [
//     {
//       label: "Texas"
//     }
//     // {
//     //     index: 3
//     // },
//     // {
//     //     value: "Pennsylvania"
//     // },
//   ]);
    await page.locator("//option[@value='Texas']").click();
  await page.waitForTimeout(1000);

  await page.locator("//button[text()='First Selected']").click();
  debugger
//   await page.locator("//button[text()='First Selected']").click();

  await page.waitForTimeout(3000);
//   const text = page.locator("//div[contains(@class,'w-4/12 smtablet:w-full')]//p[1]").textContent();
//   console.log(text);
  await expect(page.locator("//div[contains(@class,'w-4/12 smtablet:w-full')]//p[1]")).toHaveText("Texas");
});
