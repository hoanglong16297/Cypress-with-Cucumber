Feature: Update profile functionality


  Background:
    Given I visit the login page
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    Then I should see the header dropdown
    When I go to profile setting page

  Scenario: Update new info
    And I should see the name input as "e2e-no-edit"
    And I click "e2e2" into the name field
    And I click save to update info
    Then I should see the success message "Updated successfully"

  Scenario: Update to revert info
    And I should see the name input as "e2e2"
    And I click "e2e-no-edit" into the name field
    And I click save to update info
    Then I should see the success message "Updated successfully"
