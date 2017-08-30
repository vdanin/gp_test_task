"use strict";
const EC = protractor.ExpectedConditions;

class FootballCouponsPanel{

    constructor(){
        this.footBallCouponsContainer = element(by.css("#highlights-coupons"));
        this.ukMatchBettingLink = this.footBallCouponsContainer.element(by.xpath("//span[text()='UK Match Betting']/.."));
    }

    clickUKMatchBettingLink = () => {
        return browser.wait(EC.visibilityOf(this.ukMatchBettingLink), 5000).then(() => {
            return this.ukMatchBettingLink.click();
        })
    }
}

module.exports = FootballCouponsPanel;