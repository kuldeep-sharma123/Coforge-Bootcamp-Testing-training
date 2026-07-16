Feature: Customer Logout

Scenario: Test Case 1: Successful Logout
Given User should login into application
When User should click on Logout link
Then User should verify Login link is displayed
Then User should verify user is successfully logged out