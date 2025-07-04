/// <reference types = "cypress" />

describe('', () => {
    before(() => {
        const email = "CypressUser@gmail.com"
        const password = "test@123"
        cy.loginToMagento(email,password)
        cy.get("#search").type("shirt {enter}")
        cy.contains(".product-item-info","Radiant Tee").click()
    })
    it('Validate that the user can add the product to the wishlist', () => {
        cy.get(".towishlist").click()
        cy.screenshot({capture:"fullPage"})
        cy.get('[role="alert"]').should("be.visible").and("contain","Radiant Tee has been added to your Wish List. Click here to continue shopping.")
        cy.url().should("eq","https://magento.softwaretestingboard.com/wishlist/index/index/wishlist_id/1111/")
        cy.contains(".product-item-info","Radiant Tee").should("be.visible")
        cy.get(".page-title").should("contain","My Wish List")
    });
});