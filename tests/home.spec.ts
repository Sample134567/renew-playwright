import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
test.describe('Home', () => {
    let homePage: HomePage;

    test('Open Homepage and verify title', async ({ page }) => { 
        homePage = new  HomePage(page);
        // open url
        await homePage.navigate();

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    })

    test('Open about page and verify title', async ({ page }) => {
        // open url
        await homePage.navigate();

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })

    test('Click get started button using CSS Selector', async ({ page }) => {
        homePage = new  HomePage(page);

        // open url
        await homePage.navigate();

        // Type and click on the button
        //await page.locator('#get-started').click();
        await homePage.getStartedBtn.click(); 

        // Verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })


    test('Verify heading text is visible using text selector', async ({ page }) => {
        homePage = new  HomePage(page);
        // open url
        await homePage.navigate();

        // find the text locator
        const headingText = await homePage.headingText

        // Verify heading text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify my home link is enabled using text and css selector', async ({ page }) => {
        homePage = new  HomePage(page);
        // open url
        await homePage.navigate();

        // find the home text 
        const homeText = homePage.homeLink 
        
        // verify home text is visible
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        homePage = new  HomePage(page);
        // open url
        await homePage.navigate();

        // find search icon
        const searchIcon = homePage.searchIcon;

        // search icon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify the text for all nav links', async ({ page }) => {
        homePage = new  HomePage(page);
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        // open url
        await homePage.navigate();

        // Verify nav links text
        expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    })
})