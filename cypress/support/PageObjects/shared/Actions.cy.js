/// <reference types = "cypress" />

class sharedActions{

    openMagentoHomePage(){
        cy.visit("/");
        return this;
    }
}
export default sharedActions;