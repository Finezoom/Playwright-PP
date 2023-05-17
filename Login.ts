import {Page,expect} from "@playwright/test";
export default class loginPage{
    constructor(public page : Page){

    }

    async city(){
        await this.page.getByText('Bengaluru', { exact: true }).click()
    }
    async loginMain(){
        await this.page.getByRole('button', { name: 'Login ' }).click()
        }
    async login(){
        await this.page.getByRole('button', { name: 'Login', exact: true }).click()
    }
    async mobilenumber(phone1: string){
        await this.page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill(phone1)
    }
    async getotp(){
        await this.page.getByRole('button', { name: 'Get OTP' }).click()
    } 
    async Disabledgetotp(){
        await expect(this.page.getByRole('button', { name: 'Get OTP' })).toBeDisabled()
    } 
    async otp(){
        for (let i = 1; i <= 6; i++) {
            await this.page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
          }
    }
    async loginOtp(){
        await this.page.getByRole('button', {name:'Login', exact:true}).click()
    }
    async errorMessageUnregisteredMobileNo(){
        await expect(this.page.getByText('Please Enter Valid Registered Mobile Number.')).toHaveText("Please Enter Valid Registered Mobile Number.")
    }
    async OKButton(){
        await this.page.getByRole('button', { name: 'OK' }).click()
    }
}
