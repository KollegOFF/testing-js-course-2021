export default class LoginPage {
  constructor() {
    cy.intercept('POST', '**/users/login').as('loginRequest');
  }

  url = 'http://localhost:8080/#/login';

  selectors = {
    login: '#email',
    password: '#password',
    button: '#signin-button',
  };

  signIn(login, password) {
    cy.visit(this.url);
    cy.get(this.selectors.login).type(login);
    cy.get(this.selectors.password).type(password);
    cy.get(this.selectors.button).click();
    cy.wait('@loginRequest');
  }
}