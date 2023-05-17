import {Page} from "@playwright/test";
export default class operartionallogin{
    constructor(public page : Page){

    }

    async orgcode(orgcode:string){
        await this.page.getByRole('textbox', { name: 'orgCode' }).fill(orgcode)
    }
    async id(id: string){
        await this.page.getByRole('textbox', { name: 'loginId' }).fill(id)
        }
    async password(password:string){
        await this.page.getByLabel('Password *').fill(password)
    }
    async signin(){
        await this.page.getByRole('button', { name: 'Sign In' }).click()
    }
    async bookings(){
        await this.page.getByRole('heading', { name: 'Bookings' }).click()
    }
    async search(){
        await this.page.getByRole('button').filter({ hasText: 'search' }).click()
    } 
     async mobileno(mobileno :string){
        await this.page.getByLabel('Mobile Number').fill(mobileno)
    }
    async searchbutton(){
        await this.page.getByRole('button', { name: 'Search' }).click()
    }
    async edit(){
        await this.page.getByRole('button').filter({ hasText: 'edit' }).click()
    }
    async selectstage(){
        await this.page.getByText('Select stage to skip').click()
    }
    async hunterfraud(){
        await this.page.getByRole('option', { name: 'Hunter Fraud Check' }).getByText('Hunter Fraud Check').click()
    }
    async score(){
        await this.page.getByLabel('Score').fill('900')
    }
    async decision(){
        await this.page.getByText('Decision').fill('APPROVE')
    }
    async status(){
        await this.page.getByLabel('Status', { exact: true }).fill('Y')
    }
    async submit(){
        await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Save' }).getByRole('button', { name: 'Edit Record' }).click()
    }
    async eligibility(){
        await this.page.getByRole('option', { name: 'Eligibility' }).click()
    }
    async eligibilitydropdown(){
        await this.page.getByRole('combobox', { name: 'Eligibility R' }).locator('div').nth(2).click()
    }
    async option(){
        await this.page.getByRole('option', { name: 'Y' }).locator('span').first().click()
    }
    async creditscore(){
        await this.page.getByText('Credit Limit').fill('200000')
    }
    
}