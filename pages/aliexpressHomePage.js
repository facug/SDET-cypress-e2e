let aliexpressHomePage = function() {
    this.couponModalCloseButton = element(by.className('btn-close'));
    this.subscribeModalCloseButton = element(by.className('Sk1_X _1-SOk'));
    this.dealsModalCloseButton = element(by.className('close-btn'));

    this.searchProductsInput = $('.search-key-box input');
    this.searchButton = $('input.search-button') ;
    
    
    this.closeModals = function() {
        this.couponModalCloseButton.click();
        this.subscribeModalCloseButton.click();
        this.dealsModalCloseButton.click();
    }

    this.searchForProduct = function(inputText) {
        this.searchProductsInput.sendKeys(inputText);
        this.searchButton.click();
    }
}

module.exports = new aliexpressHomePage();