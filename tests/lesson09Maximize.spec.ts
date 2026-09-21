import {test, expect} from '@playwright/test'

test('New Tab test' , async ({page, context})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.setViewportSize({width: 1536 , height: 824});

    await page.waitForTimeout(5000);

})