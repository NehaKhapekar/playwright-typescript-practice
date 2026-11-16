import {test, expect} from '@playwright/test';
test("Handle Radio Buttons", async ({ page }) => {

     await page.goto('https://testautomationpractice.blogspot.com/');

     //1) Radio button
    await page.locator("#male").check(); //male

      //2) check weather the radio button is checked or not
    await expect(await page.locator("#male")).toBeChecked();


    //3)Assertions
    // check returns true if the radio button is checked 
    await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy();//male
    
    //check returns false if the radio button is not checked 
    await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy(); //female


    await page.waitForTimeout(5000); //pausing code
    
})