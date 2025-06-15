/// <reference types = "cypress" />

describe("Test Selectors in conduit Sign up page", () => {
    
    it("Best selectors of elements on the sign up page", () => {
        cy.visit("https://demo.productionready.io/#/register")

        //"conduit" title link
        cy.get('a.navbar-brand').contains("conduit")

        //"Home" link 
        cy.contains('a',"Home")

        //"Sign up" link
        cy.contains("a.nav-link", "Sign up")

        //"Sign up" title
        cy.get('h1').contains("Sign up")

        //"Have an account?" link
        cy.contains('a',"Have an account?")

        //Username field
        cy.get('input').first()

        //Email field
        cy.get('input').eq(1)

        //Password field
        cy.get('input[placeholder="Password"]')

        //Sign up button
        cy.get(".btn").contains("Sign up")

        //"conduit" footer link
        cy.contains('a.logo-font',"conduit")

        //footer attribution
        cy.get('span.attribution')
    })

})