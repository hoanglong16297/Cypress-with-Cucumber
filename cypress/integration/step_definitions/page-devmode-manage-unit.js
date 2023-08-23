import {When} from 'cypress-cucumber-preprocessor/steps';

When('I visit Manage Unit at page devmode dashboard', () => {
  cy.get('[testid="BUTTON_MANAGE_UNIT"]').click();
});

When('I click the Add Unit button', () => {
  cy.get('[testid="BUTTON_HEADER"]').click();
});

When('I click button location', () => {
  cy.get('[testid="GET_CURRENT_LOCATION_BUTTON"]').click();
});

When('I provide a name for the unit', () => {
  cy.get('[testid="INPUT_NAME_UNIT"]')
    .type('Unit-test-devmode-unit').should('have.value', 'Unit-test-devmode-unit');
});

When('I search for {string} in the search input', (searchText) => {
  cy.get('[testid="SEARCH_INPUT"]').clear({ force: true }).type(searchText, { force: true });
});

When('I click Button Submit', () => {
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I Edit Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]').eq(0).click();
  cy.get('[testid="MODAL_UNIT_EDIT_UNIT"]').click();
  cy.get('[testid="INPUT_NAME_UNIT"]').clear()
    .type('Unit-test-edit-unit').should('have.value', 'Unit-test-edit-unit');
  cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I Add a Sub Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]').eq(0).click();
  cy.get('[testid="MODAL_UNIT_ADD_SUB_UNIT"]').click();
  cy.get('[testid="MODAL_INPUT_CHANGE_SUB_UNIT_NAME"]')
    .type('Unit-test-add-unit').should('have.value', 'Unit-test-add-unit'); 
  cy.get('[testid="BUTTON_SUBMIT"]').eq(1).click();
});

When('I Delete Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_UNIT"]').eq(0).click();
  cy.get('[testid="MODAL_UNIT_DELETE_UNIT"]').click();
  cy.get('[id="checkSquare"]').click();
  cy.get('[id="buttonDelete"]').click();
});

When('I Edit Sub Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_SUB_UNIT"]').eq(0).click();
  cy.get('[testid="MODAL_SUB_UNIT_EDIT_SUB_UNIT"]').click();
  cy.get('[testid="MODAL_INPUT_CHANGE_SUB_UNIT_NAME"]').clear()
    .type('e2e-add-new-subunit').should('have.value', 'e2e-add-new-subunit');
  cy.get('[id="buttonSubmit"]').click()
});

When('I Add a New Device Display', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_SUB_UNIT"]').eq(0 ).click();
  cy.get('[testid="MODAL_SUB_UNIT_ADD_NEW_DEVICE"]').click();
});

When('I provide a name for the display device', () => {
  cy.get('[testid="MODAL_INPUT_NAME_DISPLAY_DEVICE"]')
    .type('Unit-test-add-new-device-display').should('have.value', 'Unit-test-add-new-device-display');

});

When('I change icon', () => {
  cy.get('[testid="BUTTON_UPLOAD_IMAGE_UNIT"]').click()
  cy.get('[testid="INPUT_ICON"]')
    .type('123').should('have.value', '123');
  cy.get('[testid="ICON"]').eq(10).click();
});

When('I select device', () => {
  cy.get('[testid="SELECT_ROW_ITEM_MODAL_CHIP"]').eq(0).click();
    cy.get('[class="ant-select-item ant-select-item-option ant-select-item-option-active"]').eq(0).click();
  cy.get('[testid="SELECT_ROW_ITEM_MODAL_CHIP"]').eq(1).click();
    cy.get('[class="ant-select-item ant-select-item-option ant-select-item-option-active"]').eq(1).click();  
  cy.get('[id="submitCreate"]').click();
});

When('I Delete End Device', () => {
  cy.get('[class="ant-col ant-col-xs-12 ant-col-sm-8 ant-col-md-6 ant-col-lg-4 css-dev-only-do-not-override-bbd4ux"]').eq(0).click();
    cy.get('[testid="EXPAND_SUB_UNIT_DROPDOWN_END_DEVICE"]').click();
    cy.get('[testid="MODAL_DELETE_END_DEVICE"]').click();
    cy.get('[testid="BUTTON_SUBMIT"]').click();

});

When('I Delete Sub Unit', () => {
  cy.get('[testid="EXPAND_UNIT_DROPDOWN_SUB_UNIT"]').eq(0).click();
    cy.get('[testid="MODAL_SUB_UNIT_DELETE_SUB_UNIT"]').click();
    cy.get('[id="submitDelete"]').click();
});
