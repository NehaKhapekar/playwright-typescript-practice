import {test,expect} from  "@playwright/test";
test("Browser Actions", async ({ page }) => {

    //1) Open URL
    await page.goto('https://testautomationpractice.blogspot.com/');

    
    //2) Get current URL of the page
    console.log("Current URL of the page is: " +  page.url());
    expect(page.url()).toBe("https://testautomationpractice.blogspot.com/");  //Assertion to verify the URL of the page 

    //3) Get the title of the page
    console.log("Title of the page is: " + await page.title());
    expect(await page.title()).toBe("Automation Testing Practice");  //Assertion to verify the title of the page
    
    //4) Refresh the page
    await page.reload();
    await page.waitForTimeout(3000);

    //5)go back to previous page
    await page.goBack();
    await page.waitForTimeout(3000);

    //6) go forward to next page
    await page.goForward();
    await page.waitForTimeout(3000);    

    //7) Get the page source of the page
    console.log("Page source of the page is: " + await page.content()); 

    //8) close the browser
    await page.close();
    
})

