const homePage = require('../pages/HomePage');

describe('Landing — Header navigation @ALW-LP-003', () => {
  it('shows Products, Solutions, Pricing, AI Hub, and Resources in the header', () => {
    homePage.visit();
    homePage.assertCoreHeaderNavigationVisible();
  });
});