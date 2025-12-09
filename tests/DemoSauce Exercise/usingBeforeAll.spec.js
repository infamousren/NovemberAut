import { test, expect } from '@playwright/test'

let page; // will be shared across tests

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage(); // create a page
  await page.goto('https://saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('User should be logged in', async() => {

await page.getByRole('button', { name: 'Open Menu' }).click();
const logoutText = page.getByText('Logout')
await expect(logoutText).toBeVisible();
await expect(logoutText).toHaveText('Logout')
});

test('Homepage should be correct', async() => {

const swagLabsText = page.getByText('Swag Labs')
await expect(swagLabsText).toBeVisible();
await expect(swagLabsText).toHaveText('Swag Labs')
//path for when there is a folder foldername/ xx.png
//await page.screenshot({ path: 'DemoSauceExercise/screenshot.png', fullPage: true })
})

test('User should be able to add product to cart', async() => {
//Add to cart
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
const cartBadge = page.locator('.shopping_cart_badge')
await expect (cartBadge).toBeVisible()

await page.locator('[data-test="shopping-cart-link"]').click()

// Get the badge number
const badgeNumber = Number(await page.locator('.shopping_cart_badge').innerText())
// Count the number of items in the cart
const cartItemsCount = await page.locator('.cart_item').count()
// Assert badge number equals number of items in cart
expect(badgeNumber).toBe(cartItemsCount)

console.log(badgeNumber, cartItemsCount)
});

test('User should be able to remove product from cart', async() => {
//Add to cart
await page.locator('[data-test="shopping-cart-link"]').click()
await page.locator('[data-test="remove-sauce-labs-bike-light"]').click()
const badgeNumber = Number(await page.locator('.shopping_cart_badge').innerText())
const cartItemsCount = await page.locator('.cart_item').count()
expect(badgeNumber).toBe(cartItemsCount)

})
