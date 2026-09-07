import {test, expect} from '@playwright/test'

test('drop down test' , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   // await page.locator('#country').selectOption({label: "France"});
   // await page.locator('#country').selectOption({index: 1});
      await page.locator('#country').selectOption({value: 'uk'});

    await page.waitForTimeout(5000);

})