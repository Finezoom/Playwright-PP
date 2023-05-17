import {Page} from "@playwright/test";
export default class addresscheck{
    constructor(public page : Page){

    }
    async address(address :string){
        await this.page.getByLabel('Address *').fill(address)
    }
    async pincode(pin:string){
        await this.page.getByLabel('PIN Code *').fill(pin)
    }
    async city(city:string){
        await this.page.getByLabel('City *').fill(city) 
    }
    async state(){
        await this.page.getByText('State *').click()
    }
    async maharashtra(){
        await this.page.getByRole('option', { name: 'Maharashtra' }).click()
    }
    async continue(){
       await  this.page.getByRole('button', { name: 'Edit Record' }).click()
    }
   
}
