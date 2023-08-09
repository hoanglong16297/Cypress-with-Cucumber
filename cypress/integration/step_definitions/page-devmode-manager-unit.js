import {When} from 'cypress-cucumber-preprocessor/steps';
import Routes from '../../../utils/Route';

When('I visit Manage Unit at page devmode dashboard', () => {
  cy.get('[testid="LONGID_MANAGE_UNIT"]').click();
});

When('I click button Add Unit', () => {
  cy.get('[testid="BUTTON_HEADER"]').click();
});

When('I click button location', () => {
  cy.get('[testid="GET_CURRENT_LOCATION_BUTTON"]').click();
});

When('I fill the Unit Name', () => {
  cy.get('[testid="INPUT_NAME_UNIT"]')
    .type('Long-test-devmode-manage-unit')
    .should('have.value', 'Long-test-devmode-manage-unit');
});

When('I Fill Search Unit', () => {
  cy.get('[testid="SEARCH_INPUT"]')
    .click()
    .type('Long-test-devmode-manage-unit')
    .should('have.value', 'Long-test-devmode-manage-unit');
});

When('I click Creat Button', () => {
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I Edit Unit', () => {
  cy.get('[testid="LONGID"]')
    .eq(0)
    .click();
  cy.get('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')
    .eq(0)
    .click();
  cy.get('[testid="INPUT_NAME_UNIT"]')
    .clear()
    .type('Long-test-edit-unit')
    .should('have.value', 'Long-test-edit-unit');
  cy.get('[testid="BUTTON_SUBMIT"]')
    .click();
});

When('I Add Sub Unit', () => {
  cy.get('[testid="LONGID"]')
    .eq(0)
    .click();
  //cy.get('[class="anticon anticon-ellipsis"]').first().click();
  cy.get('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')
    .eq(1)
    .click();
  cy.get('[class="ant-input css-dev-only-do-not-override-1rz0uib"]')
    .eq(2)
    .type('Long-test-add-sub-unit')
    .should('have.value', 'Long-test-add-sub-unit'); 
  cy.get('[testid="BUTTON_SUBMIT"]').eq(1).click();
});

When('I Delete Unit', () => {
  cy.get('[testid="LONGID"]')
    .eq(0)
    .click();
  // cy.get('[class="anticon anticon-ellipsis"]')
  //   .click();
  cy.get('[class="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"]')
    .eq(2)
    .click();
  cy.get('[id="checkSquare"]').click();
  cy.get('[id="buttonDelete"]').click();
});



When('I Delete Sub Unit', () => {
  cy.get('[class="anticon anticon-ellipsis"]').eq(1).click();
  cy.get('[class="ant-dropdown-menu-title-content"]')
    .eq(5)
    .click();
  cy.get('[testid="BUTTON_SUBMIT"]').eq(1).click();
});