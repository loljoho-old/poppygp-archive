/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.toolbarEl    = element(by.css('gp-toolbar'));
  this.mainEl       = element(by.css('.main'));
  this.sidenavEl    = this.mainEl.element(by.css('md-sidenav'));
  this.playerEl     = this.mainEl.element(by.css('gp-player'));
  this.contentEl    = this.mainEl.element(by.css('gp-content'));
  this.footerEl     = element(by.css('gp-footer'));
};

module.exports = new MainPage();
