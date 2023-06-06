Feature: Header and Menubar

  Background:
    Given I visit the login page
    When I login with 0987655555 and f:Q~1x%ga'r)+=a


  Scenario: Header
    When I check the news popover is visible
    And I check the documentation popover is visible
    And I check the sectionTab all dashboard
    And I check the sectionTab logo map
    And I check the sectionTab list section

  Scenario: MenuBar
    When I click button close menu
    And I click button extend menu
    And I verify the subscriptionlink attributes
    And I go back
    And I verify the server status link attributes
    And I verify the documentation link attributes
    And I verify the general trading conditions link attributes
    And I verify the general privacy policy link attributes
