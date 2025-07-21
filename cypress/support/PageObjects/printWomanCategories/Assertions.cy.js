/// <reference types = "cypress" />

class womanCategoriesAssertions{
    printNewInWomanCategories(){
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
        return this;
    }
}
export default womanCategoriesAssertions;

//Another way to print the categories all together
/*
 printNewInWomanCategories(){
 cy.contains(".title", "New in women's")
      .next()
      .invoke("text")
      .then((catName) => {
        cy.log(catName);
      });
}
*/