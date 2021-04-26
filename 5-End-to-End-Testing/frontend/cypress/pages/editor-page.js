export default class EditorPage {
  constructor() {
    cy.intercept('POST', '**/articles').as('createArticleRequest');
    cy.intercept('PUT', '**/articles/**').as('updateArticleRequest');
  }

  url = 'http://localhost:8080/#/editor';

  selectors = {
    title: '#title',
    description: '#description',
    body: '#body',
    tags: '#tag-input',
    button: '#submit-button',
    errors: '.error-messages',
  };

  open() {
    cy.visit(this.url);
  }

  enterTitle(title) {
    cy.get(this.selectors.title).type(title);
  }

  enterDescription(description) {
    cy.get(this.selectors.description).type(description);
  }

  enterBody(body) {
    cy.get(this.selectors.body).type(body);
  }

  enterTags(tags) {
    tags.forEach((tag) => {
      cy.get(this.selectors.tags).type(`${tag}{enter}`);
    });
  }

  publishArticle() {
    cy.get(this.selectors.button).click();
    cy.wait('@createArticleRequest');
  }

  updateArticle() {
    cy.get(this.selectors.button).click();
    cy.wait('@updateArticleRequest');
  }

  hasErrors(errors) {
    errors.forEach((error) => {
      cy.get(this.selectors.errors).should('contain.text', error);
    });
  }
}