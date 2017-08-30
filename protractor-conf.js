require("babel-core/register");
require("babel-polyfill");

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        return browser.get("http://sports.williamhill.com/betting/en-gb");
    },
    // require feature files
    specs: [
        'features/*.feature'
    ],

    cucumberOpts: {
        format: 'json:my_report.html.json',
        require: [
            'features/step_definitions/*.steps.js', 'features/step_definitions/**/*.js'// accepts a glob
        ]
    }
};