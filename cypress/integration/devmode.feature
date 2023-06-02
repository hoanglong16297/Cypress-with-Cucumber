Feature: Devmode functionality

  Background:
    Given I visit the login page

  Scenario: Login to page devmode
    Given I am logged in
    Then I should see text "Dashboard Units"
