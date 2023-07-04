import { When } from 'cypress-cucumber-preprocessor/steps';
import Routes from '../../../utils/Route';

When('I check the news popover is visible', () => {
  cy.get('[testid="BUTTON_NEWS"]').click();
  cy.get('.ant-popover').should('be.visible');
});

When('I check the documentation popover is visible', () => {
  cy.get(
    'a[href="https://era-open-iot-platform.gitbook.io/documentation/"]'
  ).as('documentationLink');

  cy.get('@documentationLink')
    .should('have.attr', 'target', '_blank') // Verify that the link opens in a new tab
    .and('have.attr', 'rel', 'noreferrer'); // Verify the rel attribute value
});

When('I check the sectionTab all dashboard', () => {
  cy.get('[testid="DEVELOPER_SECTION"]').as('developerSection');
  cy.get('@developerSection').click();

  cy.url().should('include', Routes.AllDashboard);
});

When('I check the sectionTab logo map', () => {
  cy.get('[testid="DASHBOARD_MAP_SECTION"]').as('developerSection');
  cy.get('@developerSection').click();

  cy.url().should('include', Routes.DashboardMap);
});

When('I check the sectionTab list section', () => {
  cy.get('[testid="LIST_SECTION"]').as('developerSection');
  cy.get('@developerSection').click();

  cy.url().should('include', Routes.DashboardList);
});

When('I verify the subscriptionlink attributes', () => {
  cy.get('[testid="LINK_SUBSCRIPTION"]').click();
  cy.url().should('include', Routes.Pricing);
  cy.contains('Subscription').should('be.visible');
});

When('I go back', () => {
  cy.go('back');
});

When('I verify the server status link attributes', () => {
  cy.get('[testid="LINK_SEVER_STATUS"]')
    .should('have.attr', 'href', 'https://stats.uptimerobot.com/kNvB3uk091')
    .and('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

When('I verify the documentation link attributes', () => {
  cy.get('[testid="LINK_DOCUMENTATION"]')
    .should(
      'have.attr',
      'href',
      'https://era-open-iot-platform.gitbook.io/documentation/'
    )
    .and('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

When('I verify the general trading conditions link attributes', () => {
  cy.get('[testid="LINK_GENERAL"]')
    .should('have.attr', 'href', 'https://eoh.io/general-trading-conditions/')
    .and('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});

When('I verify the general privacy policy link attributes', () => {
  cy.get('[testid="LINK_PRIVACY_POLICY"]')
    .should('have.attr', 'href', 'https://eoh.io/policy/')
    .and('have.attr', 'target', '_blank')
    .and('have.attr', 'rel', 'noreferrer');
});
