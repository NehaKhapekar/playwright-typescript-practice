import {test,expect} from "@playwright/test";

test("Handle checkboxes", async ({ page }) => {

// Navigate to test page
  await page.goto('https://testautomationpractice.blogspot.com/');
  
// ✅ Single checkbox ✅ 
  await page.locator("#monday").check();
  await page.waitForTimeout (3000);

// Assertions
  await expect(page.locator("#monday")).toBeChecked();
  await expect(page.locator("#sunday")).not.toBeChecked();

 // ✅ Multiple checkboxes ✅ 
  const checkboxLocators = [
    "#monday",
    "#sunday",
    "#saturday"
  ];
  // Select multiple checkboxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).check();
    await expect(page.locator(locator)).toBeChecked();
  }

  await page.waitForTimeout (3000);

  // Unselect multiple checkboxes
  for (const locator of checkboxLocators) {
    await page.locator(locator).uncheck();
    await expect(page.locator(locator)).not.toBeChecked();
  }
  await page.waitForTimeout (3000);

})