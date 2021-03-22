let aliexpressHomePage = require('./pages/aliexpressHomePage')
let searchResultsPage = require('./pages/searchResultsPage')

describe('searching for products in Aliexpress', function() {
  it('search for iphone product and check the 2nd page', async function() {
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