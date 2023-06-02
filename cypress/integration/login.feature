Feature: Login functionality

  Background:
    Given I visit the login page

  Scenario: Login without username and password
    When I click the login button
    Then I should see the error message "password: This field may not be blank."

  Scenario: Login with incorrect username and password
    When I enter "abc123" into the phone number field
    And I enter "123456" into the password field
    And I click the login button
    Then I should see the error message "Incorrect username or password"

  Scenario: Successful logout
    Given I am logged in
    Then I should see the header dropdown
    When I log out
    Then I should be logged out
