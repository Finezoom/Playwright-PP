import {Page} from "@playwright/test";

const baseUrl = 'https://uat.quiklyz.com/';
const loginUrl = 'https://uat.quiklyz.com/login'

export default class payu{
    constructor(public page : Page){
    }
    async cardnumber(card: string){
        await this.page.getByRole('textbox', { name: 'Card Number' }).fill(card)
    }
    async name(){
    await this.page.getByLabel('Select your card').fill('Any Name Card')
    }
    async cvv(cvv: string){
    await this.page.getByRole('textbox', { name: 'CVV Number' }).fill(cvv)
    }
    async expiryDate(){
    await this.page.locator('#cexpiry_date_month').click()
    }
    async datemonth(){
    for (let i = 0; i < 5; i++) 
    {
    await this.page.keyboard.press('ArrowDown');
    }
    }
     async expiryyear(){
    await this.page.locator('#cexpiry_date_year').click()
    }
    async year(){
    for(let n=0; n<3 ; n++)
    {
    await this.page.keyboard.press('ArrowDown')
    }
    }
    async paynow(){
    await this.page.getByRole('button', { name: 'Pay Now' }).click()
    }  
    async password(){
    await this.page.locator('#password').fill('123456')
    }
    async pay(){
    await this.page.getByRole('button', { name: 'PAY' }).click()
    }  
}