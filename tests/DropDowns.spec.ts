import {test,expect} from  "@playwright/test";

test("Handle DropDowns", async ({ page }) => {

 await page.goto('https://testautomationpractice.blogspot.com/');

 //  Different ways to select option from the dropdown 
  await page.locator("#country").selectOption({label: 'India'});   // label / visible text
  await page.locator("#country").selectOption('Germany');  // visible text        
  await page.locator("#country").selectOption({value: 'usa'});     // by value 
  await page.locator("#country").selectOption({index:5});        // by index
  await page.selectOption("#country", 'France');                     // by text
  await page.waitForTimeout(3000); 

  //Assertions
  // 1) Check number of options in dropdown 
  const allOptionsLocator = page.locator('#country option');
  await expect(allOptionsLocator).toHaveCount(10);

// 2) Check presence of a value in the dropdown 
  const dropdownText = await page.locator('#country').textContent();
  //expect(dropdownText?.includes('India')).toBeTruthy();
  await expect(page.locator('#country')).toContainText('India');

  await page.waitForTimeout(5000);

})
