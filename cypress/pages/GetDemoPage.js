class GetDemoPage {
  assertPathAndHeading() {
    cy.url().should('include', '/get-demo');
    cy.get('h1').contains(/Request a demo/i).should('be.visible');
  }
}

module.exports = new GetDemoPage();