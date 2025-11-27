import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('insert email/username');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('insert pw');
  await page.getByTestId('royal-login-button').click();
//need to duplicate test because of Facebook captcha
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('insert email/username');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').fill('insert pw');
  await page.getByTestId('royal-login-button').click();

 await page.goto('insert your profile link');
 await expect(page).toHaveURL('profile link');

});
