import {test,expect} from  "@playwright/test";
test("Verify Input Box", async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');

    //Inputbox - Name

  //1) Check weather the inputbox is visible
  await expect(await page.locator("//input[@id='name']")).toBeVisible();
 
 //2) Check weather the inputbox is empty or not
  await expect(await page.locator("#name")).toBeEmpty();
  
//3) Check weather the inputbox is enabled
  await expect(await page.locator("#name")).toBeEnabled();

//4) Check weather the inputbox is editable
  await expect(await page.locator("#name")).toBeEditable();
  
  
  await page.locator("#name").fill("Neha Khapekar");
  await page.waitForTimeout(3000); //pausing code


})