import { test, expect } from '@playwright/test';
interface User{
    Firstname : string;
    Lastname : string;
    Email : string;
    Password : string;
    Confirmpassword : string;
}

var register : User[] = [
    {Firstname : 'Raj', Lastname : 'Pujari', Email : 'R123@gmail.com', Password : 'A%12345', Confirmpassword : 'A%12345' },
    {Firstname: 'Parag', Lastname : 'Sawant', Email : 'p1245@.com', Password : 'B@12345', Confirmpassword : 'B@12345'  },
    {Firstname : 'Prafull', Lastname : 'Pujari', Email : 'o123@gmail.com', Password : 'A%12345', Confirmpassword : 'c%12345' },
    {Firstname : '&Raj', Lastname : 'Pujari123', Email : 'z123@gmail.com', Password : 'z%12345', Confirmpassword : 'z%12345' }

]
test('has title', async ({ page }) => {
for (var User of register) {
await page.goto("https://magento.softwaretestingboard.com/");
await page.getByRole('link', {name : 'Create an Account'}).click();
await page.fill('#firstname', User.Firstname);
await page.fill('#lastname', User.Lastname);
await page.locator('[id="is_subscribed"]').click();
await page.fill('#email_address', User.Email);
await page.fill('#password', User.Password);
await page.fill('#password-confirmation', User.Confirmpassword);
await page.click("//*[@id='form-validate']/div/div[1]/button");
}
})
 


