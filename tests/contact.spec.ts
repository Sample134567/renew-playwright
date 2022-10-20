import { test, expect, type Page } from '@playwright/test';

test.describe('Contact', () => {
    test('Fill contact form and verify success message', async ({page}) => {
        // open contact page
        await page.goto('https://practice.automationbro.com/contact/');

        // fill out input fields
        await page.locator('.contact-name input').fill('This is test name');
        await page.locator('.contact-email input').fill('test@yahoo.com');
        await page.locator('.contact-phone input').fill('0212345678');
        await page.locator('.contact-message textarea').fill('This is a test message only');
        
        // add soft assertion
        await expect.soft(page.locator('.contact-message textarea')).toHaveText("Fail test message")

        // click submit
        await page.locator('button[type=submit]').click();

        // verify success message
        const successAlert = page.locator('div[role="alert"]')
        await expect(successAlert).toHaveText(' for contacting us! We will be in touch with you shortly')
    })
})