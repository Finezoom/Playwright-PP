import { test, expect } from '@playwright/test';

test('test', async({page}) =>{
await page.goto("https://www.google.com/account/about/")
 
//Printinng current url
console.log(page.url());
//await page.getByRole('link',{name:'Privacy tools'}).click();

const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Privacy tools'")

])
console.log(newWindow.url())
//await newWindow.click("//*[@id='yDmH0d']/c-wiz/div/div[2]/div/c-wiz/c-wiz/div/div[1]/div[3]/c-wiz/nav/ul/li[2]/a/div[2]")
await newWindow.click("//*[@id='yDmH0d']/c-wiz/div/div[2]/div/c-wiz/c-wiz/div/div[3]/div/div/c-wiz/section/div[1]/div/div/div/div/div/div/div[3]/div/div/a")
//console.log(page.url())
await page.getByRole('link', {name : 'Go to Google Account'}).click()
})