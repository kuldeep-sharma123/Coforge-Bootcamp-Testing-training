Feature: Update Cart

Scenario: Test Case 1: Update Product Quantity
Given User should open Chrome Browser
When User should login into application
Then User should open Shopping Cart
Then User should change product quantity to "2"
Then User should click on Update Shopping Cart button
Then User should verify updated quantity is displayed