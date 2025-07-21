/// <reference types = "cypress" />

class addWatchesToCartAssertions {

  clickOnOption(option) {
    switch (option) {
      case "Watches":
        cy.contains("[role=menuitem]", "Watches").click();
        break;
      case "List":
        cy.get("#mode-list").dblclick();
        break;
      default:
        throw new Error("No selector defined for " + option);
    }
    return this;
  }

  addWatchesPriceGreaterThan55ToCart(){
    cy.get(".product-item-details").then(($products)=>{
        for (let i = 0; i < $products.length; i++) {
            cy.wait(500)
            cy.wrap($products[i]).find(".price").invoke("text").then((price)=>{
                const numericPart = price.replace("$", "");
                if(parseInt(numericPart)>=55){
                    cy.wrap($products[i]).contains("Add to Cart").click();         
                } 
            })
        }
    })
    return this;
  }

}
export default addWatchesToCartAssertions;
