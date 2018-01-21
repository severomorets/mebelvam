import { Mebelvam18Page } from './app.po';

describe('mebelvam18 App', () => {
  let page: Mebelvam18Page;

  beforeEach(() => {
    page = new Mebelvam18Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
