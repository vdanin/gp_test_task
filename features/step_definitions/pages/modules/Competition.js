"use strict";
import Event from "./Event";

class Competition{

    constructor(container){
        this.footballEvents = container.all(by.css(".event"));
    }

    getEventById = id =>{
        id --;
        return new Event(this.footballEvents.get(id));
    };


}

module.exports = Competition;