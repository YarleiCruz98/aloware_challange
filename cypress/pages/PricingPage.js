class PricingPage {
  assertPathAndHeading() {
    cy.url().should('include', '/pricing');
    cy.get('h1')
      .contains(/Truly unlimited agent minutes/i)
      .should('be.visible');
  }
}

module.exports = new PricingPage();
