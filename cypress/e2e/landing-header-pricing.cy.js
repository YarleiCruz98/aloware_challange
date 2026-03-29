const homePage = require('../pages/HomePage');
const pricingPage = require('../pages/PricingPage');

describe('Landing — Header: Pricing @ALW-LP-007', () => {
  it('opens the Pricing page with the expected hero heading', () => {
    homePage.visit();
    homePage.clickHeaderPricing();
    pricingPage.assertPathAndHeading();
  });
});
