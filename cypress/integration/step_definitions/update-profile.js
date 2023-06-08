import { When } from 'cypress-cucumber-preprocessor/steps';

When('I click {string} into the name field', (data) => {
  cy.get('[testid="INPUT_NAME_PROFILE"]').clear();
  cy.get('[testid="INPUT_NAME_PROFILE"]').type(data);
});

When('I should see the name input as {string}', (data) => {
  cy.get('[testid="INPUT_NAME_PROFILE"]')
    .should('be.visible')
    .should('have.value', data);
});

When('I click save to update info', () => {
  cy.get('[testid="BUTTON_SAVE_PROFILE"]').click();
});
