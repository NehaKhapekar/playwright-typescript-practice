import {test,expect} from  "@playwright/test";
test ("Verify Page URL",  async ({page})=>{

await page.goto("https://www.youtube.com/");
let url: string =  await page.url();
console.log("url", url);

await expect(page).toHaveURL("https://www.youtube.com/");

}
)