// example.spec.js
const { test, expect } = require('@playwright/test');
const { DevPage } = require('./dev-page');

/*test.afterAll (async () => {
  await context.close();
  await browser.close();
});*/

test('Goto->Login->Check', async ({ page }) => {
  const Dev = new DevPage(page);
  await Dev.goto();
  await Dev.letsLogin();
  expect(await Dev.checkUserName()).toBe('Jack Gomez');
});
