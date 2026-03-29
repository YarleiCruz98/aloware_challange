const homePage = require('../pages/HomePage');
const getDemoPage = require('../pages/GetDemoPage');

describe('Landing — Hero CTA: Get a demo @ALW-LP-002', () => {
  it('navigates to /get-demo and shows Request a demo heading', () => {
    homePage.visit();
    homePage.clickHeroGetDemo();
    getDemoPage.assertPathAndHeading();
  });
});
