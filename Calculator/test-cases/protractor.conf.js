//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    'calculatorTests.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/index.html',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
