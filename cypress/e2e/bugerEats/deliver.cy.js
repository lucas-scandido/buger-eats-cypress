/// <reference types="cypress" />

import locators from "../../support/locators"

const signInButton = locators.HOME_PAGE.signInButton

describe("Cadastro de Entregadores", () => {
    
    before(() => {
        cy.visit("/deliver")
    })

    context("Quando acessar a página de cadastro de entregadores", () => {

        const formInputs = [
            locators.REGISTER_PAGE.inputs[0],
            locators.REGISTER_PAGE.inputs[1],
            locators.REGISTER_PAGE.inputs[2],
            locators.REGISTER_PAGE.inputs[3],
            locators.REGISTER_PAGE.inputs[4],
            locators.REGISTER_PAGE.inputs[5],
            locators.REGISTER_PAGE.inputs[6],
        ]
    
        const deliveryMethods = [
            locators.REGISTER_PAGE.deliveryMethod[0],
            locators.REGISTER_PAGE.deliveryMethod[1],
            locators.REGISTER_PAGE.deliveryMethod[2],
            locators.REGISTER_PAGE.deliveryMethod[3],
            locators.REGISTER_PAGE.deliveryMethod[4],
            locators.REGISTER_PAGE.deliveryMethod[5],
            locators.REGISTER_PAGE.deliveryMethod[6],
        ]


        it("Todos os inputs do formulário devem estar visíveis e habiltiados", () => {
            formInputs.forEach((selector => {
                cy.get(selector).should("be.visible").and("be.enabled");
            }))
        })
    
        it("Todos os Métodos de Entrega devem estar visíveis e habiltiados", () => {
            deliveryMethods.forEach((selector => {
                cy.get(selector).should("be.visible");
            }))
    
            cy.get(deliveryMethods[1]).should("have.text", "Moto")
            cy.get(deliveryMethods[2]).should("have.text", "Bike Elétrica")
            cy.get(deliveryMethods[3]).should("have.text", "Van/Carro")
    
        })
    })

    context("Quando submeter o formulário corretamente", () => {      

        const registerButton = locators.REGISTER_PAGE.registerButton
        const closeModal = locators.REGISTER_PAGE.closeModalButton

        beforeEach(() => {
            cy.visit("/deliver")
        })

        it("Deve finalizar o cadastro com o método de entrega 'Moto'", () => {
            cy.fillForm(locators.REGISTER_PAGE.deliveryMethod[4])
            cy.get(registerButton).click()
            cy.validateForm()
         })

        it("Deve finalizar o cadastro com o método de entrega 'Bike Elétrica'", () => {
            cy.fillForm(locators.REGISTER_PAGE.deliveryMethod[5])
            cy.get(registerButton).click()
            cy.validateForm()
        })

        it("Deve finalizar o cadastro com o método de entrega 'Van/Carro'", () => {
            cy.fillForm(locators.REGISTER_PAGE.deliveryMethod[6])
            cy.get(registerButton).click()
            cy.validateForm()
        })
    })
})

describe("Cenarios Alternativos", () => {

    before(() => {
        cy.visit("/deliver")
    })

    context("Quando submeter o formulário sem preencher os dados", () => {

        const errors = [
            locators.TEXTS.errorMessages[0],
            locators.TEXTS.errorMessages[1],
            locators.TEXTS.errorMessages[2],
            locators.TEXTS.errorMessages[3],
            locators.TEXTS.errorMessages[4],
            locators.TEXTS.errorMessages[5],
            locators.TEXTS.errorMessages[6]
        ]

        it("Deve exibir uma mensagem de erro para todos os campos obrigatorios", () => {
            cy.get(locators.REGISTER_PAGE.registerButton).click()
            cy.get(locators.REGISTER_PAGE.errorMessage).should("have.length", 7).each(($error, index) => {
                cy.wrap($error).should("have.text", errors[index]);
            })
        })
    })
})