import { ThePlugsPage } from './app.po';

describe('the-plugs App', () => {
  let page: ThePlugsPage;

  beforeEach(() => {
    page = new ThePlugsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
