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
    expect(frame1?.locator("//p[@class='title has-text-info']").textContent()).toContain("You have entered") //doesn't work properly


    
})

test("Interact with frames. v2",async ({page}) => {

    await page.goto("https://letcode.in/frame");

    await page.locator("(//p[@class='fc-button-label'])[1]").click(); //consent agree

    const allFrames = page.frames();
    console.log("no of frames "+ allFrames.length);

    const frame =  page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("Test")
    await frame.locator("input[name='lname']").fill("Test 2");
    await page.waitForTimeout(3000);

    expect(frame?.locator("p.has-text-info").textContent()).toContain("You have entered") //doesn't work properly

})

test("Nested frames",async ({page}) => {   //also doesn't work properly

    await page.goto("https://letcode.in/frame");

    await page.locator("(//p[@class='fc-button-label'])[1]").click(); //consent agree

    const allFrames = page.frames();
    console.log("no of frames "+ allFrames.length);
    
    const frame =  page.frameLocator("#firstFr")

    const innerFrame = frame.frameLocator("iframe[scr='innerFrame']")
    await innerFrame.locator("input[name='email']").fill('email@gmail.com')
   

    await page.waitForTimeout(3000);

    // expect(innerframe.locator("p.has-text-info").textContent()).toContain("You have entered") //doesn't work properly

})
