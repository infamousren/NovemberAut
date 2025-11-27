import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-email').click();
  await page.getByTestId('royal-email').fill('--');
  await page.getByTestId('royal-pass').click();
  await page.getByTestId('royal-pass').press('CapsLock');
  await page.getByTestId('royal-pass').fill('F');
  await page.getByTestId('royal-pass').press('CapsLock');
  await page.getByTestId('royal-pass').fill('--');
  await page.getByTestId('royal-login-button').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('V');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('--');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Log In' }).click();
});
