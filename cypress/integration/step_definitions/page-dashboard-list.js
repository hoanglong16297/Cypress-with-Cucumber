import { Then, When } from 'cypress-cucumber-preprocessor/steps';

When('I type {string} in the search input', (searchText) => {
  cy.get('[testid="SEARCH_INPUT"]').type(searchText, { force: true });
});

Then('I did a search and found it', () => {
  cy.get('.iw-header-custom').should('have.length', 1);
});

When('I clear in the search input', () => {
  cy.get('[testid="SEARCH_INPUT"]').clear();
});

When('I click select all item', () => {
  cy.get('[testid="SELECT_ALL_ITEM"]').click();
});
