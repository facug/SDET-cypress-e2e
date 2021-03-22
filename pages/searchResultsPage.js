let searchResultsPage = function () {

    this.goToPage= async function(pageNumber) {
        await browser.executeScript('arguments[0].scrollIntoView()', $('.teletext-subject'));
        browser.sleep(500)
        await browser.executeScript("window.scrollBy(0,-250)");
        $(`.next-pagination-list button:nth-child(${pageNumber})`).click();
    }
}
module.exports = new searchResultsPage();