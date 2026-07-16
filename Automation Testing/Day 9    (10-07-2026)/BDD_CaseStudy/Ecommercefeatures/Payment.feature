Feature: Payment

Scenario: Test Case 1: Successful Payment
Given User should reach Payment Information page
When User should enter Card Holder Name "John Doe"
Then User should enter Card Number "4111111111111111"
Then User should select Expiry Month "12"
Then User should select Expiry Year "2028"
Then User should enter CVV "123"
Then User should click on Continue button
Then User should click on Confirm button