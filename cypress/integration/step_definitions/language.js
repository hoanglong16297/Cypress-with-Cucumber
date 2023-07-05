import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I click the language setting icon', () => {
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(5000);
  cy.get('[testid="WRAP_ICON_LANGUAGE"]').click();
});

Then('I see language items', (dataTable) => {
  dataTable.rawTable.forEach((row) => {
    const language = row[0].trim();
    cy.contains(language).should('be.visible');
  });
});

When('I change language', () => {
  cy.contains('Vietnamese').click();
});
