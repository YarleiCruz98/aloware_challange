# Test Cases (Gherkin)

## Table of contents

- [Homepage - Hero CTAs, header navigation, and footer](#homepage---hero-ctas-header-navigation-and-footer)
- [Mobile navigation - Hamburger menu](#mobile-navigation---hamburger-menu)
- [Get Demo - Request a demo form](#get-demo---request-a-demo-form)
- [Pricing - Plan tabs, billing options, and signup CTA](#pricing---plan-tabs-billing-options-and-signup-cta)
- [AI Voice Agent - Demo CTA, carousel controls, and FAQ accordion](#ai-voice-agent---demo-cta-carousel-controls-and-faq-accordion)
- [Apps / Download - Platform links and content cards](#apps--download---platform-links-and-content-cards)
- [Link integrity - Key public pages load successfully](#link-integrity---key-public-pages-load-successfully)
- [Accessibility basics - Keyboard access to primary homepage CTAs](#accessibility-basics---keyboard-access-to-primary-homepage-ctas)

## Homepage - Hero CTAs, header navigation, and footer

```gherkin
Feature: Homepage - Hero CTAs, header navigation, and footer
  Background:
    Given I am a public visitor

  @homepage @conversion @cta @external @desktop @p0 @ALW-LP-001
  Scenario: Hero "Start free trial" navigates to signup
    Given I am on "https://aloware.com/" on a desktop viewport
    When I click the link "Start free trial"
    Then the current URL should equal "https://app.aloware.com/signup"
    And the page title should not be empty

  @homepage @conversion @cta @desktop @p0 @ALW-LP-002
  Scenario: Hero "Get a demo" navigates to the Request a demo page
    Given I am on "https://aloware.com/" on a desktop viewport
    When I click the link "Get a demo"
    Then the current URL should equal "https://aloware.com/get-demo"
    And I should see an h1 heading "Request a demo"

  @homepage @header @navigation @desktop @p0 @ALW-LP-003
  Scenario: Header contains core navigation items
    Given I am on "https://aloware.com/" on a desktop viewport
    Then I should see the navigation item "Products"
    And I should see the navigation item "Solutions"
    And I should see the navigation item "Pricing"
    And I should see the navigation item "AI Hub"
    And I should see the navigation item "Resources"

  @homepage @header @navigation @desktop @p0 @ALW-LP-007
  Scenario: Header "Pricing" link opens the Pricing page
    Given I am on "https://aloware.com/" on a desktop viewport
    When I click the link "Pricing"
    Then the current URL should equal "https://aloware.com/pricing"
    And I should see an h1 heading "Truly unlimited agent minutes, no hidden fees."

  @homepage @footer @legal @navigation @p1 @ALW-LP-005
  Scenario Outline: Footer legal links open successfully
    Given I am on "https://aloware.com/"
    When I scroll to the footer
    And I click the link "<linkText>"
    Then the current URL should start with "https://aloware.com/"
    And the page title should not be empty
    And I should not see the text "404"
    Examples:
      | linkText             |
      | Privacy policy       |
      | Terms and conditions |

  @homepage @footer @contact @mobile @p1 @ALW-LP-006A
  Scenario: Footer phone link uses tel:
    Given I am on "https://aloware.com/" on a mobile viewport
    When I scroll to the footer
    Then the link "(855) 256 2001" should have an href starting with "tel:"

  @homepage @footer @contact @mobile @p1 @ALW-LP-006B
  Scenario: Footer email link uses mailto:
    Given I am on "https://aloware.com/" on a mobile viewport
    When I scroll to the footer
    Then the link "sales@aloware.com" should have an href starting with "mailto:"

  @homepage @navigation @content @mobile @p0 @ALW-LP-004
  Scenario: "Marketing" tile is not a placeholder link
    Given I am on "https://aloware.com/" on a mobile viewport
    When I scroll to the section "Built for teams that value connection"
    Then the link "Marketing" should have an href not equal to "#"
```

## Mobile navigation - Hamburger menu

```gherkin
Feature: Mobile navigation - Hamburger menu
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/" on a mobile viewport

  @mobile @navigation @menu @header @p0 @ALW-MOB-001
  Scenario: Hamburger menu opens and shows key navigation items
    When I click the button "menu"
    Then I should see the navigation item "Products"
    And I should see the navigation item "Solutions"
    And I should see the navigation item "Pricing"
    And I should see the navigation item "AI Hub"
    And I should see the navigation item "Resources"
    And I should see the navigation item "Knowledge Base"
    And I should see the navigation item "Download App"
    And I should see the navigation item "Become a Partner"
    And I should see the navigation item "Login"
    And I should see the navigation item "Get a Demo"

  @mobile @navigation @menu @p1 @ALW-MOB-002
  Scenario: Mobile "Products" expands to reveal at least one submenu link
    Given I click the button "menu"
    When I click the button "Products"
    Then I should see at least one visible link within the mobile menu other than "Pricing"

  @mobile @navigation @external @auth-entrypoint @p1 @ALW-MOB-003
  Scenario: Mobile "Login" opens a non-empty page without redirect loop
    Given I click the button "menu"
    When I click the link "Login"
    Then the current URL should start with "https://"
    And the page title should not be empty
    And the final URL should be stable after 5 seconds
```

## Get Demo - Request a demo form

```gherkin
Feature: Get Demo - Request a demo form
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/get-demo"

  @get-demo @conversion @p0 @ALW-DEMO-001A
  Scenario: Demo page shows the Request a demo heading
    Then I should see an h1 heading "Request a demo"

  @get-demo @conversion @form @iframe @p0 @ALW-DEMO-001B
  Scenario: Demo form iframe becomes visible and is not stuck loading
    When I wait up to 10 seconds
    Then I should see a visible iframe on the page
    And I should not see the text "Carregando"

  @get-demo @conversion @form @validation @p0 @ALW-DEMO-002
  Scenario: Demo form blocks submission when using a personal email domain
    Given the demo form iframe is visible
    When I complete all required demo form fields with valid data except email "qa_candidate@gmail.com"
    And I submit the demo form
    Then submission should be blocked
    And I should see a visible validation message indicating personal email domains are not allowed

  @get-demo @conversion @form @submission @p0 @ALW-DEMO-003
  Scenario: Demo form submission succeeds with a valid corporate email
    Given the demo form iframe is visible
    When I complete all required demo form fields with valid values including email "qa@acme-test.com"
    And I submit the demo form
    Then I should be redirected to the scheduling page
    And I should be able to select the country/time zone
    And I should be able to select a date and one of the available time slots shown on the screen
    And I should be able to complete the meeting booking flow
```

## Pricing - Plan tabs, billing options, and signup CTA

```gherkin
Feature: Pricing - Plan tabs, billing options, and signup CTA
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/pricing" on a desktop viewport

  @pricing @tabs @navigation @desktop @p0 @ALW-PRC-001
  Scenario: Pricing plan tabs switch and display the selected panel
    When I select the tab "Human agents"
    Then the tab "Human agents" should be selected
    And the tab panel for "Human agents" should be visible
    When I select the tab "AI agents"
    Then the tab "AI agents" should be selected
    And the tab panel for "AI agents" should be visible
    When I select the tab "Startup plans"
    Then the tab "Startup plans" should be selected
    And the tab panel for "Startup plans" should be visible

  @pricing @billing @tabs @p0 @ALW-PRC-002
  Scenario: Switching from Quarterly to Monthly changes the displayed price for a named plan
    Given I select the tab "Human agents"
    And I select the billing option "Quarterly"
    And I capture the displayed price text for the plan "iPro + AI"
    When I select the billing option "Monthly"
    Then the displayed price text for the plan "iPro + AI" should not equal the previously captured price text

  @pricing @cta @conversion @external @p0 @ALW-PRC-003
  Scenario: Pricing CTA "Get your 7 days free" routes to signup
    When I click the link "Get your 7 days free"
    Then the current URL should equal "https://app.aloware.com/signup"
    And the page title should not be empty

  @pricing @content @copy @p1 @ALW-PRC-004
  Scenario: Pricing page does not contain the misspelling "quaterly"
    Then I should not see the text "quaterly"
```

## AI Voice Agent - Demo CTA, carousel controls, and FAQ accordion

```gherkin
Feature: AI Voice Agent - Demo CTA, carousel controls, and FAQ accordion
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/ai-voice-agent" on a desktop viewport

  @ai-voice-agent @cta @conversion @p1 @ALW-AI-001
  Scenario: "Get AloAi Voice Agent demo" opens the demo page
    When I click the link "Get AloAi Voice Agent demo"
    Then the current URL should equal "https://aloware.com/ai-voice-agent-demo"
    And the page title should not be empty

  @ai-voice-agent @carousel @ui @p1 @ALW-AI-002
  Scenario: Carousel "Next slide" and "Previous slide" buttons change the active slide
    Given I capture the active slide label
    When I click the button "Next slide"
    Then the active slide label should not equal the previously captured active slide label
    When I click the button "Previous slide"
    Then the active slide label should equal the initially captured active slide label

  @ai-voice-agent @faq @accordion @content @p2 @ALW-AI-003
  Scenario: FAQ item "What are AI voice agents?" expands and collapses
    When I expand the FAQ item "What are AI voice agents?"
    Then I should see the FAQ answer for "What are AI voice agents?"
    When I collapse the FAQ item "What are AI voice agents?"
    Then I should not see the FAQ answer for "What are AI voice agents?"
```

## Apps / Download - Platform links and content cards

```gherkin
Feature: Apps / Download - Platform links and content cards
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/apps"

  @apps @downloads @external @p0 @ALW-APP-001A
  Scenario: Windows download link targets the expected installer
    Then the link "Windows" should have an href containing "Talk+Setup+Latest.exe"

  @apps @downloads @external @p0 @ALW-APP-001B
  Scenario: Android link targets Google Play
    Then the link "Android" should have an href containing "play.google.com"

  @apps @downloads @external @p0 @ALW-APP-001C
  Scenario: MacOS download link targets the expected DMG
    Then the link "MacOS" should have an href containing "Talk-Latest.dmg"

  @apps @downloads @external @p0 @ALW-APP-001D
  Scenario: iOS link targets the Apple App Store
    Then the link "iOS" should have an href containing "apps.apple.com"

  @apps @content @navigation @links @p1 @ALW-APP-002A
  Scenario: "Cloud-based" card is not a placeholder link
    Then the link "Cloud-based" should have an href not equal to "#"

  @apps @content @navigation @links @p1 @ALW-APP-002B
  Scenario: "Smartphone App" card is not a placeholder link
    Then the link "Smartphone App" should have an href not equal to "#"

  @apps @content @navigation @links @p1 @ALW-APP-002C
  Scenario: "Remote-ready" card is not a placeholder link
    Then the link "Remote-ready" should have an href not equal to "#"
```

## Link integrity - Key public pages load successfully

```gherkin
Feature: Link integrity - Key public pages load successfully
  Background:
    Given I am a public visitor

  @links @navigation @smoke @p0 @ALW-LNK-001
  Scenario Outline: Key destination pages load and show a non-empty title
    Given I navigate to "<url>"
    Then the current URL should start with "https://aloware.com/"
    And the page title should not be empty
    And I should not see the text "404"
    Examples:
      | url                              |
      | https://aloware.com/pricing      |
      | https://aloware.com/apps         |
      | https://aloware.com/partnerships |
      | https://aloware.com/about        |
      | https://aloware.com/contact-us   |
      | https://aloware.com/blog         |
      | https://aloware.com/updates      |
      | https://aloware.com/user-hub     |
      | https://aloware.com/media        |

  @quality @console @p1 @ALW-QA-001
  Scenario: Homepage has zero console errors
    Given I navigate to "https://aloware.com/"
    Then the number of console messages with level "error" should be 0

  @quality @console @p1 @ALW-QA-002
  Scenario: Get Demo page has zero console errors
    Given I navigate to "https://aloware.com/get-demo"
    Then the number of console messages with level "error" should be 0

  @quality @console @p1 @ALW-QA-003
  Scenario: Pricing page has zero console errors
    Given I navigate to "https://aloware.com/pricing"
    Then the number of console messages with level "error" should be 0

  @quality @console @p1 @ALW-QA-004
  Scenario: AI Voice Agent page has zero console errors
    Given I navigate to "https://aloware.com/ai-voice-agent"
    Then the number of console messages with level "error" should be 0
```

## Accessibility basics - Keyboard access to primary homepage CTAs

```gherkin
Feature: Accessibility basics - Keyboard access to primary homepage CTAs
  Background:
    Given I am a public visitor
    And I am on "https://aloware.com/" on a desktop viewport

  @a11y @keyboard @homepage @desktop @p1 @ALW-A11Y-001A
  Scenario: "Start free trial" is reachable and activatable by keyboard
    When I press Tab until the focused element is the link "Start free trial"
    Then the focused element should have a visible focus indicator
    When I press Enter
    Then the current URL should equal "https://app.aloware.com/signup"

  @a11y @keyboard @homepage @desktop @p1 @ALW-A11Y-001B
  Scenario: "Get a demo" is reachable and activatable by keyboard
    Given I am on "https://aloware.com/" on a desktop viewport
    When I press Tab until the focused element is the link "Get a demo"
    Then the focused element should have a visible focus indicator
    When I press Enter
    Then the current URL should equal "https://aloware.com/get-demo"
```