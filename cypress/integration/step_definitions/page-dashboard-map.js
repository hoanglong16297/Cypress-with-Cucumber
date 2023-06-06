import { When } from 'cypress-cucumber-preprocessor/steps';

When('I see dashboard Google map', () => {
  cy.get('[testid="DASHBOARD_GOOGLE_MAP"]').should('be.visible')
  cy.wait(3000);
});

When('I see table station in Google map', () => {
  cy.get('[testid="WRAP_CHIP-0-0"]').click();
  cy.get('div.iw-header')
  .should('exist')
  .should('have.class', 'iw-header')
  cy.wait(1000);
  cy.get('[testid="BUTTON_NAVIGATE_STATION_DETAIL"]').click();
  cy.get('[testid="STATION_NAME"]').should('be.visible');
});


When('I setting enable config display', () => {
  cy.get('[testid="CONFIG_BUTTON-1-0"]').click();
  cy.get('[testid="SWITCH_CHIP_ROW"]').click();
  cy.get('[testid="RADIO_CHIP_ROW-0"]').click();
  cy.get('[testid="BUTTON_MODAL_ANT"]').click();
  cy.get('[testid="MAIN_CONFIG_NAME"]').should('be.visible');
});

When('I setting disable config display', () => {
  cy.get('[testid="CONFIG_BUTTON-1-0"]').click();
  cy.get('[testid="SWITCH_CHIP_ROW"]').click();
  cy.get('[testid="BUTTON_MODAL_ANT"]').click();
});





