/// <reference types="cypress" />

describe('E2E Test Example', () => {
  it.only('Google test', () => {
    cy.visit('https://www.google.com/');
    cy.wait(5000);
    cy.get('.gLFyf').type('Как меня зовут?{enter}')
      .should("have.attr", "title", "Поиск1");
    //cy.contains('Поиск в Google').click();
    //cy.get('.FPdoLc > center').find('.gNO89b').click({ force: true });
  });
});