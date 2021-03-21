let aliexpressHomePage = require('./pages/aliexpressHomePage')

describe('angularjs homepage todo list', function() {
  it('should add a todo', async function() {
    browser.driver.get('https://www.aliexpress.com ');

    //const couponModal = 'img.btn-close';

    //browser.driver.findElement(by.css(couponModal)).click();

    aliexpressHomePage.closeModals();
    //browser.driver.findElement(by.css('.search-key-box input')).sendKeys('iphone');
    aliexpressHomePage.searchForProduct("iphone");
    await sleep(10000);
    console.log('Two seconds later, showing sleep in a loop...');

  });
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}