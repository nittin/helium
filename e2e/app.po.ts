import {browser, element, by} from 'protractor';

export class NgColoroiPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root .outer')).getText();
    }
}
