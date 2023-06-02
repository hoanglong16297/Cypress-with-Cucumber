Feature: Devmode functionality

  Background:
    Given I visit the login page

  Scenario: Login to page devmode
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    Then I should see text "Dashboard Units"
