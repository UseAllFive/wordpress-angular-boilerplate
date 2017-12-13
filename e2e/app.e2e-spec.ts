import { WordpressAngularBoilerplatePage } from './app.po';

describe('wordpress-angular-boilerplate App', () => {
  let page: WordpressAngularBoilerplatePage;

  beforeEach(() => {
    page = new WordpressAngularBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
