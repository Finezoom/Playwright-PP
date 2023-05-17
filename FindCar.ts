import {Page} from "@playwright/test";
export default class {
    constructor(public page : Page){

    }
    async findcar(){
        await this.page.getByRole('link', { name: 'Find Cars' }).click()
    }
    async swift(){
        await this.page.getByRole('link', { name: 'Maruti Suzuki Swift' }).click()
    }
    async checkELigibilitybutton(){
        //await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[8]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button')
        await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[10]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button')
    }
    async baleno(){
        await this.page.getByRole('link', { name: 'Maruti Suzuki Baleno' }).click()
    }
    async varient(){
        await this.page.locator('a').filter({ hasText: 'Sigma' }).first().click()
    }
    async manual(){
        //await this.page.getByRole('link', { name: 'Baleno Sigma Petrol Manual Metallic Active' }).click()
        await this.page.getByRole('link', {name: 'Baleno Sigma Petrol Manual'}).click()
    }
    async automatic(){
        await this.page.getByRole('link', { name: 'Baleno Delta Petrol Automatic Metallic Active' }).click()
    } 
    async tenuredropdown(){
        //await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[3]/div/div[1]/div[2]/div/div[2]/div/fg-select/div/div/div/div/mat-form-field/div/div[1]/div[3]')
   // await this.page.locator('#mat-select-value-1').click()
   //await this.page.locator('div > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click()
   await this.page.click('//*[@id="mat-select-value-1"]')
} 
    async tenure24(){
        await this.page.getByText('24', { exact: true }).click()
    } 
    async tenure36(){
        await this.page.getByText('36', { exact: true }).click()
    } 
    async kmmeterdrodown(){
        await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[4]/div/div[1]/div[1]/div/div[2]/div/fg-select/div/div/div/div/mat-form-field/div/div[1]/div[3]')
    }
    async km15000(){
        await this.page.getByText('15,000 km/year').click()
    }
    async km20000(){
        await this.page.getByText('20,000 km/year').click()
    }
    async colourdropdown(){
        await this.page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[4]/div/div[1]/div[2]/div/div[2]/div/fg-custom-container/div/div/div/div/fg-colorpalette-field/div/mat-form-field/div/div[1]/div[3]')
    }
    async GrandeurGrey(){
        await this.page.getByText('Grandeur Grey').click()    
    }
    async OpulentRed(){
        await this.page.getByText('Opulent Red').click()
    } 

}