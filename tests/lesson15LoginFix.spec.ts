import {test, expect} from '../fixtures/loginfixture'

test('Validate PageTitle', async ({loggedinpage})=>{
    
    await expect(loggedinpage).toHaveURL('https://www.saucedemo.com/inventory.html');
    await loggedinpage.getByText('Sauce Labs Backpack').click();
    await loggedinpage.waitForTimeout(5000);
})

test('Add Cart', async ({loggedinpage})=>{

    await expect(loggedinpage).toHaveURL('https://www.saucedemo.com/inventory.html');
    await loggedinpage.locator('#add-to-cart-sauce-labs-backpack').click();
    await loggedinpage.waitForTimeout(5000);
})