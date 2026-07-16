Feature: Customer Login

Scenario: Test Case 1: Successful Customer Login
Given User should open Chrome Browser
When User should enter nopCommerce URL in browser
Then User should click on Login link
Then User should enter Email "john123@gmail.com"
Then User should enter Password "Password@123"
Then User should click on Login button
Then User should verify My Account page is displayed