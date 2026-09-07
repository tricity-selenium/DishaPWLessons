import {test, expect} from '@playwright/test'

test('drop down test' , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    await page.screenshot({path: 'MyScreenFull.png' , fullPage: true}); 
    
    await page.getByText('START').screenshot({path: 'start.png'});

    await page.waitForTimeout(5000);

})