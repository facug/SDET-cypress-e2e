
describe('Aliexpress - search for ad', () => {
    it('searches for a product', () => {
        const couponModal = 'img.btn-close';
        const dealsModal = 'img.close-btn';

        cy.visit("/");


        cy.debug()
            .get('img.btn-close')
            .should('be.visible')
            .click({force: true});
        cy.wait(2000);
        
        cy.debug().window({log: true}).then( win => {
            win.console.log("asdsadas");
            win.document.getElementsByClassName("btn-close")[0].click();
        });

        /*cy
            .get(dealsModal)
            .should('be.visible')
            .click();*/
    });
});