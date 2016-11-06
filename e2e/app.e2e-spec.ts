import {NgColoroiPage} from './app.po';

describe('ng-coloroi App', function () {
    let page: NgColoroiPage;

    beforeEach(() => {
        page = new NgColoroiPage();
    });

    it('should display message saying app works', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
