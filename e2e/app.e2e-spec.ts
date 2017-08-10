import { MyMusicPage } from './app.po';

describe('my-music App', () => {
  let page: MyMusicPage;

  beforeEach(() => {
    page = new MyMusicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
