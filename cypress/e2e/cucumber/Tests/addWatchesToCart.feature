Feature: Add watches to cart

    Scenario: Add all watches with price greater than 55 to cart
    Given The user navigated to magento home page
    When The user hovers on Gear list
    And Clicks on "Watches" option
    And Clicks on "List" option
    And Adds watches with price greater than 55 to cart