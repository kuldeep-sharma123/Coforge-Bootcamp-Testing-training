Feature: Checkout

Scenario: Test Case 1: Checkout Successfully
Given User should open Chrome Browser
When User should login into application
Then User should add product into Shopping Cart
Then User should open Shopping Cart
Then User should click on Terms and Conditions checkbox
Then User should click on Checkout button
Then User should enter Billing Address details
Then User should continue Shipping Address
Then User should continue Shipping Method
Then User should continue Payment Method