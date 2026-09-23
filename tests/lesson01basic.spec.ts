import {test, expect} from '@playwright/test'
import user from '../loginuser.json'

test('Validate PageTitle', async ({page})=>{

   //Open Website
   await page.goto('https://www.saucedemo.com/');
   await expect(page).toHaveTitle('Swag Labs');
   await expect(page.locator('#user-name')).toBeVisible();
   await page.waitForTimeout(5000);

})

test('Valid Login', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(user[0].username);
    await page.locator('#password').fill(user[0].password);
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(5000);

})

test('InValid Login', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(user[1].username);
    await page.locator('#password').fill(user[1].password);
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
