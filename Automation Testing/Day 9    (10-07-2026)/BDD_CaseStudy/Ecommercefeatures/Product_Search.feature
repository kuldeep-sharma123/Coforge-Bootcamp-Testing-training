Feature: Product Search

Scenario: Test Case 1: Search Product Successfully
Given User should open Chrome Browser
When User should enter nopCommerce URL in browser
Then User should enter "Laptop" into Search box
Then User should click on Search button
Then User should verify searched products are displayed