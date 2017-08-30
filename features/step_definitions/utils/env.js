const {defineSupportCode} = require('cucumber');


defineSupportCode(function({setDefaultTimeout}) {
    setDefaultTimeout(60 * 4000);
});
