import { NUAppealsPage } from './app.po';

describe('nuappeals App', () => {
  let page: NUAppealsPage;

  beforeEach(() => {
    page = new NUAppealsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
