import { FullConfig, chromium } from "@playwright/test";

async function globalSetup(config: FullConfig){
    const browser = await chromium.launch();
    const page = await browser.newPage();

    
    await page.goto('https://practice.sdetunicorns.com/')
    await page.context().storageState({path: 'notloggedInState.json'});

    // login
    await page.locator('#zak-primary-nav li[id*=menu-item-619]').click()
    await page.locator('#username').fill('practiceuser1')
    await page.locator('#password').fill('PracticePass1!')
    await page.locator('[value="Log in"]').click()

    // save signed-in state to 'loggedInState.json'
    await page.context().storageState({path: 'loggedInState.json'});
    await browser.close();
}

export default globalSetup