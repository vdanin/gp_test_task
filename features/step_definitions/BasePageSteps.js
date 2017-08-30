'use strict';
import {assertationConstants as assertConstants} from "./utils/constants";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const {defineSupportCode, Then, When, And, Given} = require('cucumber');
const BasePageActions = require('./actions/BasePageActions');
const config = require('./utils/config.json');

const basePageActions = new BasePageActions();

Given(/^I log in as user/, () => {
    return basePageActions.authenticate().then(() => {
        return basePageActions.isUserLoggedIn(config.fullName)
    }).then(isUserLoggedIn => {
        return expect(isUserLoggedIn, assertConstants.WRONG_USER_ERR_MESSAGE).to.be.true;
    });
});


When(/^I want to place a bet on (?:English Championship|English Premier League)$/, () => {
    return basePageActions.openUKFootballEventsPage();
});