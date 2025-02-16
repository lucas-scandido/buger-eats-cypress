/// <reference types="cypress" />

describe("Cadastro de entregadores", () => {
    context("Inserção de dados válidos para cadastro", () => {
        beforeEach(() => {
            cy.visit("/deliver")
        })

        const deliveryMethods = {
            "Moto": 1,
            "Bike Elétrica": 2,
            "Van/Carro": 3
        }

        it("Deve realizar o cadastro com o método de entrega 'Moto' com sucesso", () => {
            cy.fillForm()
            cy.chooseDeliveryMethod(deliveryMethods["Moto"])
            cy.uploadDocument()
            cy.registerDeliveryPerson()
            cy.validateSuccessMessages()
        })

        it("Deve realizar o cadastro com o método de entrega 'Bike Elétrica' com sucesso", () => {
            cy.fillForm()
            cy.chooseDeliveryMethod(deliveryMethods["Bike Elétrica"])
            cy.uploadDocument()
            cy.registerDeliveryPerson()
            cy.validateSuccessMessages()
        })

        it("Deve realizar o cadastro com o método de entrega 'Van/Carro' com sucesso", () => {
            cy.fillForm()
            cy.chooseDeliveryMethod(deliveryMethods["Van/Carro"])
            cy.uploadDocument()
            cy.registerDeliveryPerson()
            cy.validateSuccessMessages()
        })
    })

    context("Inserção de dados inválidos para cadastro", () => {
        before(() => {
            cy.visit("/deliver")
        })

        it("Quando tentar submeter o formulário sem preencher os dados, deve exibir uma mensagem de erro para todos os campos obrigatorios", () => {
            cy.registerDeliveryPerson()
            cy.fixture("json_structures/deliver/messages").then((data) => {
                data.errorMessages.forEach((message, index) => {
                    cy.validateErrorMessages(index, message)
                })
            })
        })
    })
})