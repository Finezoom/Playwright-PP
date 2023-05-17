import {Page} from "@playwright/test";
export default class tokenpayment{
    constructor(public page : Page){

    }
    async continue(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click()
    }
    async tokenpaymentbutton(){
        await this.page.locator('.mat-card-content > div > div:nth-child(3) > div > .row > .col-md-12').click()
        }
}