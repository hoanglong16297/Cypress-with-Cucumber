Feature: Page Devmode Dashboards

  Background:
    Given I visit the login page

  Scenario: Page Devmode Dashboards
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    And I check the sectionTab all dashboard
    And I type "EoH Office" in the search input
    Then I see display the expected 1 element in table
    When I clear in the search input
    Then I see display the expected greater than 1 element in table
    When should allow the browser to know your location