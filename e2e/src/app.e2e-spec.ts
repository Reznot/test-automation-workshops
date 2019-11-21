import { AppPage } from './app.po';
import { browser, logging, protractor } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Walidator PESEL');
  });

  it('should pesel input field be empty', () => {
    page.navigateTo();
    expect(page.getPeselInput().getText()).toEqual('');
  });

  it('should validate pesel', () => {
    var EC = protractor.ExpectedConditions;
    page.navigateTo();
    let peselInput = page.getPeselInput();
    peselInput.sendKeys('97062412939');
    page.getSubmitButton().click()
    browser.sleep(1000)
    expect(page.getPeselValidSpanText()).toEqual('PESEL prawidłowy')
  });

  afterEach(async () => {
    // Anything?
  });
});
