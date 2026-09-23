import {test, expect} from '@playwright/test'


test.beforeEach('SetUp', async ({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

})

test.afterEach('TearDown', async ({page})=>{

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

})

test('ValidateInventory', async ({page})=>{

  await expect.soft(page).toHaveURL('https://www.saucedemo.com/inventory.html');
   
  await page.waitForTimeout(5000);
  
})

test('AddToCart', async ({page})=>{

  await page.locator('#add-to-cart-sauce-labs-backpack').click();

  expect(await page.locator('.shopping_cart_badge')).toBeVisible();

  await page.waitForTimeout(5000);

})