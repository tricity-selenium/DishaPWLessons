import {test, expect} from '@playwright/test'

test('Visual' , async ({page, context})=>{

    await page.goto('https://demoblaze.com/index.html');

    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pro111');  //demouser555
    await page.locator('#loginpassword').fill('123456');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.waitForTimeout(2000);

    await page.getByText('Cart').click();

    //await expect(page).toHaveScreenshot('HomePage.png', {maxDiffPixelRatio: 0.01});
    await expect(page).toHaveScreenshot('HomePage.png', {maxDiffPixels: 2100});
    
    await page.waitForTimeout(5000);
})
