import { SelectionPage } from './app.po';

describe('selection App', function() {
  let page: SelectionPage;

  beforeEach(() => {
    page = new SelectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
