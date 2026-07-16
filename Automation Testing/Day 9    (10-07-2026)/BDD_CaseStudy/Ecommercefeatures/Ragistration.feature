Feature: Customer Registration

Scenario: Test Case 1: Successful Customer Registration
Given User should open Chrome Browser
When User should enter nopCommerce URL in browser
Then User should click on Register link
Then User should select Gender "Male"
Then User should enter First Name "John"
Then User should enter Last Name "Doe"
Then User should enter Date of Birth "10" "May" "1998"
Then User should enter Email "john123@gmail.com"
Then User should enter Company Name "ABC Pvt Ltd"
Then User should select Newsletter checkbox
Then User should enter Password "Password@123"
Then User should enter Confirm Password "Password@123"
Then User should click on Register button
Then User should verify registration completed successfully