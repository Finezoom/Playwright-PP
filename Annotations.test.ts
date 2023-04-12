import {Browser, BrowserContext, Page, chromium} from "playwright";

declare const page: Page;
declare const reporter: any; 
describe("TutorialsNinja", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll( async() => {
        browser = await chromium.launch({
            headless: false
        });
        context = await browser.newContext({
            recordVideo: {
                dir: "./TestVideo/"
            }
        });
        page = await context.newPage();
        await page.goto("https://tutorialsninja.com/demo/");
    });
    test("Register", async () => {
        reporter
        .description("Feature should work cool")
        .story("BOND-007");
        await reporter.startStep("click on Myaccount");
        await page.click('//*[@id="top-links"]/ul/li[2]/a');
        await reporter.endStep();

        await reporter.startStep("click on Register");
        await page.click("text=Register");
        await reporter.endStep();

        await reporter.startStep("input FirstName");
        await page.fill('//*[@id="input-firstname"]',"Prafull");
        await reporter.endStep();

        await reporter.startStep("input lastname");
        await page.fill('//*[@id="input-lastname"]', "Patil");
        await reporter.endStep();

        await reporter.startStep("input Email");
        await page.fill('#input-email', "Parag12@gail.com");
        await reporter.endStep();

        await reporter.startStep("input phone");
        await page.fill('//*[@id="input-telephone"]',"9136203512");
        await reporter.endStep();

        await reporter.startStep("input pass");
        await page.fill('//*[@id="input-password"]', '12345678');
        await reporter.endStep();

        await reporter.startStep("input conf pass");
        await page.fill('//*[@id="input-confirm"]', '12345678');
        await reporter.endStep();

        await reporter.startStep("click checkbox1");
        await page.click('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input');
        await reporter.endStep();

        await reporter.startStep("click checkbox2");
        await page.click('//*[@id="content"]/form/div/div/input[1]');
        await reporter.endStep();

        await reporter.startStep("click register");
        await page.click('//*[@id="content"]/form/div/div/input[2]');
        await reporter.endStep();
    });

    test("Login", async () =>  {
        await page.click('//*[@id="top-links"]/ul/li[2]/a');
        await page.click("text=Login");
        await page.fill('//*[@id="input-email"]', "Parag12@gail.com" );
        await page.fill('//*[@id="input-password"]', "12345678");
        await page.click('//*[@id="content"]/div/div[2]/div/form/input');
    });

    afterEach(async () => {
        await page.screenshot({ path: Date.now() + 'screenshot.png' });
    });
    afterAll(async() => {
        await page.close();
        await context.close();
        await browser.close();
    });
});