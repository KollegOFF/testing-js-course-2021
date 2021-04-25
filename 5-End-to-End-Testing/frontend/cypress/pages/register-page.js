export default class RegisterPage {
  registerPage_username = '#username';
  registerPage_email = '#email';
  registerPage_password = '#password';
  registerPage_registerButton = '#register-button';
  registerPage_validationError = '.error-messages > li';

  open(url) {
    cy.visit(url);
  }
  enterUsername(username) {
    cy.get(this.registerPage_username).type(username);
  }
  enterEmail(email) {
    cy.get(this.registerPage_email).type(email);
  }

  enterPassword(password) {
    cy.get(this.registerPage_password).type(password);
  }

  registerButtonClick() {
    cy.get(this.registerPage_registerButton).click();
  }
}