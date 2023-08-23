Feature: Page Dashboard Manage Unit

  Background:
    Given I visit the login page
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    And I check the sectionTab all dashboard

  Scenario: Create Unit
    When I visit Manage Unit at page devmode dashboard
    And  I click the Add Unit button
    And  I click button location
    And  I provide a name for the unit
    And  I click Button Submit
    Then I should see the success message "Unit added successfully"

  Scenario: Edit-Add-Delete units and station
    When I visit Manage Unit at page devmode dashboard
    And  I search for "Unit-test-devmode-unit" in the search input
    And  I Edit Unit
    And  I search for "Unit-test-edit-unit" in the search input
    And  I Add a Sub Unit
    And  I Edit Sub Unit
    And  I Delete Sub Unit
    And  I Delete Unit
    Then I check the sectionTab all dashboard
  
  Scenario: Edit-Add-Delete devices
    When I visit Manage Unit at page devmode dashboard
    And  I search for "Unit-test-e2e-not-remove" in the search input
    And  I Edit Sub Unit
    And  I Add a New Device Display
    And  I provide a name for the display device
    And  I change icon
    And  I select device
    And  I Delete End Device
    Then I should see the success message "Delete successful"


    
    
   
