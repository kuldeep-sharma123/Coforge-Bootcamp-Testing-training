Feature: Wishlist

Scenario: Test Case 1: Add Product to Wishlist
Given User should open Chrome Browser
When User should login into application
Then User should search product "Laptop"
Then User should click on Add to Wishlist button
Then User should verify product is added into Wishlist