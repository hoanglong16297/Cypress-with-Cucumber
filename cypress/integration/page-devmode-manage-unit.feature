Feature: Page Dashboard Manage Unit

  Background:
    Given I visit the login page
    When I login with 0359579079 and Long1602
    And I check the sectionTab all dashboard

  Scenario: Create Unit
    When I visit Manage Unit at page devmode dashboard
    And  I click the Add Unit button
    And  I click button location
    And  I provide a name for the unit
    And  I click Creat Button
    Then I should see the success message "Unit added successfully"

  Scenario: Edit-Add units
    When I visit Manage Unit at page devmode dashboard
    And  I search for "Long-test-devmode-unit" in the search input
    And  I Edit Unit
    And  I search for "Long-test-edit-unit" in the search input
    And  I Add a Sub Unit
    Then I check the sectionTab all dashboard
  
  Scenario: Edit-Add-Delete devices
    When I visit Manage Unit at page devmode dashboard
    And  I search for "Long-test-edit-unit" in the search input
    And  I Edit Sub Unit
    And  I Add a New Device Display
  #   And  I Delete Sub Unit
  #   Then I should see the success message "Sub unit added successfully"


    
    
   
