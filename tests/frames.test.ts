import {expect, test} from "@playwright/test";

test("Interact with frames",async ({page}) => {

    await page.goto("https://letcode.in/frame");

    await page.locator("(//p[@class='fc-button-label'])[1]").click();

    // const allFrames = page.frames();
    // console.log("no of frames "+ allFrames.length);

    const frame1 = page.frame("firstFr");
    // if (frame1 != null) {
    //     await frame1.fill("","")
    // }
    await frame1?.fill("(//label[text()='First Name']/following::input)[1]", "Test")
    await frame1?.fill("//label[text()='Last Name']/following::input", "Ltest")

    await page.waitForTimeout(3000);
    expect(frame1?.locator("//p[text()='You have entered test test']")).toBeFalsy

    
})