import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getPeselInput() {
    return element(by.name('peselInput'));
  }

  getSubmitButton() {
    return element(by.name('submitButton'));
  }

  getPeselValidSpanText() {
    return element(by.name('peselValidSpan')).getText() as Promise<string>;
  }
}
