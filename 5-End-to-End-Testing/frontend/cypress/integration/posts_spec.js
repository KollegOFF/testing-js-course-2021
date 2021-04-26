/// <reference types="cypress" />

import LoginPage from '../pages/login-page';
import EditorPage from '../pages/editor-page';
import ArticlePage from '../pages/article-page';

describe('Post tests', () => {
  beforeEach(() => {
    const loginPage = new LoginPage();
    loginPage.signIn('ne-admin@admin.ne', 'ne-admin');
  });

  it('Title and description and body are required', () => {
    const editorPage = new EditorPage();

    editorPage.open();

    editorPage.publishArticle();
    editorPage.hasErrors(['description can\'t be blank', 'description is too short (minimum is 1 character)']);

    editorPage.enterDescription('description');

    editorPage.publishArticle();
    editorPage.hasErrors(['body can\'t be blank']);

    editorPage.enterBody('body');

    editorPage.publishArticle();
    editorPage.hasErrors(['title can\'t be blank', 'title is too short (minimum is 1 character)']);
  });

  it('Publish new article', () => {
    // Arrange.
    const editorPage = new EditorPage();
    const articlePage = new ArticlePage();

    const title = 'title';
    const description = 'description';
    const body = 'body';

    // Act.
    editorPage.open();
    editorPage.enterTitle(title);
    editorPage.enterDescription(description);
    editorPage.enterBody(body);
    editorPage.enterTags(['tag']);

    editorPage.publishArticle();

    // Assert.
    articlePage.itIsThatArticle({ title, body });
  });

  it('Edit last article', () => {
    // Arrange.
    const editorPage = new EditorPage();
    const articlePage = new ArticlePage();

    const title = 'updated title';
    const description = 'updated description';
    const body = 'updated body';

    // Act.
    articlePage.openLastArticle();
    articlePage.editArticle();

    editorPage.enterTitle(`{selectall}{backspace}${title}`);
    editorPage.enterDescription(`{selectall}{backspace}${description}`);
    editorPage.enterBody(`{selectall}{backspace}${body}`);

    editorPage.updateArticle();

    // Assert.
    articlePage.itIsThatArticle({ title, body });
  });
});
