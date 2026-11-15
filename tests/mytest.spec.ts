import {test,expect} from  "@playwright/test";

test ("Verify Page title",async ({page})=>{
     await page.goto("https://www.youtube.com/");
    
let title: string = await page.title();
console.log("title", title);

await expect(page).toHaveTitle("YouTube");
}   )