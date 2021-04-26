export default class ArticlePage {
  constructor() {
    cy.intercept('GET', '**/articles**').as('getArticlesRequest');
    cy.intercept('GET', '**//articles/**').as('getArticleRequest');
  }

  selectors = {
    title: '#article-title',
    body: '#article-body',
    profileLink: 'a.nav-link[href^="#/profile"]',
    firstArticleLink: 'c-article:first-child .preview-link',
  };

  openLastArticle() {
    cy.get(this.selectors.profileLink).click();
    cy.wait('@getArticlesRequest');
    cy.get(this.selectors.firstArticleLink).click();
    cy.wait('@getArticleRequest');
  }

  editArticle() {
    cy.contains('Edit Article').click();
    cy.wait('@getArticleRequest');
    cy.wait(1000);
  }

  itIsThatArticle(article) {
    cy.get(this.selectors.title).should('not.contain', 'Loading ..');
    cy.get(this.selectors.title).invoke('text').should('match', new RegExp(`\\s+${article.title}\\s+`));
    cy.get(this.selectors.body).should('have.text', article.body);
  }
}
