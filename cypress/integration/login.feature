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
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    Then I should see the header dropdown
    When I log out
    Then I should be logged out

