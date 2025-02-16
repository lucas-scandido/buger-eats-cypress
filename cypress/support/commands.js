var faker = require("faker-br")

import locators from "./locators"
import data from "../fixtures/json_structures/deliver/messages.json"

/**
 * Comando para validar os elementos da página inicial.
 * Ele verifica se os elementos principais da página inicial estão visíveis e com o texto correto.
 * @example
 * cy.validateHomePage()
 */
Cypress.Commands.add("validateHomePage", () => {
    cy.get(locators.HOME_PAGE.pageTitle)
        .should("be.visible")
        .and("have.text", data.homePage.title)

    cy.get(locators.HOME_PAGE.pageDescription)
        .should("be.visible")
        .and("have.text", data.homePage.description)

    cy.get(locators.HOME_PAGE.signInButton)
        .should("be.visible")
        .and("have.text", data.homePage.buttonText)
})

/**
 * Comando para validar o estado dos campos de entrada do formulário.
 * Ele verifica se os campos estão visíveis e habilitados.
 * @example
 * cy.validateInputState()
 */
Cypress.Commands.add("validateInputState", () => {
    const formInputs = [
        "fullName",
        "cpf",
        "email",
        "whatsapp",
        "postalcode",
        "address-number",
        "address-details",
    ]

    formInputs.forEach((field => {
        cy.get(locators.DELIVER_PAGE.inputs(field)).should("be.visible").and("be.enabled")
    }))
})

/**
 * Comando para validar o estado de visibilidade dos métodos de entrega na página de deliver.
 * Ele verifica se os elementos de texto e imagem dos métodos de entrega estão visíveis.
 * @example
 * cy.validateDeliveryMethodState()
 */
Cypress.Commands.add("validateDeliveryMethodState", () => {
    const deliveryMethods = [1, 2, 3]

    cy.get(locators.DELIVER_PAGE.deliveryMethod)
        .should("be.visible")
    deliveryMethods.forEach((value) => {
        cy.get(locators.DELIVER_PAGE.deliveryMethodText(value))
            .should("be.visible")

        cy.get(locators.DELIVER_PAGE.deliveryMethodImg(value))
            .should("be.visible")
    })
})

/**
 * Comando para preencher todos os campos obrigatórios do formulário de entrega.
 * Ele preenche o nome completo, CPF, e-mail, WhatsApp, CEP, número do endereço e detalhes do endereço.
 * Ambos os campos são preenchidos com a biblioteca faker-br. 
 * @example
 * cy.fillForm()
 */
Cypress.Commands.add("fillForm", () => {
    cy.validateInputState()
    cy.get(locators.DELIVER_PAGE.inputs("fullName")).type(`${faker.name.firstName()} ${faker.name.lastName()}`)
    cy.get(locators.DELIVER_PAGE.inputs("cpf")).type(faker.br.cpf())
    cy.get(locators.DELIVER_PAGE.inputs("email")).type(faker.internet.email())
    cy.get(locators.DELIVER_PAGE.inputs("whatsapp")).type(faker.phone.phoneNumber())
    cy.get(locators.DELIVER_PAGE.inputs("postalcode")).type("86042-600")
    cy.get(locators.DELIVER_PAGE.zipCodeButton).should("be.visible").click()
    cy.get(locators.DELIVER_PAGE.inputs("address-number")).type(faker.random.number())
    cy.get(locators.DELIVER_PAGE.inputs("address-details")).type(faker.address.streetAddress())
})

/**
 * Comando para escolher o método de entrega na página de deliver.
 * Ele clica no método de entrega especificado.
 * @param {any} "chooseDeliveryMethod"
 * @param {string} - O método de entrega que será selecionado.
 * @example
 * cy.chooseDeliveryMethod(deliveryMethods["Van/Carro"])
 */
Cypress.Commands.add("chooseDeliveryMethod", (deliveryMethod) => {
    cy.validateDeliveryMethodState()
    cy.get(locators.DELIVER_PAGE.deliveryMethodText(deliveryMethod)).click()
})

/**
 * Comando para fazer o upload do documento (CNH) no formulário de entrega.
 * Ele verifica se o alerta de upload de documento está visível com o texto correto, 
 * realiza o upload do arquivo de imagem e verifica se a imagem do documento foi exibida corretamente.
 * @example
 * cy.uploadDocument()
 */
Cypress.Commands.add("uploadDocument", () => {
    cy.get(locators.DELIVER_PAGE.documentAlertText).should("be.visible").and("have.text", data.uploadDocument.alertText)
    cy.get(locators.DELIVER_PAGE.uploadDocument).selectFile("cypress/fixtures/images/cnh.png", { force: true })
    cy.get(locators.DELIVER_PAGE.documentImage).should("be.visible")
})

/**
 * Comando para realizar o registro de um novo entregador.
 * Ele clica no botão de registro da página de entrega após verificar que ele está visível e habilitado.
 * @example
 * cy.registerDeliveryPerson()
 */
Cypress.Commands.add("registerDeliveryPerson", () => {
    cy.get(locators.DELIVER_PAGE.registerButton).should("be.visible").and("be.enabled").click()
})

/**
 * Comando para validar as mensagens de sucesso após o cadastro de um novo entregador.
 * Ele verifica se o modal de sucesso, os ícones e as mensagens de sucesso são visíveis e possuem os textos corretos.
 * @example
 * cy.validateSuccessMessages()
 */
Cypress.Commands.add("validateSuccessMessages", () => {
    cy.get(locators.DELIVER_PAGE.successModal).should("be.visible")
    cy.get(locators.DELIVER_PAGE.successCheckMark).should("be.visible")
    cy.get(locators.DELIVER_PAGE.successModalFirstMessage).should("be.visible").and("have.text", data.successMessages[0])
    cy.get(locators.DELIVER_PAGE.successModalSecondMessage).should("be.visible").and("have.text", data.successMessages[1])
    cy.get(locators.DELIVER_PAGE.closeModalButton).should("be.visible")
})

/**
 * Comando para validar as mensagens de erro no formulário de cadastro de um novo entregador.
 * Ele verifica se a mensagem de erro correspondente ao índice fornecido está visível e se o texto
 * exibido corresponde à mensagem esperada.
 * @param {number} index - O índice da mensagem de erro que deve ser validada. Este valor é utilizado
 * para selecionar a mensagem específica dentro de um conjunto de mensagens de erro.
 * @param {string} message - O texto da mensagem de erro que deve ser validada. O texto exibido deve
 * corresponder exatamente a esta string.
 * @example
 * cy.validateErrorMessages(index, message)
 */
Cypress.Commands.add("validateErrorMessages", (index, message) => {
    cy.get(locators.DELIVER_PAGE.errorMessage)
        .eq(index)
        .should("be.visible")
        .and("have.text", message)
})