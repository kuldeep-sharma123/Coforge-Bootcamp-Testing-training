Feature: Order Confirmation

Scenario: Test Case 1: Verify Order Confirmation
Given User should complete payment successfully
When User should click on Confirm button
Then User should verify message "Your order has been successfully processed!"
Then User should verify Order Number is displayed