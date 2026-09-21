import {test, expect} from '@playwright/test'

test('Scroll' , async ({page, context})=>{

    await page.goto('https://playwright.dev/');

    //Scroll by pixels
    //await page.mouse.wheel(0, 1000);

    //Scroll to element
    //const ele = await page.getByText('Powerful tooling');
    //await ele.scrollIntoViewIfNeeded();

    //Scroll to bottom

    await page.evaluate(()=>{

    window.scrollTo(0, document.body.scrollHeight);

   })
     await page.waitForTimeout(5000);

   //Scroll to Top
   await page.evaluate(()=>{

    window.scrollTo(0, 0);

   })

    await page.waitForTimeout(5000);

})