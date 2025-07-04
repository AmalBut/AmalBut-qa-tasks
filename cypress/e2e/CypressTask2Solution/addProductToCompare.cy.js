/// <reference types = "cypress" />

describe('Add product to compare', () => {
    
    it('validate that the user can add the product to compare', () => {
        //Actions
        cy.visit("/")
        cy.get("#search").type("shirt {enter}")
        cy.get(".product-item-info").first().click()
        cy.get(".tocompare").click()

        //Assertions
        cy.get('[role="alert"]')
          .should("be.visible")
          .and("contain","You added product")
          .and("contain","to the comparison list.")

        cy.get(".action.compare").should("be.visible")
    });
});