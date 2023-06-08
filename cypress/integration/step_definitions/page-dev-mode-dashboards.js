import { Then, When } from 'cypress-cucumber-preprocessor/steps';

Then('I see display the expected 1 element in table', () => {
  cy.get('tr.ant-table-row.ant-table-row-level-0').should('have.length', 1);
});

Then('I see display the expected greater than 1 element in table', () => {
  cy.get('tr.ant-table-row.ant-table-row-level-0').should(
    'have.length.greaterThan',
    1
  );
});

When('should allow the browser to know your location', () => {
  cy.window().then((win) => {
    cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
      (callback) => {
        const position = {
          coords: {
            latitude: 10.8231, // Latitude for Ho Chi Minh, Vietnam
            longitude: 106.6297, // Longitude for Ho Chi Minh, Vietnam
          },
        };
        callback(position);
      }
    );
  });
});

When('I click button create unit at page devmode dashboard', () => {
  cy.get('[testid="BUTTON_HEADER"]').click();
});

When('I enter {string} into the unit name field', (phoneNumber) => {
  cy.get('[testid="INPUT_NAME_UNIT"]').type(phoneNumber);
});

When('I click button submit create unit', () => {
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});
