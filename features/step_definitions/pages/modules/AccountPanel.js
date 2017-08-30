"use strict";
const EC = protractor.ExpectedConditions;


class AccountPanel{

 constructor() {
     this.usernameField = element(by.id("loginUsernameInput"));
     this.passwordField = element(by.id("loginPasswordInput"));
     this.rememberMeElement = element(by.id("rememberMe"));
     this.accountTabButton = element(by.id("accountTabButton"));
     this.logInButton = element(by.id("loginButton"));
     this.depositButton = element(by.id("depositHeaderButtonLink"));
     this.accountNameElement = element(by.css(".account__name"));
 }
    //consts
    EXPANDED_CLASS = 'account-tab__button -expanded';


    logIn = (username, password) => {
        return this.usernameField.click().then(() => {
            return this.usernameField.sendKeys(username);
        }).then(() => {
            return this.passwordField.click();
        }).then(() => {
            return this.passwordField.sendKeys(password);
        }).then(() => {
            return this.logInButton.click();
        }).then(()=>{
            return browser.wait(EC.visibilityOf(this.depositButton),60000);
        })
    };

    isAccountPanelOpened = (() => {
        return this.accountTabButton.getAttribute('class').then(classAttr => {
            return classAttr === this.EXPANDED_CLASS;
        });
    });

    getAccountName = (()=>{
        return this.accountNameElement.getText();
    });



};

module.exports = AccountPanel;