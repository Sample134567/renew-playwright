import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Homepage and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com/');

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    })

    test('Open about page and verify title', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com/about/');

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })

    test('Click get started button using CSS Selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com');

        // Type and click on the button
        await page.locator('#get-started').click();

        // Verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })


    test('Verify heading text is visible using text selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com');

        // find the text locator
        const headingText = page.locator('text=Think different. Make different.');

        // Verify heading text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify my home link is enabled using text and css selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com');

        // find the home text 
        // const homeText = await page.locator('#primary-menu >> text=Home');
        const homeText = page.locator('#primary-menu:has-text("Home")');


        // verify home text is visible
        await expect(homeText).toBeEnabled();
    })

    test('Verify search icon is visible using xpath selector', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com');

        // find search icon
        const searchIcon = page.locator('//*[@id="header-action"]//*[@class="tg-icon tg-icon-search"]');


        // search icon is visible
        await expect(searchIcon).toBeVisible();
    })

    test('Verify the text for all nav links', async ({ page }) => {
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];
        
        // open url
        await page.goto('https://practice.automationbro.com');

        // find the nav links
        const navLinks = page.locator('#primary-menu li[id*=menu]').nth(3)

        // Verify nav links text
        //expect(await navLinks.allTextContents()).toEqual("expectedLinks");
        expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
    })
})