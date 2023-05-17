import {test} from "@playwright/test"
import loginPage from "../PageObjectForQuiklyz/Login"
import panverification from "../PageObjectForQuiklyz/Panverification";
import RegisterPage from "../PageObjectForQuiklyz/Register";

const baseurl = 'https://uat.quiklyz.com/';

test('Verify the Register functionality  by providing first name', async ({page}) =>{
    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await register.newUser()
    await register.firstName("prafull@")
    await register.lastName("")
    await register.validFirstName()
})
test('Verify the Register functionality  by providing invalid last name', async ({page}) =>{
    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await register.newUser()
    await register.lastName("Patil$")
    await register.emailAddress("")
    await register.validLastName()
})
test('Verify the Register functionality  by providing invalid Email', async ({page}) =>{
    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await register.newUser()
    await register.emailAddress("Praful1@com")
    await register.phone("")
    await register.validEmailAddress()
})
test('Verify the Register functionality  by providing invalid mobile number', async ({page}) =>{
    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await register.newUser()
    await register.phone("912620345")
    await register.checkbox()
    await register.validPhone()
})
test('Verify the Login functionality  by providing unregistered mobile number', async ({page}) =>{

    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await login.login()
    await login.mobilenumber("9126203466")
    await login.getotp()
    await login.errorMessageUnregisteredMobileNo()
    await login.OKButton()
})
test('Verify the Login functionality by providing invalid mobile number', async ({page}) =>{
    const login = new loginPage(page)
    const register = new RegisterPage(page)
    const pan =  new panverification(page)

    await page.goto(baseurl)
    await login.city()
    await login.loginMain()
    await login.login()
    await login.mobilenumber("99778811")
    await login.Disabledgetotp()
    
})
test('Verify that the PanVerification field should not accept age below 18 years', async ({page}) => {
    const login = new loginPage(page)
    const pan = new panverification(page)

    await page.goto(baseurl)
    await login.city()

    await login.loginMain()
    await login.login()

    await login.mobilenumber("9126203452")
    await login.getotp()
    await login.otp()
    await login.loginOtp()

    await pan.PanNumber("AQVPT9014E")
    await pan.opencalender()
    await pan.may2023()
    await pan.checkbox()
    await pan.button()
    await pan.DOBValidation()
    await  pan.OKButton()
    
})
test('Verify that the Continue button is disabled when an invalid PAN number is entered', async ({page}) => {
    const login = new loginPage(page)
    const pan = new panverification(page)

    await page.goto(baseurl)
    await login.city()

    await login.loginMain()
    await login.login()

    await login.mobilenumber("9126203452")
    await login.getotp()
    await login.otp()
    await login.loginOtp()

    await pan.PanNumber("AQVPT9014")
await pan.opencalender()
await pan.monthYear()
await pan.previous24()
await pan.y1994()
await pan.june1994()
await pan.june10()
await pan.checkbox()
await pan.DisabledButton()
})
test('Verify Error Message for PAN Name Mismatch During Eligibility Check', async ({page}) => {
    const login = new loginPage(page)
    const pan = new panverification(page)

    await page.goto(baseurl)
    await login.city()

    await login.loginMain()
    await login.login()

    await login.mobilenumber("9126203452")
    await login.getotp()
    await login.otp()
    await login.loginOtp()

    await pan.PanNumber("AQVPT9014E")
await pan.opencalender()
await pan.monthYear()
await pan.previous24()
await pan.y1994()
await pan.june1994()
await pan.june10()
await pan.checkbox()
await pan.button()
await  page.waitForTimeout(2000)
await pan.NameMismatch()
})