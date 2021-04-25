/// <reference types="cypress" />
import RegisterPage from '../pages/register-page';

describe('Regesration Tests', () => {
  const page = new RegisterPage();

  it('User resgistration is filed when username is already exists', () => {
    page.open('http://localhost:8080/#/register');
    page.enterUsername('Evgeniy');
    page.enterEmail('test@test.ru');
    page.enterPassword('qwerty');
    page.registerButtonClick();
    cy.get(page.registerPage_validationError).should('contain.text', 'username has already been taken');
  })
});
