/// <reference types = "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/Actions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/Assertions.cy";
import womanCategoriesAssertions from "../../../../support/PageObjects/printWomanCategories/Assertions.cy";
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions();
const womanCategoriesAssert = new womanCategoriesAssertions();

Given('The user navigated to magento home page',()=>{
   sharedAction.openMagentoHomePage();
})

When("The user click on What's New menu item", () => {
  sharedAssertion.clickOnMenuItem("What's New");
});

Then(
  "The user should print the categories in the New In Womens section",
  () => {
  womanCategoriesAssert.printNewInWomanCategories();
  }
);