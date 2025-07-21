Feature: Add watches to cart

    Scenario: Add all watches with price greater than 55 to cart
    Given The user navigated to magento home page
    Then The user should Hover on Gear list
    And Click on "Watches" option
    And Click on "List" option
    And Add watches with price greater than 55 to cart