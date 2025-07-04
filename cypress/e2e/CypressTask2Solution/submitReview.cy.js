/// <reference types = "cypress" />

describe('Submit a review for a product', () => {

    it('Validate that the user can submit a review on the product page', () => {
       //Actions
        cy.visit("/")
        cy.get(".product-item-photo").first().click()
        cy.get(".reviews-actions .add").click()
        cy.get("#Rating_4.radio").check({force: true})
        cy.get("#nickname_field").type("Amal")
        cy.get("#summary_field").type("This is a Summary")
        cy.get("#review_field").type("This is a Review")
        cy.get(".review-form-actions .submit").click()

        //Assertion
        cy.get('[role="alert"]').should("be.visible").and("contain","You submitted your review for moderation.")
    });
    
});