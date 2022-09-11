import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Homepage and verify title', async ({page}) => {
        // open url
        await page.goto('https://practice.automationbro.com/');

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – Automation Bro')
    })

    test('Open aboutpage and verify title', async ({page}) => {
        // open url
        await page.goto('https://practice.automationbro.com/about/');

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
})