Feature: Checking loging test for practice test Automation

Scenario:Test case 3: Negative password test
Given User should open Chrome Browser
When User should Enter URL in browser
Then Type username student into Username in Edit field
Then Type password incorrectPassword into password text field
Then User should click on Push Submit button
Then User should verify error message is displayed
Then User should Verify error message text is Your password is invalid!