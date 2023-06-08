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
    When I should allow the browser to know your location "10.8231" "106.6297"
    And I click button create unit at page devmode dashboard
    And I enter "Unit-test-e2e-at-devmode-dashboards" into the unit name field
    And I click the submit button on the modal page of Devmode Dashboard
    Then I should see the success message "Unit added successfully"

  Scenario: Editing a unit on the Devmode Dashboards page
    When I type "Unit-test-e2e-at-devmode-dashboards" in the search input
    When I click dropdown at page devmode dashboard
    When I click edit unit detail at page devmode dashboard
    When I enter "Unit-test-e2e-rename-at-devmode-dashboards" into the unit name field
    And  I click the submit button on the modal page of Devmode Dashboard
    Then I should see the success message "Unit updated successfully"

  Scenario: Deleting a unit on the Devmode Dashboards page
    When I type "Unit-test-e2e-rename-at-devmode-dashboards" in the search input
    When I click dropdown at page devmode dashboard
    When I click delete unit detail at page devmode dashboard
    When I click checkbox understand that this action
    When I click the submit button on the modal page of Devmode Dashboard
    Then I should see the success message "Unit deleted successfully"
