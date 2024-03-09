# Buger Eats - Cadastro de Entregadores 🛵📍

## Este projeto de automação de testes E2E foi realizado através da aplicação **[Buger Eats](https://buger-eats-qa.vercel.app)**, desenvolvida pelo **[Fernando Papito](https://www.linkedin.com/in/papitoio/)** para os alunos de seus cursos que estão disponíveis na plataforma da **[QAx](https://qax.com.br/pt/cursos)**.

## Pré-requisitos
1. IDE de sua preferência.
2. Versão do **node** `≥ v20.11.0`.
3. Versão do **yarn/npm** `≥ 1.22.21 / 10.5.0`.
4. Versão do **cypress** `≥ 13.6.6`.

## Instalação:
1. Clone o projeto: ``.
2. Rode o script `yarn / npm install` para instalar as dependências do projeto.

## Configurações do projeto:
- Por se tratar de uma aplicação pequena, apenas para cadastro de entregadores, foi utilizado a técnica de isolamento de testes desativada `(testIsolation: false)`. Portanto especificamente nos cenários de `validações de elementos da página` e de `cenários alterantivos`, o teste não alterará o contexto do navegador antes do início do teste, fazendo com que o teste ganhe mais performance executando mais rápido.
- Foi adicionado 2 `custom commands` com o intuito de manter a boa prática e evitar linhas de repetição de código.
- O restante das configurações foi mantidas por `default`.
- Por se tratar de uma aplicação para estudos e que nao possui outros ambientes não foram adicionados scripts personalizados.

## Cenários de Testes:

1. Página Inicial:

| TESTE | STATUS |
| ----- | ----- |
| Deve validar se os textos e o botão para cadastrar estão visíveis | ✅ |

2. Cadastro de Entregadores (Deliver)

| TESTE | STATUS |
| ----- | ----- |
| Todos os inputs do formulário devem estar visíveis e habilitados | ✅ |
| Todos os métodos de entrega devem estar visíveis e habiltiados | ✅ |
| Deve finalizar o cadastro com o método de entrega 'Moto' | ✅ |
| Deve finalizar o cadastro com o método de entrega 'Bike Elétrica' | ✅ |
| Deve finalizar o cadastro com o método de entrega 'Van/Carro' | ✅ |
| Deve exibir uma mensagem de erro para todos os campos obrigatorios | ✅ |
