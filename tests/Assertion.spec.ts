import {test,expect} from  "@playwright/test";

test ('Verify Home Page',async ({page})=>{

  // Open the URL
   await page.goto('https://www.qapractice.com/practice-forms');

  // 1) Page has URL
  await expect(page).toHaveURL('https://www.qapractice.com/practice-forms');
  
  // 2) Page has title
  await expect(page).toHaveTitle('Practice and Learn Selenium Web Form Automation | QA Practice');
  
  // 3) Element is visible : Check logo visibility on page
  const logoElement = await page.locator('.brand-accent');
  await expect(logoElement).toBeVisible(); 
  await expect(logoElement).toHaveText('Practice');

   // 4) Verify Textbox(First Name) is enabled
    const FirstNameTextBox = page.locator('#forms-first-name');
    await expect(FirstNameTextBox).toBeEnabled();

    // 5) Radio button is checked
    const emailRadioButton = page.locator('#forms-comm-email');
    await emailRadioButton.check();
    await page.waitForTimeout(3000);
    await expect(emailRadioButton).toBeChecked();

    // 6) Element has attribute
    const submitButton = await page.locator('#forms-submit');
    await expect(submitButton).toHaveAttribute('type','submit');
   
    // 7) Element matches text
    await expect(page.locator('h1')).toHaveText('Web Form Automation Practice');

    // 8) Element contains text
    await expect(page.locator('h1')).toContainText('Web Form');

  // 9) Input element has value
  const emailInput = page.locator('#forms-email');
    await emailInput.fill('test@example.com');
    await page.waitForTimeout(3000);
    await expect(emailInput).toHaveValue('test@example.com');

  //10) List of elements has given length
  const options = page.locator('select.form-select option');    //tag+class
  await expect(options).toHaveCount(19);


} )