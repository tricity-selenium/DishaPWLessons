import {test, expect} from '@playwright/test'

test('drop down test' , async ({page})=>{

    await page.goto('https://jqueryui.com/autocomplete/');

    const parentpageframe = await page.frameLocator('.demo-frame');
    const childframe = await parentpageframe.frameLocator('.qa');
    
    await childframe.locator('#tags').fill('java');

    await page.getByText('Development').first().click();

    await page.waitForTimeout(5000);

})