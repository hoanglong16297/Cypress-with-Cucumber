// eslint-disable-next-line quotes
const pass = `f:Q~1x%ga'r)+=a`;

Cypress.Commands.add('login', (username = '0987655555', password = pass) => {
  cy.get('[testid="INPUT_PHONE_NUMBER"]').type(username);
  cy.get('[testid="COMMON_INPUT"]').type(password);
  cy.get('[testid="LOGIN_BUTTON"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('[testid="HEADER_DROPDOWN"]').click();
  cy.contains('Sign out').click();
});
