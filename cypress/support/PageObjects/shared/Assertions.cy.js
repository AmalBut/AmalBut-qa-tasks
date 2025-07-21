/// <reference types = "cypress" />

class sharedAssertions{
    hoverOnMenuItem(item){
        cy.contains(".ui-menu-item",item).trigger("mouseover");
        return this;
    }

    clickOnMenuItem(item){
        cy.contains("[role=menuitem]", item).click();
        return this;
    }
}
export default sharedAssertions;