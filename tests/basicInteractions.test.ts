import {chromium, test, expect} from "@playwright/test"

test("text input test", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput = page.locator("input#user-message");
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder",{timeout: 10000}));
    await expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log("Before input: "+await messageInput.inputValue());

    await messageInput.type("hello bitch")
    console.log("After input: "+await messageInput.inputValue());


})

test("Sum",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1 = page.locator("#sum1");
    const sum2 = page.locator("#sum2");
    const getButn = page.locator("(//button[contains(@class,'mt-20 mb-10')])[2]");
    let num1 = 123;
    let num2 = 11;
    await sum1.fill("" + num1);
    await sum2.fill("" + num2);
    await getButn.click();
    const result = page.locator("#addmessage");
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    await expect(result).toHaveText(""+ expectedResult);


});

test("Checkbox", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const checkbox = page.locator("id=isAgeSelected")
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();

});