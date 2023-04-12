import {chromium} from "playwright";
describe('Launch Browser', () => {
    test ('open Letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context =await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://uat.quiklyz.com/')
        await page.click('//*[@id="mat-dialog-0"]/fg-modal-dialog/form/div/div[2]/div/fg-modal-body/div/div[2]/div/fg-custom-container/div/div/div/div/fg-client-context-switcher/div/div[2]/div/div[1]/div[1]/div[2]')
        await page.click('//*[@id="toolbar-options"]/fg-client-logout-button/div/div/button')
        await page.click('//*[@id="mat-menu-panel-1"]/div/div/button[1]')

        await browser.close()
    })
})