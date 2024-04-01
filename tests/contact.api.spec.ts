import { test, expect, type Page, APIRequestContext } from '@playwright/test';
import { faker } from '@faker-js/faker';
import ContactPage from '../pages/contact.page';


test.describe('Contact', () => {
    let contactPage: ContactPage
    let fakerAPI: APIRequestContext

    test.beforeAll(async({playwright}) => {
        fakerAPI = await playwright.request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });

        const response = await fakerAPI.get('users');
        console.log(await response.json())
    })

    test('Fill contact form and verify success message', async ({page}) => {
        contactPage = new ContactPage(page)
        
        // open contact page
        await contactPage.navigate()

        // fill out input fields
       contactPage.submitForm(faker.person.firstName(), 
       faker.internet.email(), 
       faker.phone.number(), 
       faker.lorem.paragraphs(2))
       
        // verify success message
        await expect(contactPage.success).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    })
})