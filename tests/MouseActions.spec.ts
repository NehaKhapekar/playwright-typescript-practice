import {test,expect} from  "@playwright/test";
test("Mouse Actions", async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');
    
    //1) Mouse Hover Action
    await page.getByRole('link',{name:'Computers'}).first().hover();

    await page.waitForTimeout(3000);
   await page.getByRole("link",{name:"Notebooks"}).first().click();
   
    //2) Double Click Action
    await page.getByAltText('Picture of 14.1-inch Laptop').dblclick();
   
    //3) Right Click Action
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.locator(".context-menu-one.btn.btn-neutral").click({button:"right"});
    await page.waitForTimeout(3000);

    //4) Drag and Drop Action
    await page.goto('https://testautomationpractice.blogspot.com/#');
    await page.locator("#draggable").dragTo(await page.locator("#droppable"));
    await page.waitForTimeout(3000);


})