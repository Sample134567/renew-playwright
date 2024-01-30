import {test, expect} from '@playwright/test'
import {ai} from '@zerostep/playwright'

test.describe('Test Website', async () => {
    test('Create user test', async ({page}) => {
        await page.goto('http://eaapp.somee.com/')

        await ai('Click on the Login link', {page, test})
        await ai('Enter the Username as admin', {page, test})
        await ai('Enter the Password as password', {page, test})
        await ai('Click on the login button', {page, test})
        await page.waitForURL('http://eaapp.somee.com')

        await ai('Click the Employee List link', {page, test}) 
        await page.waitForURL('http://eaapp.somee.com/Employee')
        await ai('Click and on the create new', {page, test})
        await page.waitForURL('http://eaapp.somee.com/Employee/Create')
        await ai('Fill out the form with realistic values', {page, test})
        await ai('Submit the form', {page, test})
        await expect(page).toHaveURL(/.*Index/);

        let value = await ai('Scroll down the page and get if the above filled realistic values', {page, test});
        expect(value).not.toBeNull();
    })
})