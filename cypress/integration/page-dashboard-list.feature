Feature: Page Dashboard List

  Background:
    Given I visit the login page

  Scenario: Page Dashboard List
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    And I check the sectionTab list section
    And I type "Tech room" in the search input
    Then I did a search and found it
    And I clear in the search input