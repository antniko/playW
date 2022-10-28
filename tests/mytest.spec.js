
const {test, expect} = require("@playwright/test")
//import {test, expect} = require ('@playwright/test')

const {hello, helloworld} = require('./demo/hello')
//import {hello, helloworld} from './demo/hello'

//console.log (hello());
//console.log (helloworld());

test('My test', async ({page}) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google11111')
})