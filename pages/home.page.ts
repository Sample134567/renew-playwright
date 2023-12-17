import { Page, Locator } from '@playwright/test';

class HomePage {
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.homeLink = page.locator('#primary-menu:has-text("Home")');
        this.searchIcon = page.locator('#zak-masthead div.zak-header-col.zak-header-col--2 > div.zak-header-actions.zak-header-actions--desktop ');
        this.navLinks = page.locator('#zak-primary-nav li[id*=menu]');
    }

    async navigate() {
        await this.page.goto('/');
    }

    getNavLinksText() {
        return this.navLinks.allTextContents()
    }
}

export default HomePage;