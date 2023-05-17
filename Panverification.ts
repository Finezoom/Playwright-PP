import {Page, expect} from "@playwright/test";
export default class panverification{
    constructor(public page : Page){

    }
    async PanNumber(PanNo :string){
        await this.page.getByLabel('PAN Number *').fill(PanNo)
    }
    async opencalender(){
        await this.page.getByRole('button', { name: 'Open calendar' }).click()
    }
    async monthYear(){
        await this.page.getByRole('button', { name: 'Choose month and year' }).click()  
    }
    async previous24(){
        await this.page.getByRole('button', { name: 'Previous 24 years' }).click()
    }
    async y1994(){
        await this.page.getByRole('button', { name: '1994' }).click()
    }
    async june1994(){
        await this.page.getByRole('button', { name: 'June 1994' }).click()
    }
    async june10(){
        await this.page.getByRole('button', { name: '10 June 1994', exact: true }).click()
    } 
    async checkbox(){
        await this.page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
    } 
    async button(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click()

    }
    async may2023(){
        await this.page.getByRole('button', { name: '10 May 2023', exact: true }).click()
    }
    async DOBValidation(){
        await expect(this.page.getByText('DOB should be greater than 18 years')).toHaveText('DOB should be greater than 18 years')
    }
    async OKButton(){
        await this.page.getByRole('button', { name: 'OK' }).click()
    }
    async DisabledButton(){
        await expect(this.page.getByRole('button', { name: 'Edit Record' })).toBeDisabled()
    }
    async NameMismatch(){
        await expect(this.page.getByText('Name entered does not match with details received from PAN, please correct the n')).toHaveText('Name entered does not match with details received from PAN, please correct the name or PAN number to proceed')
    }
}