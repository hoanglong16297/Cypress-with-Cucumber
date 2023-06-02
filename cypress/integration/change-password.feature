Feature: Change password functionality

    Background:
        Given I visit the login page

    Scenario: Go to setting and change password
        When I login with 0987655555 and f:Q~1x%ga'r)+=a
        Then I should see the header dropdown
        When I go to profile setting page
        And I go to change password page
        And I enter "f:Q~1x%ga'r)+=a" into the "current password" field
        And I enter "f:Q~1x%ga'r)+=aa" into the "new password" field
        And I enter "f:Q~1x%ga'r)+=aa" into the "confirm new password" field
        And I click change password
        Then I should see the success message "Change password success"

    Scenario: Change back password
        When I login with 0987655555 and f:Q~1x%ga'r)+=aa
        Then I should see the header dropdown
        When I go to profile setting page
        And I go to change password page
        And I enter "f:Q~1x%ga'r)+=aa" into the "current password" field
        And I enter "f:Q~1x%ga'r)+=a" into the "new password" field
        And I enter "f:Q~1x%ga'r)+=a" into the "confirm new password" field
        And I click change password
        Then I should see the success message "Change password success"
