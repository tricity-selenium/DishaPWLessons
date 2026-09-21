import {test, expect} from '@playwright/test'

test('New Tab test' , async ({page, context})=>{

    await page.goto('https://www.youtube.com/@sdetpavan/playlists');

    await page.getByPlaceholder('Search').fill('playwright');

    await page.waitForSelector('.ytSuggestionComponentLeftContainer');

    const suggestions = await page.locator('.ytSuggestionComponentLeftContainer');
    const no_of_sug = await suggestions.count();

    for(let i = 0; i < no_of_sug ; i++ )
    {
        let suggestion = await suggestions.nth(i).textContent();
        expect(suggestion).toContain('playwright');

    }

    await page.waitForTimeout(5000);

})