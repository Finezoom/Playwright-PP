import {test,expect,chromium} from "@playwright/test"
import loginPage from "../PageObjectForQuiklyz/Login"
import FindCar from "../PageObjectForQuiklyz/FindCar";
import panverification from "../PageObjectForQuiklyz/Panverification";
import addresscheck from "../PageObjectForQuiklyz/AddressCheck";
import bankstatement from "../PageObjectForQuiklyz/bankstatement";
import operartionallogin from "../PageObjectForQuiklyz/Operationallogin";
import tokenpayment from "../PageObjectForQuiklyz/Tokenpayment";
import payu from "../PageObjectForQuiklyz/PayU";

const baseurl = 'https://sit.quiklyz.com/';
const loginurl = 'https://uat.quiklyz.com/login'
const findCarsUrl = 'https://uat.quiklyz.com/car-lease-search';
const carUrl = 'https://uat.quiklyz.com/car-detail/MarutiSuzuki-Swift-Lxi-Petrol-Manual';
const eligibilityUrl = 'https://uat.quiklyz.com/car-leasing/check-eligibility'

test('Test successful completion of car leasing flow until eligibility check', async ({ page}) => {
    const login = new loginPage(page)
    const findcar = new FindCar(page)
    const pan = new panverification(page)
    const address = new addresscheck(page)
    const bank = new bankstatement(page)

    await page.goto(baseurl)
    await login.city()
    //await expect(page).toHaveURL(baseurl)

    await login.loginMain()
    await login.login()
   // await expect(page).toHaveURL(loginurl)

    await login.mobilenumber("9921110623")
    await login.getotp()
    await login.otp()
    await login.loginOtp()
    //await expect(page).toHaveURL(findCarsUrl)
/*
//Find Car
await findcar.findcar()

//select car
//await findcar.swift()
await findcar.baleno()

//select varient
await findcar.varient()
await findcar.manual()
//await findcar.automatic()

//select teneure
await page.waitForTimeout(10000)
await findcar.tenuredropdown()
await findcar.tenure24()
//await findcar.tenure36()

//select km
await findcar.kmmeterdrodown()
//await findcar.km15000()
await findcar.km20000()

// select colour
await findcar.colourdropdown()
await findcar.GrandeurGrey()
//await findcar.OpulentRed()

await findcar.checkELigibilitybutton()
//await expect(page).toHaveURL(eligibilityUrl)

// PAN VERIFIATTION
await pan.PanNumber("AQVPT9014E")
await pan.opencalender()
await pan.monthYear()
await pan.previous24()
await pan.y1994()
await pan.june1994()
await pan.june10()
await pan.checkbox()
await pan.button()

// Address Check
await address.address("Plot no.57, Mahalaxmi colony apte nagar Kolhapur")
await address.pincode("416012")
await address.city("kolhapur")
await address.state()
await address.maharashtra()
await address.continue()
*/
//bank statement upload
//await bank.selfemployed()
await bank.continue()
await bank.checkbox1()
await bank.continue1()
await bank.selectbank()
await bank.indianoverseas()
await bank.enter()
await bank.continue2()
await page.waitForTimeout(10000)

const [uploadFiles] = await Promise.all([
    page.waitForEvent('filechooser'),
  await bank.browse()
  ])
  uploadFiles.setFiles("tests/uploadFile/Tamil IOB MAY.pdf");

  await bank.submit()
  await page.waitForTimeout(10000)
  await bank.imdone()
  await page.waitForTimeout(5000)
})
test('skip in operation login', async ({page}) => {
const operational =new operartionallogin(page)
    await page.goto("https://sit.quiklyz.com/operation/")
    await operational.orgcode("MMFSL")
    await operational.id("user03")
    await operational.password("1234")
    await operational.signin()
    await operational.bookings()
    
    //Skip Hunter fraud check
    await operational.search()
    await operational.mobileno("9921110623")
    await operational.searchbutton()
    await operational.edit()
    await operational.selectstage()
    await operational.hunterfraud()
    await operational.score()
    await operational.decision()
    await operational.status()
    await operational.submit()

    //Skip Eligibility
    await operational.search()
    await operational.mobileno("9921110623")
    await operational.searchbutton()
    await operational.edit()
    await operational.selectstage()
    await operational.eligibility()
    await operational.eligibilitydropdown()
    await operational.option()
    await operational.creditscore()
    await operational.submit()
})
test('Verify that the user can able to do successful token payment', async ({page}) => { 
    const login = new loginPage(page)
const token = new tokenpayment(page)
const payU = new payu(page)

await page.goto(baseurl)
await login.city()
await login.loginMain()
await login.login()
//await expect(page).toHaveURL(loginurl)
await login.mobilenumber("9921110623")
await login.getotp()
await login.otp()
await login.loginOtp()
await page.waitForTimeout(10000)
await token.continue()
await page.waitForTimeout(10000)
await expect(page.getByText('Token Payment')).toHaveText('Token Payment')
await token.tokenpaymentbutton()

//PayU
await payU.cardnumber("5123456789012346")
await payU.name()
await payU.cvv("123")
await payU.expiryDate()
await payU.datemonth()
await payU.expiryyear()
await payU.year()
await payU.paynow()
await payU.password()
await payU.pay()
await page.waitForTimeout(7000)
})