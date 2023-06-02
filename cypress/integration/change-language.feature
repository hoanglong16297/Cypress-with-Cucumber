Feature: Change Language functionality


  Scenario: Change language
    Given I visit the login page
    When I login with 0987655555 and f:Q~1x%ga'r)+=a
    When I click the language setting icon
    Then I see language items
      | Vietnamese |
      | English    |
    When I change language
    When I click the language setting icon
    Then I see language items
      | Tiếng Anh  |
      | Tiếng Việt |
