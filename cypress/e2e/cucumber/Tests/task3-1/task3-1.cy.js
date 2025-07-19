/// <reference types = "cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('The user navigated to magento home page',()=>{
    cy.visit("/");
})

Then('The user should Hover on Gear list',()=>{
   cy.contains(".ui-menu-item","Gear").trigger("mouseover");
})

Then('Click on {string} option',(option)=>{
   switch(option){
    case "Watches":
        cy.contains("[role=menuitem]","Watches").click();
        break;
    case "List":
        cy.get("#mode-list").dblclick();
        break;
    default:
        throw new Error("No selector defined for "+option)
   }
})

Then('Add watches with price greater than 55 to cart',()=>{
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
})