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

When(
  'I should allow the browser to know your location {string} {string}',
  (latitude, longitude) => {
    cy.window().then((win) => {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
        (callback) => {
          const position = {
            coords: {
              latitude: Number(latitude), // Latitude for Ho Chi Minh, Vietnam
              longitude: Number(longitude), // Longitude for Ho Chi Minh, Vietnam
            },
          };
          callback(position);
        }
      );
    });
  }
);

When('I click button create unit at page devmode dashboard', () => {
  cy.get('[testid="BUTTON_HEADER"]').click();
});

When('I enter {string} into the unit name field', (phoneNumber) => {
  cy.get('[testid="INPUT_NAME_UNIT"]').clear();
  cy.get('[testid="INPUT_NAME_UNIT"]').type(phoneNumber);
});

When('I click the submit button on the modal page of Devmode Dashboard', () => {
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I click dropdown at page devmode dashboard', () => {
  cy.get('[testid="WRAP_DROPDOWN"]').click();
});

When('I click edit unit detail at page devmode dashboard', () => {
  cy.get('[id="idEditUnit"]').click();
});

When('I click delete unit detail at page devmode dashboard', () => {
  cy.get('[id="idDeleteUnit"]').click();
});

When('I click checkbox understand that this action', () => {
  cy.get('[id="checkSquare"]').click();
});
