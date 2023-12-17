import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['logotitle.png', '3mb-file.pdf']

    for(const name of fileName){
        test(`should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);
    
            // open url
            await cartPage.navigate();
    
            // store test file path
            const filePath = path.join(__dirname, `../data/${name}`);
    
            cartPage.uploadComponent().uploadFile(filePath);
    
            // assertion
            await expect(cartPage.uploadComponent().successTxt)
          .toContainText('uploaded successfully', {timeout: 20000});
    
        })
    }
    
    test.skip('should upload a test file hidden input field', async ({ page }) => {
        // open url
        await page.goto('/cart/');

        // store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

        // DOM manipulation
        await page.evaluate(() => {
            const selector = document.querySelector('#upfile_1');
            if(selector) {
                selector.className = ''
            }
        }) 
        
        // upload test file
        await page.setInputFiles('input#upfile_1', filePath); // throws error

        // click the submit button
        await page.locator('#upload_1').click();

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully');
    })

    test.skip('Upload pdf file', async ({ page }) => {
        // open url
        await page.goto('https://practice.automationbro.com/cart/');

        // store test file path
        const filePath = path.join(__dirname, '../data/3mb-file.pdf');

        // upload test file
        await page.setInputFiles('input#upfile_1', filePath);

        // click the submit button
        await page.locator('#upload_1').click();

        // hard coded sleep
        // await page.waitForTimeout(5000);

        // wait for condition
        await page.locator('#wfu_messageblock_header_1_1').waitFor({state: 'visible', timeout: 10000 }) 

        // assertion
        await expect(page.locator('#wfu_messageblock_header_1_1')).toContainText('uploaded successfully', {timeout: 10000});

    })
});