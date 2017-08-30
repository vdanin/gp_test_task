'use strict';
const BasePage = require('../pages/BasePage');
const AccountPanel = require('../pages/modules/AccountPanel');
const Competition = require('../pages/modules/Competition');
const FootballCouponsPanel = require("../pages/modules/FootballCouponsPanel");
const config = require('../utils/config.json');
const errorMessages = require("../utils/constants").errorMessages;



let BasePageActions = function() {
    const basePage = new BasePage();
    const accountPanel = new AccountPanel();
    const footballCouponsPanel = new FootballCouponsPanel();

    this.authenticate = (() => {
        return basePage.openAccountTab().then(()=>{
            return accountPanel.logIn(config.login, config.password);
        })
    });

    this.isUserLoggedIn = ((userName) =>{
        return this.getCurrentUsername().then(usr => {
            return usr === userName;
        });
    });

    this.getCurrentUsername = (() => {
        return accountPanel.isAccountPanelOpened().then(isOpened => {
            if (isOpened) {
                return accountPanel.getAccountName();
            } else {
                return basePage.openAccountTab().then(() => {
                    return accountPanel.getAccountName();
                }).then(function(accountName){
                    return accountName;
                }, reject => {
                    if(reject.message.includes('not found')){
                        return errorMessages.USR_AUTH_ERROR_MESSAGE;
                    }
                });
            }
        })
    });

    this.openUKFootballEventsPage = () => {
        return basePage.clickFootballEventLink().then(()=>{
            return basePage.clickFootballCouponsLink();
        }).then(()=>{
            return footballCouponsPanel.clickUKMatchBettingLink();
        });
    };
};

module.exports = BasePageActions;