import {expect, test} from "@playwright/test";

test("Interact with multiple tabs",async ({page}) => {
    
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

typeof{
    newWindow: URL
}

    const newWindow = await Promise.all([
        page.click("//a[contains(text(),'Follow On Twitter')]"),
        page.waitForEvent("popup")

    ]);

    console.log(newWindow)
    
})