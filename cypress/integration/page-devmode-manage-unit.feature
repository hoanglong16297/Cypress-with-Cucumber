Feature: Page Dashboard Manage Unit

  Background:
    Given I visit the login page
    When I login with 0359579079 and Long1602
    And I check the sectionTab all dashboard

  Scenario: Create Unit
    When I visit Manage Unit at page devmode dashboard
    And  I click button Add Unit
    And  I click button location
    And  I fill the Unit Name
    And  I click Creat Button
    Then I should see the success message "Unit added successfully"

  Scenario: Edit-Add-delete unit
    When I visit Manage Unit at page devmode dashboard
    And  I Edit Unit
    And  I Add Sub Unit
    And  I Delete Unit
    
  
  # Scenario: Add Sub Unit
  #   When I visit Manage Unit at page devmode dashboard
  #   # And  I Fill Search Unit
  #   And  I Add Sub Unit
  #   And  I Delete Sub Unit
  #   Then I should see the success message "Sub unit added successfully"


  # Scenario: Delete Unit
  #   When I visit Manage Unit at page devmode dashboard
  #   And  I Fill Search Unit 
  #   And  I Delete Unit
  #   Then I check the sectionTab all dashboard

    
    
   
