import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I go to profile setting page', () => {
  cy.get('[testid="HEADER_DROPDOWN"]').click();
  cy.contains('Account').click();
});

When('I go to change password page', () => {
  cy.get('[testid="CHANGE_PASSWORD"]').click();
});

const getFieldId = (field) => {
  switch (field) {
    case 'current password':
      return '[testid="INPUT_CURRENT_PASSWORD"]';
    case 'new password':
      return '[testid="INPUT_NEW_PASSWORD"]';
    case 'confirm new password':
      return '[testid="INPUT_CONFIRM_NEW_PASSWORD"]';
    default:
      throw new Error(`Invalid field: ${field}`);
  }
};

When('I enter {string} into the {string} field', (password, field) => {
  const fieldId = getFieldId(field);
  cy.get(fieldId).type(password);
});

When('I click change password', () => {
  cy.get('[testid="BUTTON_CHANGE_PASSWORD"]').click();
});

Then('I should see the success message {string}', (message) => {
  cy.contains(message).should('be.visible');
});
