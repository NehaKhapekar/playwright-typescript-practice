import {test,expect} from  "@playwright/test";
test("KeyBoardActions", async ({ page }) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.locator("[name='text1']").fill("Hello, World! Welcome to Playwright Automation testing.");
    

    //ctrl+A==> select all the text in the input box
     await page.keyboard.press('Control+A');
     
     //ctrl+C==> copy the text from input box
     await page.keyboard.press('Control+C');

      //Press Tab key
    await page.keyboard.press('Tab');
   
     //ctrl+V==> paste the text into the input box
     await page.keyboard.press('Control+V');

     
     await page.waitForTimeout(3000);
})
