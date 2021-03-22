exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['aliexpressTest.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ['--window-size=1000,900']
    }
  },
  onPrepare: async function() {
     await browser.waitForAngularEnabled(false);
  }
};