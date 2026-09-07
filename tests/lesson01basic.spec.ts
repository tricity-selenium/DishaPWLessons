import {test, expect} from '@playwright/test'

test('Validate PageTitle', async ({page})=>{

   //Open Website
   await page.goto('https://www.saucedemo.com/');
   await expect(page).toHaveTitle('Swag Labs');
   await expect(page.locator('#user-name')).toBeVisible();
   await page.waitForTimeout(5000);

})

test('Valid Login', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);

})

test('InValid Login', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard');
    await page.locator('#password').fill('sauce');
    await page.locator('#login-button').click();
    await expect(page).not.toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);

})

test('InValid Empty Login', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    //await page.locator('#user-name').fill('standard');
    //await page.locator('#password').fill('sauce');
    await page.locator('#login-button').click();
    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
    await page.waitForTimeout(5000);

})
