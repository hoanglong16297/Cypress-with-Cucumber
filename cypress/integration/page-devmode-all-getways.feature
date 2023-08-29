Feature: Page Dashboard All Gateways

    Background:
        Given I visit the login page
        When I login with 0359579079 and Long1602
        And I check the sectionTab all dashboard

    Scenario: Edit Gateways
        When I visit all gateways at page devmode dashboard
        And  I search for "Long-test-edited" in the search input
        And  I edit gateway
        Then I should see the success message "Updated successfully"

    Scenario: Navigate to chip
        When I visit all gateways at page devmode dashboard
        And  I search for "Long-test-edited" in the search input 
        And  I navigate to chip
        And  I reboot chip
        And  I setup chip
        And  I remove setup chip
        Then I should see the success message "Deleted Successfully"

    Scenario: Navigate to Input/Output Pins
        When I visit all gateways at page devmode dashboard
        And  I search for "Long-test-edited" in the search input
        And  I navigate to chip
        And  I setup chip Android
        And  I Add Input Output Pin

    Scenario: Config Chip
        When I visit all gateways at page devmode dashboard
        And  I search for "Long-test-gateway-not-remove" in the search input
        And  I navigate to chip
        And  I add new device in chip
        And  I search device in chip