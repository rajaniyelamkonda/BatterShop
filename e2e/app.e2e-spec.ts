import { BuyInOnlinePage } from './app.po';

describe('buy-in-online App', () => {
  let page: BuyInOnlinePage;

  beforeEach(() => {
    page = new BuyInOnlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
