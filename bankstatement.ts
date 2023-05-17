import {Page} from "@playwright/test";
export default class bankstatement{
    constructor(public page : Page){

    }

    async selfemployed(){
        await this.page.getByText('Self - Employed').click();
    }
    async continue(){
        await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[5]/div/fg-custom-container/div/div/div[1]/div/fg-custom-container/div/div/div[4]/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div/div/fg-single-action/fg-action-builder-actions/button')
        }
    async checkbox1(){
        await this.page.locator('//*[@id="mat-checkbox-7"]/label/span[1]').click()
    }
    async continue1(){
        await this.page.getByRole('button', { name: 'Continue' }).click()
    }
    async selectbank(){
        await this.page.frameLocator('iframe').locator('div').filter({ hasText: /^Select Bank$/ }).nth(1).click();
    }
    async indianoverseas(){
        await this.page.frameLocator('iframe').locator('#react-select-2-input').fill('Indian Overseas Bank');
    } 
     async enter(){
        await this.page.frameLocator('iframe').locator('#react-select-2-input').press('Enter');
    }
    async continue2(){
        await this.page.frameLocator('iframe').getByRole('button', { name: 'Continue' }).click()
    }
    async browse(){
        await this.page.frameLocator('iframe').getByRole('button', { name: 'Browse' }).click()
    }
    async submit(){
        await this.page.frameLocator('iframe').getByRole('button', { name: 'Submit' }).click();
    }
    async imdone(){
        await this.page.frameLocator('iframe').getByRole('button', { name: 'I\'m don' }).click();
    }
}