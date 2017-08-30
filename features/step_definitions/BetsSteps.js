'use strict';
import {assertationConstants as assertConstants} from "./utils/constants";

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
const {defineSupportCode, Then, When, And, Given} = require('cucumber');
const BetsActions = require('./actions/BetsActions');
const BasePageActions = require('./actions/BasePageActions');

const betsActions = new BetsActions();
const basePageActions = new BasePageActions();

Given(/^I place a bet amount of (\d|\d.\d*)(?:\$|£|€) on event (\d) for (home|away|drow) in (English Premier League)/, (amount, id, betFor, championshipName) => {
    let betForPromise;
    return betsActions.getChampionshipByName(championshipName).then(competition => {
        let event = competition.getEventById(id);

        if (betFor === "home") {
            betForPromise = event.clickOnHomeBetButton();
        }
        return betForPromise.then(() => {
            //probably going to fail if event already started.
            return event.getEventName().then(eventName => {
                return expect(betsActions.isBetslipNameCorrect(eventName), assertConstants.WRONG_EVENT_ERR_MESSAGE).eventually.to.be.true;
            }).then(() => {
                return expect(betsActions.isBetsOddsGreaterThanX(1), assertConstants.BETTER_NOT_TO_BET_ON_IT).to.eventually.be.true;
            }).then(() => {
                return betsActions.enterBetAmountAndSubmit(amount);
            }).then(() => {
                return expect(betsActions.isBetSuccessfullyPlaced(), assertConstants.BET_NOT_PLACE_ERR_MESSAGE).to.be.true;
            })
        })
    });

});