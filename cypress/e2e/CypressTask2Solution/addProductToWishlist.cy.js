/// <reference types = "cypress" />

describe('Add product to wishlist', () => {
    before(() => {
        const email = "CypressUser@gmail.com"
        const password = "test@123"
        cy.loginToMagento(email,password)  //Custom command
    })
    it('Validate that the user can add the product to the wishlist', () => {
        //Actions
        cy.get("#search").type("shirt {enter}")
        cy.get(".product-item-info").first().click()
        cy.get(".towishlist").click()
        cy.wait(2000)
        cy.screenshot({capture:"fullPage"})

        //Assertions
        cy.get('[role="alert"]')
          .should("be.visible")
          .and("contain","has been added to your Wish List. Click here to continue shopping.")

        cy.url().should("include", "/wishlist/index/index")
        cy.get(".page-title").should("contain","My Wish List")
    });
});