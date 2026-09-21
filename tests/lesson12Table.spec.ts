import {test, expect} from '@playwright/test'

test('Table' , async ({page, context})=>{

    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/');

    const colHeaders = await page.locator('table thead tr th');

    await expect(colHeaders).toHaveCount(4);
    const totalColumns = await colHeaders.count();
    
    for(let i=0; i < totalColumns; i++)
    {
        const headerName = await colHeaders.nth(i).textContent();
        console.log(headerName);

    }

    const tablerows = await page.locator('table tbody tr');
     await expect(tablerows).toHaveCount(10);
    const rowcount = await tablerows.count();
    console.log(rowcount);
   
    for(let i = 0; i < rowcount; i++)
    {
         const cellData = await tablerows.nth(i).locator("td").nth(2).textContent()
        console.log(cellData);
    }



    for(let i = 0; i < rowcount; i++)
    {
         const cellData = await tablerows.nth(i).locator("td").nth(0).textContent()
         if(cellData === 'C. Kelly')
         {
            const result = await tablerows.nth(i).locator("td").nth(1).textContent();
            console.log(result)
            break;
         }
    }
    
    await page.waitForTimeout(5000);
})
