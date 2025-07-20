/// <reference types = "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigated to magento home page", () => {
  cy.visit("/");
});

When("The user click on What's New menu item", () => {
  cy.contains("[role=menuitem]", "What's New").click();
});

Then(
  "The user should print the categories in the New In Womens section",
  () => {
    cy.contains(".title", "New in women's")
      .next()
      .children()
      .then(($categories) => {
        for (let i = 0; i < $categories.length; i++) {
          cy.wrap($categories[i])
            .invoke("text")
            .then((catName) => {
              cy.log(catName);
            });
        }
      });
  }
);

//Another way to print the categories all together

/*Then(
  "The user should print the categories in the New In Womens section",
  () => {
    cy.contains(".title", "New in women's")
      .next()
      .invoke("text")
      .then((catName) => {
        cy.log(catName);
      });
  }
);*/