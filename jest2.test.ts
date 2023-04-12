import {chromium} from "playwright";
describe('Launch Browser', () => {
    test ('open Letcode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context =await browser.newContext({
            recordVideo: {
                dir: "./TestVideo/"
            }
        });
        const page = await context.newPage();
        await page.goto('https://tutorialsninja.com/demo/')
        await page.click('//*[@id="top-links"]/ul/li[2]/a')
        await page.click("text=Register")
        await page.fill('//*[@id="input-firstname"]',"Prafull")
        await page.fill('//*[@id="input-lastname"]', "Patil")
        await page.fill('#input-email', "Parag12@gail.com")
        await page.fill('//*[@id="input-telephone"]',"9136203512")
        await page.fill('//*[@id="input-password"]', '12345678')
        await page.fill('//*[@id="input-confirm"]', '12345678')
        await page.click('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input')
        await page.click('//*[@id="content"]/form/div/div/input[1]')
        await page.click('//*[@id="content"]/form/div/div/input[2]')
        await browser.close()
    })
})