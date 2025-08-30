/// <reference types = "cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import sharedActions from "../../../../support/PageObjects/shared/Actions.cy";
import addWatchesToCartActions from "../../../../support/PageObjects/addWatchesToCart/Actions.cy";
import sharedAssertions from "../../../../support/PageObjects/shared/Assertions.cy";
const sharedAction = new sharedActions();
const sharedAssertion= new sharedAssertions();
const addWatchesAction = new addWatchesToCartActions();

Given('The user navigated to magento home page',()=>{
   sharedAction.openMagentoHomePage();
})

When('The user hovers on Gear list',()=>{
    sharedAssertion.hoverOnMenuItem("Gear");
})

When('Clicks on {string} option',(option)=>{
    addWatchesAction.clickOnOption(option);
})

When('Adds watches with price greater than 55 to cart',()=>{
    addWatchesAction.addWatchesPriceGreaterThan55ToCart();
})