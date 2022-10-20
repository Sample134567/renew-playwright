import { test, expect, type Page } from '@playwright/test';

test.describe('Contact', () => {
    test('Verify recent posts count and verify the lenght of each list item', async ({page}) => {

        // open blog page
        await page.goto('https://practice.automationbro.com/blog/');

        // get the recent post list elements
        const recentPostList = page.locator('#recent-posts-3 ul li');

        // loop through the list and assert the char length > 10
        for (const element of await recentPostList.elementHandles()) {
            expect(((await element.textContent())?.trim())?.length).toBeGreaterThan(10)
        }

        // assert the total length == 5
        expect(await recentPostList.count()).toEqual(5)
    })
})