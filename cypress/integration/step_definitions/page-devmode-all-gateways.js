import {When, And} from 'cypress-cucumber-preprocessor/steps';
import Routes from '../../../utils/Route';
import { should } from 'chai';

When('I visit all gateways at page devmode dashboard', () => {
    cy.get('[id="BUTTON_ALL_GATEWAYS"]').click();
});

When('I search for {string} in the search input', (searchText) => {
    cy.get('[testid="SEARCH_INPUT"]').clear().type(searchText);
});

When('I edit gateway', () => {
    cy.get('[testid="WRAP_DROPDOWN"]').eq(0).click().trigger('editGateway');
    cy.get('[id="editGateway"]').click();
    cy.get('[id="idGatewayName"]').clear().type('Long-test-edited').should('have.value', 'Long-test-edited');
    cy.get('[class="ant-select-selection-item"]').eq(0).click()
        cy.get('[class="ant-select-item ant-select-item-option"]').eq(0).click();
    cy.get('[class="ant-select-selection-item"]').eq(1).click()
        cy.get('[class="ant-select-item ant-select-item-option"]').eq(6).click();
    cy.get('[testid="BUTTON_SUBMIT"]').click();    
});

When('I navigate to chip', () => {
    cy.get('[id="idChipName"]').eq(0).click();
    cy.get('[testid="dropDownMoreDevMode"]').click();
});

When('I reboot chip', () => {
    cy.get('[testid="dropDownMoreDevMode"]').click();
        cy.get('[id="reboot"]').click({ force: true });
        cy.get('[testid="BUTTON_SUBMIT"]').click();
});

When('I setup chip', () => {
    cy.get('[data-node-key="2"]').click();
        cy.get('[testid="ARDUINO_BUTTON_POPUP_SETUP"]').click()
            cy.get('[id="confirmSetUpPin"]').click();
    cy.get('[data-node-key="3"]').click();
        cy.get('[testid="ZIGBEE_BUTTON_POPUP_SETUP"]').click()
            cy.get('[id="confirmSetupZigbee"]').click();
    cy.get('[data-node-key="4"]').click();
        cy.get('[testid="MODBUS_BUTTON_POPUP_SETUP"]').click()
            cy.get('[class="ant-select-selection-item"]').click()
                cy.get('[class="ant-select-item ant-select-item-option"]').eq(5).click();
                    cy.get('[id="submitModBus"]').click();
});

When('I remove setup chip', () => {
    cy.get('[data-node-key="1"]').click();
        cy.get('[id="zigbeeMethod"]').click();
            cy.get('[id="checkSquare"]').click({force: true});
            cy.get('[id="buttonDelete"]').click();
        cy.get('[id="modBusMethod"]').click();
            cy.get('[id="checkSquare"]').click({force: true});
            cy.get('[id="buttonDelete"]').click();
        cy.get('[id="ioMethod"]').click();
            cy.get('[id="checkSquare"]').click({force: true});
            cy.get('[id="buttonDelete"]').click();
});

When('I setup chip Android', () => {
    cy.get('[id="ioMethod"]').click();
        cy.get('[id="buttonSubmit"]').click();
});

When('I Add Input Output Pin', () => {
    cy.get('[data-node-key="2"]').click();
        cy.get('[testid="BUTTON_ADD_NEW"]').click();
        cy.get('[id="idDeviceName"]').click().type('Device đèn').should('have.value', 'Device đèn')
                cy.get('[id="createPin"]').click();
                    cy.get('[testid="SEARCH_INPUT"]').clear().type('Device đèn');
                    cy.get('[class="ant-table-row ant-table-row-level-0"]').eq(0).click();
});

When('I add new device in chip', () => {
    cy.get('[data-node-key="2"]').click();
        cy.get('[id="buttonAddNewPin"]').click()
        cy.get('[id="idDeviceName"]').type('Device quạt').should('have.value', 'Device quạt');
        cy.get('[id="createPin"]').click();
});

When('I search device in chip', () => {
    cy.get('[testid="SEARCH_INPUT"]').type('Device Đèn').should('have.value', 'Device Đèn')
        cy.get('[class="ant-table-row ant-table-row-level-0"]').eq(0).click();
    cy.get('[testid="GATEWAY_SEARCH_DEVICE_INPUT"]').clear().type('Device đèn');
    cy.get('[testid="GATEWAY_SEARCH_DEVICE_ITEM"]').click();
});