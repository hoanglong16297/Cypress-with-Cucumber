import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I should see text {string}', (message) => {
  cy.contains(message).should('be.visible');
});
