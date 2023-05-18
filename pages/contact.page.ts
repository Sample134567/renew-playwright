import { Locator, Page } from "@playwright/test";

class ContactPage {
    private page: Page;
    nameInput: Locator;
    emailInput: Locator;
    contactInput: Locator;
    textAreaInput: Locator;
    submitBtn: Locator;
    success: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator('.contact-name input')
        this.emailInput = page.locator('.contact-email input')
        this.contactInput = page.locator('.contact-phone input')
        this.textAreaInput = page.locator('.contact-message textarea')
        this.submitBtn = page.locator('button[type=submit]')
        this.success = page.locator('div[role="alert"]')
    }

    async navigate() {
        await this.page.goto('/contact/');
    }

    async submitForm(name: string, email:string, phone:string, message:string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.contactInput.fill(phone);
        await this.textAreaInput.fill(message);
        this.submitBtn.click()
        
    }
}

export default ContactPage;