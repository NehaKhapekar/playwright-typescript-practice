import {test, expect} from "@playwright/test";
test("GetText and GetAttribute", async ({ page }) => {

    //1) Get Text
    await page.goto('https://testautomationpractice.blogspot.com/');
    console.log("GetText:" +await page.getByText("Dynamic Button").textContent() );
    expect(await page.getByText("Dynamic Button").textContent()).toBe("Dynamic Button");
  

    //2) Get Attribute
   
    console.log("GetAttribute:" +await page.locator("[name='start']").getAttribute("onclick"));
   expect(await page.locator("[name='start']").getAttribute("onclick")).toBe("toggleButton(this)");

})
