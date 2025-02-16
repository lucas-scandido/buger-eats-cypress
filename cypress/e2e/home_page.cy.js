/// <reference types="cypress" />

describe("Página Inicial", () => {
  
  before(() => {
    cy.visit("/")
  })

  context("Quando acessar a página inicial da aplicação", () => {
    it("Deve validar se os textos e o botão para cadastrar estão visíveis", () => {
      cy.validateHomePage()
    })
  })
})