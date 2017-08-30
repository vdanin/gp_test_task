module.exports = function(grunt) {
    grunt.initConfig({
        generateReport: {
            options: {
                format: 'html',
                output: 'my_report.html',
                theme: 'bootstrap'
            },
            my_features: ['features/SampleFeature.feature'],
        }
    });

    grunt.loadNpmTasks('grunt-cucumberjs');
};