import {test,expect} from "@playwright/test";

test("Checking Methods Boolean", async ({ page }) => {

    //These are boolean methods which return true or false based on the condition.
    await page.goto("https://testautomationpractice.blogspot.com/");

    //1) Image is visible
    const image=await page.locator(".wikipedia-icon");
    console.log("Is Image Visible: "+await image.isVisible());

    //2) TextBox is enabled
    const textBox=await page.locator("#name");
    console.log("Is TextBox Enabled: "+await textBox.isEnabled());

    //3) Radio button is checked
    const radioButton=await page.locator("#male");
    await radioButton.check();
    console.log("Is Radio Button Checked: "+await radioButton.isChecked());

    //4) Textbox is editable
    const textBox1=await page.locator("#name");
    console.log("Is TextBox Editable: "+await textBox1.isEditable());

    //5) Textbox is hidden
    const hiddenElement=await page.locator("#name");
    console.log("Is Textbox Hidden: "+await hiddenElement.isHidden()); //false because the textbox is visible on the page

   //6) Textbox is disabled
    const disabledElement=await page.locator("#phone");
    console.log("Is Textbox Disabled: "+await disabledElement.isDisabled()); //false because the textbox is enabled on the page

    //7) Count the select element
    const elements=await page.locator("#colors");
    console.log("Count of Elements: "+await elements.count());

    //8) Count all attached options---with colors
    const coloroptions = page.locator("#colors option");
    console.log("Total attached options: " + await coloroptions.count());

    //another example of Count all attached options---with animals
    const animaloptions = page.locator("#animals option");
    console.log("Total attached options: " + await animaloptions.count());


})
