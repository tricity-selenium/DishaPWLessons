import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

   //Open Website
   await page.goto('https://testautomationpractice.blogspot.com/');
   await page.getByPlaceholder('Enter Name').fill('amit');
   await page.getByRole('button', {name: 'start'}).click();
   await page.getByRole('link', {name: 'Online Trainings'}).click();

   await page.waitForTimeout(5000);

})