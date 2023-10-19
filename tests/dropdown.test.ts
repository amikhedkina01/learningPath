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
  await page.locator("//p[@class='selected-value text-size-14']");

  await expect(
    page.locator("//div[contains(@class,'px-10 pt-10')]//p[1]")
  ).toContainText("Tuesday");
});

test("handling multi select", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
  );
  await page.selectOption("#multi-select", [
    {
      label: "Texas"
    },
    {
        label: "Ohio"
    }

  ]);
  // await page.locator("//option[@value='Texas']").click();
  await page.waitForTimeout(1000);

  await page.locator("//button[text()='First Selected']").click();

//   await page.locator("//button[text()='First Selected']").dblclick();

  await page.waitForTimeout(4000);
  //   const text = page.locator("//div[contains(@class,'w-4/12 smtablet:w-full')]//p[1]").textContent();
  //   console.log(text);
  await expect(page.locator("//p[@class='text-size-14']//span[1]")).toHaveText(
    "Texas"
  );

  await page.locator("//button[text()='Get Last Selected']").click();

  await page.locator("//button[text()='Get Last Selected']").dblclick();

  await expect(
    page.locator("//span[contains(@class,'groupradiobutton block')]")
  ).toHaveText("Texas");
});

// test("test", async ({ page }) => {
//   await page.goto(
//     "https://www.lambdatest.com/selenium-playground/select-dropdown-demo"
//   );
//   await page.selectOption("#multi-select", [
//     {
//       label: "Texas",
//     },
//     {
//       index: 3,
//     },
//     {
//       value: "Pennsylvania",
//     },
//   ]);
//   await page.locator("//button[text()='Get Last Selected']").click();

//   await page.locator("//button[text()='Get Last Selected']").dblclick();

//   await expect(
//     page.locator("//span[contains(@class,'groupradiobutton block')]")
//   ).toHaveText("Pennsylvania");
// });

test.only("bootstap dropdown", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span");
    await page.locator("ul#select2-country-results")
        .locator("li",
        {hasText: "India"
}).click();

    await page.waitForTimeout(3000);

    
})

test.only("bootstap dropdown v2", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    
    await selectCountry("Japan");
    // await expect(page.locator("#select2-country-container")).toHaveText("Japan");
    
    await selectCountry("Denmark");
    // await expect(page.locator("#select2-country-container")).toHaveText("Denmark");

    await selectCountry("Netherlands");
    // await expect(page.locator("#select2-country-container")).toHaveText("Netherlands");

async function selectCountry(countryName) {
    await page.click("#country+span");
    await page.locator("ul#select2-country-results")
        .locator("li",
            {
                hasText: countryName
            }).click();
}
})

