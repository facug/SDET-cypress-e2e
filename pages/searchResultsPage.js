let searchResultsPage = function () {

    this.goToPage= function(pageNumber) {
        $(".next-pagination-list button:nth-child({pageNumber})").click();
    }

}
module.exports = new searchResultsPage();