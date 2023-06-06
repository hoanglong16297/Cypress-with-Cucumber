Feature: Page Dashboard Map

  Background:
    Given I visit the login page

  Scenario: Page Dashboard Map
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    And I check the sectionTab logo map
    And I see dashboard Google map
    And I see table station in Google map
    And I go back
    And I setting enable config display
    And I setting disable config display
