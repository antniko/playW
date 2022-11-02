// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.DevPage = class DevPage {
  
  /** 
   * @param {import('@playwright/test').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.userNameTxt = '#username';
    this.passwordTxt = '#password';
    this.loginBtn = '#log-in';
    this.loggedUser = '.logged-user-name';
  }

  async goto() {
    await this.page.goto('https://demo.applitools.com/');
  }

  async letsLogin() {
    await this.page.fill(this.userNameTxt, "User");
    await this.page.fill(this.passwordTxt, "Pass");
    await this.page.click(this.loginBtn);
  }

  async checkUserName() {
    let user = await this.page.$(this.loggedUser);
    return await user.innerText();
  }
}