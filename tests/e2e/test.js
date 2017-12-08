/* global describe, it, browser */
const { expect } = require('chai');

describe('App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React Router Experiments');
  });
  it('Should render the right heading', () => {
    browser.url('http://localhost:3000/');
    const actualHeading = browser.element('.heading').getText();

    expect(actualHeading).to.eql('Home');
  });
  it('should change to About page when About link is clicked', () => {
    browser.url('http://localhost:3000/');
    browser.click('.about-link');
    const actualHeading = browser.element('.heading').getText();

    expect(actualHeading).to.eql('About');
      });
});
describe('About Route', () => {
  it('Should load with the right heading', () => {
    browser.url('http://localhost:3000/about');
    const actualHeading = browser.element('.heading').getText();

    expect(actualHeading).to.eql('About');
      });
});
