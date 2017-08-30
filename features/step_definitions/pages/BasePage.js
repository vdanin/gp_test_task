"use strict";
const EC = protractor.ExpectedConditions;

class BasePage {

    //elements
    constructor() {
        this.accountTabButton = element(by.id("accountTabButton"));
        this.footballEventsLink = element.all(by.css("a[title='Football']")).first();
        this.footballCoupons = element(by.css("a[title='football-coupons']"))
    }

    openAccountTab = (() => {
        return this.accountTabButton.click();
    });

    clickFootballEventLink = () => {
        return this.footballEventsLink.click();
    };

    clickFootballCouponsLink = () => {
        return browser.wait(EC.visibilityOf(this.footballCoupons), 5000).then(()=>{
            return this.footballCoupons.click();
        })


    };


}

module.exports = BasePage;