import {test, expect, chromium} from "@playwright/test";
import RegisterPage from "../tests/PageObject/Register" 
import otpPage from "../tests/PageObject/otp"
import findCarPage from "../tests/PageObject/FindCar"
import eligibilityPage from "../tests/PageObject/Eligibility"
import * as data from "../tests/data/register.cred.json"


//test.describe.parallel('test', async() =>
//{
    test('test', async ({ page}) => {
    //const browser =await chromium.launch()
    //const context = await browser.newContext();
    //const page = await context.newPage()

    
const register = new RegisterPage(page)
const otp = new otpPage(page)
const findcar = new findCarPage(page)
const eligibility = new eligibilityPage(page)

await page.goto("https://uatcontainer.quiklyz.com")
await register.mumbai()
await register.login()
await register.newUser()

await register.enterFirstName(data.firstname)
await register.enterLastName(data.lastname)
await register.enterEmail(data.email)
await register.enterPhone(data.phone)

await register.privacyPolicy()
await register.registerButton()

await otp.otp1("1")
await otp.otp2("2")
await otp.otp3("3")
await otp.otp4("4")
await otp.otp5("5")
await otp.otp6("6")
await otp.otpContinueButton()

await findcar.findcar()
await findcar.chooseCar()
await findcar.checkELigibility()

await eligibility.pan("CVPPP2613E")
await eligibility.date1()
await eligibility.date2()
await eligibility.date3()
await eligibility.date4()
await eligibility.date5()
await eligibility.date6()
await eligibility.checkbox()
await eligibility.Continue()

})
//})