import { GithubApiPage } from './app.po';

describe('github-api App', () => {
  let page: GithubApiPage;

  beforeEach(() => {
    page = new GithubApiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
