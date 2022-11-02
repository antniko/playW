/*
const { expect } = require('@playwright/test');
const HomePage = require('../models/home.page');
const LoginPage = require('../models/login.page');

describe ('Applitools demo page', () => {
  //jest.setTimeout(30000);
  let browser = null;
  let context = null;
  let page = null;
  let homePage = null;
  let loginPage = null;

  test.beforeAll( async () => {
    browser = await expect.launch({headless: false});
    context = await browser.newContext();
    page = await context.newPage();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test.afterAll (async () => {
    await context.close();
    await browser.close();
  });

  it ('Should be able to login', async() => {
    await loginPage.login('username', 'password');
    expect(await page.title()).not.toBeNull();
  })

  it ('Should be logged in as Jack Gomez', async() => {
    expect(await homePage.getUserName()).toBe('Jack Gomez');
  })

  it ('Should have total balance of $350', async() => {
    expect(await homePage.getBalance('total')).toBe('$350');
  })

  it ('Should have credit available  of $17800', async() => {
    expect(await homePage.getBalance('credit')).toBe('$17,800');
  })

  it ('Should have due today of $180', async() => {
    expect(await homePage.getBalance('due')).toBe('$180');
  })
})
*/