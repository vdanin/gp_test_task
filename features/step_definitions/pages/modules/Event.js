"use strict";

class Event {
    constructor(eventElement){
        this.eventName = eventElement.element(by.css(".btmarket__content"));
        this.betButtons = eventElement.all(by.css(".btmarket__selection > button"));
    };

    clickOnHomeBetButton = (()=> {
        return this.betButtons.get(0).click();
    });

    clickOnDrawBetButton = (()=> {
        return this.betButtons.get(1).click();
    });

    clickOnAwayBetButton= (()=> {
        return this.betButtons.get(2).click();
    });

    getEventName = (()=> {
        return this.eventName.getText();
    });
}

module.exports = Event;