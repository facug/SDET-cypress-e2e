let aliexpressHomePage = function() {
    this.couponModalCloseButton = element(by.className('btn-close'));
    this.subscribeModalCloseButton = element(by.className('Sk1_X _1-SOk'));
    this.dealsModalCloseButton = element(by.className('close-btn'));

    this.searchProductsInput = $('.search-key-box input');
    this.searchButton = $('input.search-button') ;
    
    
    this.closeModals = function() {
        clickIfVisible(this.couponModalCloseButton);
        clickIfVisible(this.subscribeModalCloseButton);
        clickIfVisible(this.dealsModalCloseButton);
    }

    this.searchForProduct = function(inputText) {
        this.searchProductsInput.sendKeys(inputText);
        this.searchButton.click();
    }

    function clickIfVisible(element) {
        element.isPresent().then(function(isPresent) {
            if (isPresent){
                element.click();
            }
        })
    }
}

module.exports = new aliexpressHomePage();