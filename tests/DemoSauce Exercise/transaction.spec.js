import { test, expect } from '@playwright/test'

test.beforeEach('User should be logged in', async({page}) => {

await page.goto("https://saucedemo.com/")

// Web element locator or test object
await page.locator('[data-test="username"]').fill('standard_user')
await page.locator('[data-test="password"]').fill('secret_sauce')
await page.locator('[data-test="login-button"]').click()
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
});

test('Homepage should be correct', async({page}) => {

const swagLabsText = page.getByText('Swag Labs')
await expect(swagLabsText).toBeVisible();
await expect(swagLabsText).toHaveText('Swag Labs')

//path for when there is a folder foldername/ xx.png
//await page.screenshot({ path: 'DemoSauceExercise/screenshot.png', fullPage: true })

//Check if logged in
await page.getByRole('button', { name: 'Open Menu' }).click();
const logoutText = page.getByText('Logout')
await expect(logoutText).toBeVisible();
await expect(logoutText).toHaveText('Logout')

})

test('User should be able to add product to cart', async({page}) => {
//Add to cart
await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
const cartBadge = page.locator('.shopping_cart_badge')
await expect (cartBadge).toBeVisible()

//await expect.soft(cartBadge).toHaveText('1')

await page.locator('[data-test="shopping-cart-link"]').click()

// Get the badge number
const badgeNumber = Number(await page.locator('.shopping_cart_badge').innerText())
// Count the number of items in the cart
const cartItemsCount = await page.locator('.cart_item').count()
// Assert badge number equals number of items in cart
expect(badgeNumber).toBe(cartItemsCount)

console.log(badgeNumber, cartItemsCount)
});


//test('Badge number should be equal to number of items in cart', async({page}) => {



//});
