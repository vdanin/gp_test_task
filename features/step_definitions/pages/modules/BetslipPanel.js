"use strict";
const EC = protractor.ExpectedConditions;


class BetslipPanel{

    constructor() {
        this.betslipContainer = element(by.id("betslip-section"));
        this.eventNameElement = this.betslipContainer.element(by.css(".betslip-selection__event"));
        this.amountFieldElement = this.betslipContainer.element(by.css("input[class*='betslip-selection__stake-input']"));
        this.placeBetButton = this.betslipContainer.element(by.css("input[value='Place Bet']"));
        this.receiptMessage = this.betslipContainer.element(by.css("#receipt-notice-box > em"));
        this.oddsElement = this.betslipContainer.element(by.css("selection-price .betslip-selection__price"));
    }


    getEventName = () => {
        return this.eventNameElement.getText();
    };

    typeBetAmount = (amount) => {
        return this.amountFieldElement.sendKeys(amount);
    };

    submitBet = () => {
        return this.placeBetButton.click();
    };

    getReceiptMessage = () => {
        return this.receiptMessage().getText();
    };

    getOddsValue = () => {
        return this.oddsElement.getText();
    };
}


module.exports = BetslipPanel;