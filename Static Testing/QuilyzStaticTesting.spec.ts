import {test, expect} from "@playwright/test"
test('Static Comparison of Quiklyz Base Page ', async ({page}) =>{

  await page.goto("https://uat.quiklyz.com/")
 

  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("BasePage.png")

})
test('Static Comparison of Quiklyz Home Page ', async ({page}) =>{

    await page.goto("https://uat.quiklyz.com/")
    await page.locator('[class="Chennai col-md ng-star-inserted"]').click();
    await page.pause()
   
    expect(await page.screenshot({
      fullPage:true,mask:[page.locator(' //*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[1]/div/fg-custom-container/div/div/div/div/fg-client-carousel/div/div/div/div[1]/div/ul/li[3]/div/div[1]/div/img')]
    })).toMatchSnapshot("Home.png")

   
})
test('Static Comparison of Quiklyz Find Car Page ', async ({page}) =>{  

  await page.goto('https://uat.quiklyz.com/car-lease-search', { waitUntil: 'networkidle' });
 
  expect(await page.screenshot({
    fullPage:true,mask: [page.locator('//div[@class="container-fluid bluev2 findcardetail card-default fgcustomcontainer ng-star-inserted"]')]
  })).toMatchSnapshot("find.png")

  //await page.waitForTimeout(5000);
//await expect(page).toHaveScreenshot('find.png',{ fullPage: true ,mask: [page.locator('//div[@class="container-fluid bluev2 findcardetail card-default fgcustomcontainer ng-star-inserted"]')]} );
})
test('Static Comparison of Quiklyz FAQs Page ', async ({page}) =>{  

  await page.goto('https://uat.quiklyz.com/car-lease-faqs-india', { waitUntil: 'networkidle' });
 
  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("FAQsPage.png")

  //await page.waitForTimeout(5000);
//await expect(page).toHaveScreenshot('find.png',{ fullPage: true ,mask: [page.locator('//div[@class="container-fluid bluev2 findcardetail card-default fgcustomcontainer ng-star-inserted"]')]} );
})
test('Static Comparison of Quiklyz Register Page ', async ({page}) =>{  

  await page.goto('https://uat.quiklyz.com/', { waitUntil: 'networkidle' });
  await page.getByText('Bengaluru', { exact: true }).click()
  await page.getByRole('button', { name: 'Login ' }).click()
  await page.getByRole('menuitem', { name: 'New user? Start here' }).click()
  await page.waitForTimeout(5000)
  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("RegisterPage.png")
})
test('Static Comparison of Quiklyz Login Page ', async ({page}) =>{  
  await page.goto('https://uat.quiklyz.com/', { waitUntil: 'networkidle' });
  await page.getByText('Bengaluru', { exact: true }).click()
  await page.getByRole('button', { name: 'Login ' }).click()
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await page.waitForTimeout(5000)
expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("LoginPage.png")
})
test('Static Comparison of Quiklyz Pan Verification Page', async ({page}) =>{  
  await page.goto('https://uat.quiklyz.com/', { waitUntil: 'networkidle' });
  
  await page.getByText('Bengaluru', { exact: true }).click()
  await page.getByRole('button', { name: 'Login ' }).click()
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203446")
  await page.getByRole('button', { name: 'Get OTP' }).click()
  for (let i = 1; i <= 6; i++) {
    await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
  }
  await page.getByRole('button', {name:'Login', exact:true}).click()
  await page.getByRole('link', { name: 'Find Cars' }).click()
  await page.getByRole('link', { name: 'Maruti Suzuki Swift' }).click()
  await page.waitForTimeout(2000)
  //await page.click('//*[@id="main-content-wrapper"]/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[2]/div/fg-custom-container/div/div/div/div/div[1]/div/div/div[2]/div/fg-custom-container/div/div/div[1]/div/div[1]/div[3]/div/div/div/fg-custom-container/div/div/div/div/fg-card/div/mat-card/mat-card-content/div/div[10]/div/div[1]/div[1]/div/div[1]/div/fg-custom-container/div/div/div/div/fg-single-action/fg-action-builder-actions/button')
  await page.locator('mat-card-content').filter({ hasText: 'Maruti Suzuki Swift Petrol Manual Metallic Select Variant Lxi Select Variant Pet' }).getByRole('button', { name: 'Edit Record' }).click()
 await page.waitForTimeout(20000)
  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("PanVerificationPage.png")
})
test('Static Comparison Testing of Quiklyz Address Check Page', async ({page}) =>{  
  await page.goto('https://uat.quiklyz.com/', { waitUntil: 'networkidle' });
  
  await page.getByText('Bengaluru', { exact: true }).click()
  await page.getByRole('button', { name: 'Login ' }).click()
  await page.getByRole('button', { name: 'Login', exact: true }).click()
  await page.getByRole('tabpanel', { name: 'Login' }).getByText('Enter Mobile Number').fill("9126203446")
  await page.getByRole('button', { name: 'Get OTP' }).click()
  for (let i = 1; i <= 6; i++) {
    await page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
  }
  await page.getByRole('button', {name:'Login', exact:true}).click()

  await page.waitForTimeout(2000)
  await page.getByLabel('PAN Number *').fill('AQVPT9014E')
await page.getByRole('button', { name: 'Open calendar' }).click()
await page.getByRole('button', { name: 'Choose month and year' }).click()
await page.getByRole('button', { name: 'Previous 24 years' }).click()
await page.getByRole('button', { name: '1994' }).click()
await page.getByRole('button', { name: 'June 1994' }).click()
await page.getByRole('button', { name: '10 June 1994', exact: true }).click()
await page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
await page.getByRole('button', { name: 'Edit Record' }).click()
await page.waitForTimeout(20000)
  expect(await page.screenshot({
    fullPage:true
  })).toMatchSnapshot("AddressCheckPage.png")
})
