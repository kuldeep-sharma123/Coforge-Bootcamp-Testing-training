Feature: Checking loging test for practice test Automation

Scenario:Test case 1: Positive LogIn test
Given User should open Chrome Browser
When User should Enter URL in browser
Then Type username student into Username in Edit field
Then Type password Password123 into password text field
Then User should click on Push Submit button
Then User should verify new page URL contains https://practicetestautomation.com/logged-in-successfully/
Then User should verify new page contains expected text ('Logged In Successfully' or 'Congratulations student. You successfully logged in!')
Then User should verify button Logout is displayed on the new page 