class HomePage {
  visit() {
    cy.visit('/');
  }

  header() {
    return cy.get('header, [role="banner"]', { timeout: 20000 }).first();
  }

  assertCoreHeaderNavigationVisible() {
    const labels = ['Products', 'Solutions', 'Pricing', 'AI Hub', 'Resources'];
    this.header().within(() => {
      labels.forEach((text) => {
        cy.contains(new RegExp(text, 'i')).first().should('be.visible');
      });
    });
  }

  clickHeaderPricing() {
    this.header().within(() => {
      cy.contains('a', /^Pricing$/i).first().click();
    });
  }

  clickHeroGetDemo() {
    cy.get('a[href*="get-demo"]', { timeout: 20000 })
      .filter(':visible')
      .first()
      .scrollIntoView()
      .click({ force: true });
  }
}

module.exports = new HomePage();
