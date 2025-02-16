# Buger Eats - Cadastro de Entregadores 🛵📍

Projeto de automação de testes E2E para a aplicação **[Buger Eats](https://buger-eats-qa.vercel.app)**.

Este projeto é utilizado como fase de estudos para o framework de automação Cypress, para os alunos dos cursos da antiga plataforma **QAx**.

## Pré-requisitos
1. Versão do **`node`** `>=20.17.0`
2. Versão do **`yarn/npm`** `>=1.22.22 / 10.8.3`
3. Versão do **`cypress`** `>=14.0.3`


## Instalação
##### 1. Clone o repositório:
```
https://github.com/lucas-scandido/buger-eats-cypress.git
```

##### 2. Navegue até o diretório:
```
cd buger-eats-cypress
```

##### 3. Instale as dependências:
```
yarn install
    ou
npm install
```

## Documentações relevantes
- **Documentação do Cypress:**
1. [Cypress](https://docs.cypress.io/)
2. [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands/)

## Estrutura de Projeto
- O projeto foi desenvolvido utilizando o padrão de `Custom Commands`. Este padrão foi escolhido, pois ajuda melhorar a eficiência, legibilidade e manutenção dos testes, tornando o desenvolvimento de testes mais ágil e menos propenso a erros. 

##### Estrutura das pastas:
```
├── cypress/                                      # Diretório principal dos testes Cypress.
    └── e2e  /                                    # Contém todos os testes E2E da aplicação.
        └── deliver.cy.js                         # Teste E2E para cadastro de novos entregadores.
        └── home_oage.cy.js                       # Teste E2E para validação de elementos da página inicial.
    └── fixtures/                                 # Dados de teste e fixtures.
        └── images                                
            └── cnh.png                           # Documento fake para cadastro de entregadores.
        └── json_structures                       # Dados de comparação para os testes.   
            └── messages.json                     # JSON contendo todas as mensagens utilizadas para comparação/validação.    
    └── support/                                  # Configurações de suporte do Cypress.
        └── commands.js                           # Comandos customizados para testes E2E.
        └── locators.js                           # Locators usando para interagir com os elementos da página.
        └── e2e.js                                # Configurações globais para testes.
    ├── package.json                              # Gerenciador de dependências e scripts do projeto .
    └── README.md                                 # Documentação do projeto.
```

## Scripts de execução

- 📝 Não foram adicionados scripts personalizados.

```
yarn cypress run          # Roda todos os testes em modo headless.
yarn cypress open         # Roda todos os testes em modo interativo.
```