import { test, expect } from '@playwright/test';

test('User should successfully login', async({page}) => {

    await page.goto("https://saucedemo.com/");

// Web element locator or test object
await page.locator('[data-test="username"]').fill('standard_user');
await page.locator('[data-test="password"]').fill('secret_sauce');
await page.locator('[data-test="login-button"]').click();

const swagLabsText = page.getByText('Swag Labs');
await expect(swagLabsText).toBeVisible();
await expect(swagLabsText).toHaveText('Swag Labs');

await page.screenshot({ path: 'screenshotko.png', fullPage: true });
});
