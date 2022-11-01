const { test } = require('@playwright/test');

test('Login test 1', async({ page }) => {

  await page.goto('https://demo.applitools.com/')
  //await page.pause()
  await page.locator('internal:attr=[placeholder="Enter your username"i]').fill('JackGomez')
  await page.locator('internal:attr=[placeholder="Enter your password"i]').fill('password')
  await page.waitForSelector('role=link[name="Sign in"]',{timeout: 5000})
  await page.locator('role=link[name="Sign in"]').click()
  await page.locator('text=Jack Gomez')

})