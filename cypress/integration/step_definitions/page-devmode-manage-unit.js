import {When} from 'cypress-cucumber-preprocessor/steps';
import Routes from '../../../utils/Route';

When('I visit Manage Unit at page devmode dashboard', () => {
  cy.get('[id="BUTTON_MANAGE_UNIT"]').click();
});

When('I click the Add Unit button', () => {
  cy.get('[testid="BUTTON_HEADER"]').click();
});

When('I click button location', () => {
  cy.get('[testid="GET_CURRENT_LOCATION_BUTTON"]').click();
});

When('I provide a name for the unit', () => {
  cy.get('[testid="INPUT_NAME_UNIT"]')
    .type('Long-test-devmode-unit')
    .should('have.value', 'Long-test-devmode-unit');
});

When('I search for {string} in the search input', (searchText) => {
  cy.get('[testid="SEARCH_INPUT"]')
    .clear()
    .type(searchText);
});

When('I click Creat Button', () => {
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I scroll to top page', () => {
  cy.get('SEARCH_INPUT')
  .shadow()
  .find('[data-test-id="my-button"]')
  .click({ position: 'top' })
});


When('I Edit Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]')
    .eq(0)
    .click();
  cy.get('[id="idEditUnit"]')
    .click();
  cy.get('[testid="INPUT_NAME_UNIT"]')
    .clear()
    .type('Long-test-edit-unit')
    .should('have.value', 'Long-test-edit-unit');
  cy.get('[testid="BUTTON_SUBMIT"]')
    .click();
});

When('I Add a Sub Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]')
    .eq(0)
    .click();
  cy.get('[id="idAddSubUnit"]')
    .click();
  cy.get('[class="ant-input css-dev-only-do-not-override-bbd4ux"]')
    .eq(2)
    .type('Long-test-add-unit')
    .should('have.value', 'Long-test-add-unit'); 
  cy.get('[testid="BUTTON_SUBMIT"]').eq(1).click();
});

When('I Delete Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]')
    .eq(0)
    .click();
  cy.get('[id="idDeleteUnit]')
    .click();
  cy.get('[id="checkSquare"]').click();
  cy.get('[id="buttonDelete"]').click();
});

When('I Edit Sub Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_SUB_UNIT"]')
    .eq(0)
    .click();
  cy.get('[id="idEditSubUnit"]').click();
  cy.get('[class="ant-input css-dev-only-do-not-override-bbd4ux"]')
    .eq(1)
    .clear()
    .type('Long-test-edit-sub-unit')
    .should('have.value', 'Long-test-edit-sub-unit');
  cy.get('[id="buttonSubmit"]').click()
});

When('I Add a New Device Display', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_SUB_UNIT"]').click();
  cy.get('[id="idAddNewDeviceDisplay"]').click();
  cy.get('[class="ant-input css-dev-only-do-not-override-bbd4ux"]')
    .eq(2)
    .type('Long-test-add-new-device-display')
    .should('have.value', 'Long-test-add-new-device-display');
  cy.get('[testid="BUTTON_COMMON"]')
    .eq(1)
    .click()
  cy.get('[class="ant-input css-dev-only-do-not-override-bbd4ux"]')
    .eq(3)
    .type('123')
    .should('have.value', '123');
  cy.get('[testid="ICON"]')
    .eq(10)
    .click()
});

When('I Delete Sub Unit', () => {
  cy.get('[class="anticon anticon-ellipsis"]').eq(1).click();
  cy.get('[class="ant-dropdown-menu-title-content"]')
    .eq(5)
    .click();
  cy.get('[testid="BUTTON_SUBMIT"]').eq(1).click();
});
