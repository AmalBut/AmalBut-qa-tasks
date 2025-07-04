/// <reference types = "cypress" />

describe('', () => {
    before(() => {
        const email = "CypressUser@gmail.com"
        const password = "test@123"
        cy.loginToMagento(email,password)  //Custom command
        cy.get("#search").type("shirt {enter}")
        cy.get(".product-item-info").first().click()
    })
    it('Validate that the user can add the product to the wishlist', () => {
        //Actions
        cy.get(".towishlist").click()
        cy.screenshot({capture:"fullPage"})

        //Assertions
        cy.get('[role="alert"]').should("be.visible").and("contain","has been added to your Wish List. Click here to continue shopping.")
        cy.url().should("eq","https://magento.softwaretestingboard.com/wishlist/index/index/wishlist_id/1111/")
        cy.get(".page-title").should("contain","My Wish List")
    });
});