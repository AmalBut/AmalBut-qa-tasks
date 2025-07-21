/// <reference types = "cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/Actions.cy";
import addWatchesToCartAssertions from "../../../../support/PageObjects/addWatchesToCart/Assertions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/Assertions.cy";
const sharedAction = new sharedActions();
const sharedAssertion= new sharedAssertions();
const addWatchesAssertion = new addWatchesToCartAssertions();

Given('The user navigated to magento home page',()=>{
   sharedAction.openMagentoHomePage();
})

Then('The user should Hover on Gear list',()=>{
    sharedAssertion.hoverOnMenuItem("Gear");
})

Then('Click on {string} option',(option)=>{
    addWatchesAssertion.clickOnOption(option);
})

Then('Add watches with price greater than 55 to cart',()=>{
    addWatchesAssertion.addWatchesPriceGreaterThan55ToCart();
})