Feature: Checking loging test for practice test Automation

Scenario:Test case 2: Negative username testt
Given User should open Chrome Browser
When User should Enter URL in browser
Then Type username incorrectUser into Username in Edit field
Then Type password Password123 into password text field
Then User should click on Push Submit button
Then User should verify error message is displayed
Then User should verify error message text is Your username is invalid!