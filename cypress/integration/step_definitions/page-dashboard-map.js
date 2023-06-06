import { When } from 'cypress-cucumber-preprocessor/steps';

When('I see dashboard Google map', () => {
  cy.get('[testid="DASHBOARD_GOOGLE_MAP"]').should('be.visible')
});

When('I see table station in Google map', () => {
  cy.wait(3000);
  cy.get('[testid="CHIP_ROW-UNIT_DATA-0-0"]').click();
  cy.get('div.iw-header')
  .should('exist')
  .should('have.class', 'iw-header');
});

