import { test, expect, type Page } from '@playwright/test';
import BlogPage from '../pages/blog.page';

test.describe('Blog', () => {
    let blogPage: BlogPage;

    test('Verify recent posts count and verify the lenght of each list item', async ({page}) => {
        blogPage = new BlogPage(page);

        // open blog page
        await blogPage.navigate()

        // loop through the list and assert the char length > 10
        for (const element of await blogPage.recentPostsList.elementHandles()) {
            expect(((await element.textContent())!.trim())?.length).toBeGreaterThan(10)
        }

        // assert the total length == 5
        expect(await blogPage.recentPostsList.count()).toEqual(5)
    })
})
