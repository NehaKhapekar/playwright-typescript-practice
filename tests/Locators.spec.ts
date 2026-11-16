import {test,expect} from  "@playwright/test";

test("Locators with Login",async ({page})=>{

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
 
      //fill username and password, then click on login 
      await page.locator('[name="username"]').fill('Admin');
      await page.locator('[name="password"]').fill('admin123');

      await page.waitForTimeout(2000);
      await page.locator('[type="submit"]').click();

      //Verify successful login by checking the presence of the logout button
    
      await page.locator('.oxd-userdropdown-icon').click();

     const logoutButton = await page.locator('text=Logout');
     await page.waitForTimeout(2000);
     await expect(logoutButton).toBeVisible(); 

     await page.close();

})