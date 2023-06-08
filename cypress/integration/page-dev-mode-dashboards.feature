Feature: Page Devmode Dashboards

  Background:
    Given I visit the login page
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    And I check the sectionTab all dashboard

  Scenario: Searching on the Devmode Dashboards page
    And I type "Unit-test-e2e-not-remove" in the search input
    Then I see display the expected 1 element in table
    When I clear in the search input
    Then I see display the expected greater than 1 element in table

  Scenario: Creating a unit on the Devmode Dashboards page
    When should allow the browser to know your location
    And I click button create unit at page devmode dashboard
    And I enter "Unit-test-e2e" into the unit name field
    And I click button submit create unit
    Then I should see the success message "Unit added successfully"