exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],

  onPrepare: async function() {
     await browser.waitForAngularEnabled(false);
  }
};