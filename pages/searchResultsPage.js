let searchResultsPage = function () {

    this.goToPage = async function(pageNumber) {
        await browser.executeScript('arguments[0].scrollIntoView()', $('.teletext-subject'));
        await browser.sleep(500)
        await browser.executeScript("window.scrollBy(0,-300)");
        $(`.next-pagination-list button:nth-child(${pageNumber})`).click();
    }

    this.verifyProductExist = async function () {
        expect($('.list-items div:nth-child(1) .list-item:nth-child(2) .place-container>a').isPresent()).toEqual(true);
    }
}
module.exports = new searchResultsPage();