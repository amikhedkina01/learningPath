import {test, expect} from "@playwright/test";


test ("handling allerts: confirmation",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog", async (allert) => {
        const text = allert.message();
        console.log(text);
        await allert.accept();
    })
    await page.locator("button:has-text('Click me')").nth(0).click()
});

test ("handling allerts: dissmiss",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog", async (allert) => {
        const text = allert.message();
        console.log(text);
        await allert.dismiss();
    })
    await page.locator("button:has-text('Click me')").nth(1).click()

    expect(page.locator("id=confirm-demo")).toContainText("Cancel");
});

test ("handling allerts: accept",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog", async (allert) => {
        const text = allert.message();
        console.log(text);
        await allert.accept();
    })
    await page.locator("button:has-text('Click me')").nth(1).click()

    expect(page.locator("id=confirm-demo")).toContainText("OK!");
});

test ("handling allerts: promt box",async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    page.on("dialog", async (allert) => {
        const text = allert.defaultValue();
        console.log(text);
        await allert.accept("Ally");
    })
    await page.locator("button:has-text('Click me')").nth(2).click()

    expect(page.locator("id=prompt-demo")).toContainText("'Ally'");
});

test ("handling allerts: single modal",async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']");
    await page.locator("(//button[text()='Save Changes'])[1]").click()

});
