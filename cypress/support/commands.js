var faker = require('faker-br')

import locators from './locators'

// Comando para preencher formulário de Cadastro na BugerEats
Cypress.Commands.add('fillForm', (delivery) => {

    // Preenchendo o formulário
    cy.get(locators.REGISTER_PAGE.inputs[0]).type(`${faker.name.firstName()} ${faker.name.lastName()}`)
    cy.get(locators.REGISTER_PAGE.inputs[1]).type(faker.br.cpf())
    cy.get(locators.REGISTER_PAGE.inputs[2]).type(faker.internet.email())
    cy.get(locators.REGISTER_PAGE.inputs[3]).type(faker.phone.phoneNumber())
    cy.get(locators.REGISTER_PAGE.inputs[4]).type('86042-600').wait(2000)
    cy.get(locators.REGISTER_PAGE.zipCodeButton).should('be.visible').click().wait(2000)
    cy.get(locators.REGISTER_PAGE.inputs[5]).type(faker.random.number())
    cy.get(locators.REGISTER_PAGE.inputs[6]).type(faker.address.streetAddress())
   
    // Seleciona o Método de Entrega
    cy.get(delivery).click()

    // Insere e valida a CNH
    cy.get(locators.REGISTER_PAGE.uploadDocument).selectFile('cypress/fixtures/images/cnh.png', { force: true })
    cy.get(locators.REGISTER_PAGE.documentImage).should("be.visible")
})

// Comando para validar a mensagem de sucesso ao finalizar  formulário
Cypress.Commands.add('validateForm', () => {
    cy.get(locators.REGISTER_PAGE.successModal).should("be.visible")
    cy.get(locators.REGISTER_PAGE.successModalMessageFirst).should("be.visible").and("have.text", locators.TEXTS.successModalMessages[0])
    cy.get(locators.REGISTER_PAGE.successModalMessageSecond).should("be.visible").and("have.text", locators.TEXTS.successModalMessages[1])
    cy.get(locators.REGISTER_PAGE.closeModalButton).should("be.visible")
})