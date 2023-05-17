import {Page,expect} from "@playwright/test";
export default class Register{
    constructor(public page : Page){

    }
    async newUser(){
        await this.page.getByRole('menuitem', { name: 'New user? Start here' }).click()
    }
    async firstName(first:string){
        await this.page.getByRole('textbox', { name: 'First Name' }).fill(first)
    }
    async validFirstName(){
        await expect(this.page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter a valid first name')).toHaveText("Enter a valid first name")
    }
    async lastName(last:string){
        await this.page.getByRole('textbox', { name: 'Last Name' }).fill(last)
    }
    async validLastName(){
        await expect(this.page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter a valid last name')).toHaveText("Enter a valid last name")
    }
    async emailAddress(email:string){
        await this.page.getByRole('textbox', { name: 'Email Address' }).fill(email)
    }
    async validEmailAddress(){
        await expect(this.page.getByRole('tabpanel', { name: 'Register' }).getByText('Please enter valid value for Email Address')).toHaveText("Please enter valid value for Email Address")
    }
    async phone(phoneNo:string){
        await this.page.getByRole('textbox', { name: 'Enter your Mobile Number' }).fill(phoneNo)
    }
    async validPhone(){
        await expect(this.page.getByRole('tabpanel', { name: 'Register' }).getByText('Enter your Mobile Number must be 10 characters')).toHaveText("Enter your Mobile Number must be 10 characters")
    }
    async checkbox(){
        await this.page.locator('.mat-checkbox-inner-container').first().click()
    }
    async registerButton(){
        await this.page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' })
    }
    async DisabledregisterButton(){
        await expect(this.page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' })).toBeDisabled()
    }
}