let assertationConstants = {};
assertationConstants.WRONG_USER_ERR_MESSAGE = "wrong user authenticated";
assertationConstants.WRONG_EVENT_ERR_MESSAGE = "bet slip for different event is shown";
assertationConstants.BET_NOT_PLACE_ERR_MESSAGE ="something went wrong - bet was not placed";
assertationConstants.BETTER_NOT_TO_BET_ON_IT = "YOU'D BETTER NOT TO BET!"


let logMessages = {};

let errorMessages = {};
logMessages.USR_AUTH_ERROR_MESSAGE = "user is not logged in, or something went wrong";


module.exports = {
    assertationConstants, logMessages, errorMessages
};
