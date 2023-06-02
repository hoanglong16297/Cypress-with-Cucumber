import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Routes from '../../../utils/Route';


Given('I visit the login page', () => {
  cy.visit(Routes.Login);
});

When('I click the login button', () => {
  cy.get('[testid="LOGIN_BUTTON"]').click();
});

Then('I should see the error message {string}', (message) => {
  cy.contains(message).should('be.visible');
});

When('I enter {string} into the phone number field', (phoneNumber) => {
  cy.get('[testid="INPUT_PHONE_NUMBER"]').type(phoneNumber);
});

When('I enter {string} into the password field', (password) => {
  cy.get('[testid="COMMON_INPUT"]').type(password);
});

Given('I am logged in', () => {
  cy.login();
});

Then('I should see the header dropdown', () => {
  cy.get('[testid="HEADER_DROPDOWN"]').should('be.visible');
});

When('I log out', () => {
  cy.logout();
});

Then('I should be logged out', () => {
  cy.get('[testid="TEXT_SIGN_IN"]').should('be.visible');
});
