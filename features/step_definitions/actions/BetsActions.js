'use strict';
const Competition = require('../pages/modules/Competition');
const BetslipPanel = require('../pages/modules/BetslipPanel');
const config = require('../utils/config.json');
const EC = protractor.ExpectedConditions;

import {errorMessages} from "../utils/constants";


let BetsActions = function () {
    const betslipPanel = new BetslipPanel();

    this.getChampionshipByName = (championshipName => {
        let championshipContainer = element(by.xpath(`//article[contains (@class,'comp-container')]//h3[text()='${championshipName}']/../..`));
        return browser.wait(EC.visibilityOf(championshipContainer), 5000).then(() => {
            return new Competition(championshipContainer);
        });
    });

    this.isBetslipNameCorrect = (expName => {
        return betslipPanel.getEventName().then(actualName => {
            return actualName.includes(expName);
        });
    });

    this.enterBetAmountAndSubmit = (amount => {
        amount = amount || 0.05;
        return betslipPanel.typeBetAmount(amount).then(() => {
            return betslipPanel.submitBet();
        });
    });

    this.isBetSuccessfullyPlaced = () => {
        return betslipPanel.getReceiptMessage().then(message => {
            return message === 'Bets placed';
        });
    };

    this.isBetsOddsGreaterThanX = (x) => {
        return betslipPanel.getOddsValue().then(oddsValue => parseInt(oddsValue) >= x);
    }
};

module.exports = BetsActions;