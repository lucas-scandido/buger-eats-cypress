/// <reference types="cypress" />

import locators from "../../support/locators"

describe("Página Inicial", () => {
  
  before(() => {
    cy.visit("/")
  })

  context("Quando acessar a página inicial da aplicação", () => {

    it("Deve validar se os textos e o botão para cadastrar estão visíveis", () => {

      // Armazenando os elementos para evitar reptição de código
      const headerTitle = locators.HOME_PAGE.headerTitle
      const headerParagraph = locators.HOME_PAGE.headerParagraph
      const button = locators.HOME_PAGE.signInButton

      // Realizando as asserções
      cy.get(headerTitle).should("be.visible").and("have.text", locators.TEXTS.header)
      cy.get(headerParagraph).should("be.visible").and("have.text", locators.TEXTS.paragraph)
      cy.get(button).should("be.visible").and("have.text", locators.TEXTS.homeButton)
    })
  })
})