Feature: Page Dashboard List

  Background:
    Given I visit the login page

  Scenario: Page Dashboard List
    When I login with 0901603859 and Doloi123
    And I check the sectionTab list section
    And I type "Tech room" in the search input
    Then I did a search and found it
    And I clear in the search input