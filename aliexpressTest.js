let aliexpressHomePage = require('./pages/aliexpressHomePage')
let searchResultsPage = require('./pages/searchResultsPage')

describe('searching for products in Aliexpress', function() {
  it('search for iphone product and check the 2nd page', async function() {
    browser.driver.get('https://www.aliexpress.com ');

    aliexpressHomePage.closeModals();
    aliexpressHomePage.searchForProduct("iphone");
    await searchResultsPage.goToPage(2);
    await searchResultsPage.verifyProductExist();
  });
});
