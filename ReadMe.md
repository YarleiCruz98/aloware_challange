# Aloware QA Assessment

**Prepared by:** Yarlei Cruz

## Project overview

This repository supports the **Aloware QA assessment** for **aloware.com** (marketing / landing focus). The **[`TEST_PLAN.md`](./TEST_PLAN.md)** follows the formal assessment structure (overview, scope, strategy, risks, environments, entry/exit criteria, automation strategy, deliverables, recommended execution order, daily quality, appendix) aligned with the submitted write-up. The plan recommends **Playwright** for scaling automation; **this repo** implements the required **Cypress + JavaScript** demonstration and CI.

It includes:

- a **sample test-case catalogue** in Gherkin form ([`Test_Cases.md`](./Test_Cases.md))
- a **test plan** ([`TEST_PLAN.md`](./TEST_PLAN.md))
- **three Cypress end-to-end tests** in **plain JavaScript** (demonstration automation)
- a documented **Cypress project structure** (`cypress/`, [`cypress.config.js`](./cypress.config.js))
- a **daily quality strategy** for the wider site (below)
- **HTML test reporting** via Mochawesome (see **Reporting** below — assignment bonus)
- **GitHub Actions** to run Cypress on push, pull request, manual trigger, and a scheduled cron ([`.github/workflows/cypress.yml`](./.github/workflows/cypress.yml))

**Demonstration scenarios (Cypress ↔ [`Test_Cases.md`](./Test_Cases.md)):**

| ID | Behaviour |
|----|-----------|
| **ALW-LP-002** | Hero **Get a demo** → `/get-demo` and **Request a demo** heading |
| **ALW-LP-003** | Header shows **Products**, **Solutions**, **Pricing**, **AI Hub**, **Resources** |
| **ALW-LP-007** | Header **Pricing** → `/pricing` and pricing hero copy |

> **Note:** Gherkin in `Test_Cases.md` is for documentation and traceability. Cypress specs are **`.cy.js`** (Mocha `describe` / `it`), not Cucumber `.feature` files.

---

## Repository contents

| Item | Description |
|------|-------------|
| [`Test_Cases.md`](./Test_Cases.md) | Full BDD/Gherkin-style catalogue (landing + additional areas) |
| [`TEST_PLAN.md`](./TEST_PLAN.md) | Full QA test plan (§2.1–2.15, §3 daily strategy, §4 appendix pointer) |
| [`cypress/e2e/`](./cypress/e2e/) | Three demonstration specs |
| [`cypress/pages/`](./cypress/pages/) | Page objects (`HomePage`, `GetDemoPage`, `PricingPage`) |
| [`cypress/support/`](./cypress/support/) | Support file + Mochawesome register |
| [`cypress.config.js`](./cypress.config.js) | `baseUrl`, viewport, reporter |
| [`package.json`](./package.json) | Scripts and devDependencies |
| [`.github/workflows/cypress.yml`](./.github/workflows/cypress.yml) | CI: Cypress on Chrome, report artifact |

---

## Cypress structure

```
cypress.config.js
cypress/
├── e2e/
│   ├── landing-hero-get-demo.cy.js      # ALW-LP-002
│   ├── landing-header-navigation.cy.js  # ALW-LP-003
│   └── landing-header-pricing.cy.js     # ALW-LP-007
├── pages/
│   ├── HomePage.js
│   ├── GetDemoPage.js
│   └── PricingPage.js
└── support/
    ├── e2e.js
    └── commands.js
```

---

## Prerequisites (Cypress)

- **Node.js** 18+ (CI uses Node 20)
- **Yarn** 1.x (or use `npx` equivalents)

---

## Setup & run (Cypress)

From the project root:

```bash
yarn install
yarn cy:run
```

- **Interactive mode:** `yarn cy:open`
- **Default target:** `https://aloware.com` (`baseUrl` in [`cypress.config.js`](./cypress.config.js))
- **Local default browser:** Electron (headless). **CI** uses **Chrome** on Ubuntu.

---

## Reporting (Mochawesome)

This project uses **[cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter)**.

After `yarn cy:run`, open:

**`cypress/reports/html/index.html`**

The `cypress/reports/` directory is listed in [`.gitignore`](./.gitignore) (regenerate reports locally or download the artifact from a GitHub Actions run).

---

## GitHub Actions

Workflow: **[`cypress.yml`](./.github/workflows/cypress.yml)**

- Runs on **push** and **pull request** to `main` / `master`
- **Run workflow** manually: **Actions** → **Cypress E2E** → **Run workflow**
- **Scheduled:** daily at **14:00 UTC** (adjust or remove the `schedule` block if you do not want cron runs)
- Uploads the **Mochawesome** HTML folder as an artifact when generated

---

## Daily quality strategy

The **canonical** narrative (smoke vs nightly, scenario IDs, extra activities) is in **[`TEST_PLAN.md`](./TEST_PLAN.md) — §3**. Summary below matches that document.

### Daily smoke

Focus on the highest-risk public journeys:

- homepage availability
- hero CTA routing
- demo page availability
- pricing CTA routing
- key public page reachability

Examples from the suite:

- ALW-LP-001, ALW-LP-002, ALW-DEMO-001A, ALW-DEMO-001B, ALW-PRC-003, ALW-LNK-001

### Nightly regression

Expand coverage to:

- pricing behaviour
- mobile navigation
- apps/download links
- AI Voice Agent interactions
- accessibility basics
- console quality checks

Examples from the suite:

- ALW-PRC-001, ALW-PRC-002, ALW-MOB-001, ALW-MOB-002, ALW-AI-001, ALW-AI-002, ALW-AI-003, ALW-APP-001A–ALW-APP-002C, ALW-QA-001–ALW-QA-004

### Additional daily quality activities

- link integrity monitoring
- visual regression on desktop and mobile
- accessibility checks for key CTAs
- console/network review for user-visible failures
- defect triage by severity

---

## Assessment deliverables (checklist)

| Deliverable | Where |
|-------------|--------|
| Sample test cases (landing + more) | [`Test_Cases.md`](./Test_Cases.md) |
| Test plan | [`TEST_PLAN.md`](./TEST_PLAN.md) |
| Three Cypress demos (JS) | [`cypress/e2e/`](./cypress/e2e/) |
| Cypress structure | [`cypress/`](./cypress/), [`cypress.config.js`](./cypress.config.js) |
| Daily quality steps | This README + [`TEST_PLAN.md`](./TEST_PLAN.md) |
| GitHub project / scripts | This repo + [`.github/workflows/cypress.yml`](./.github/workflows/cypress.yml) |
| Document / presentation | Add your PDF/slides (e.g. `Yarlei_Cruz_Aloware_QA_Assessment.pdf`) as required by the assessor |
| Reporting integration | Mochawesome — section **Reporting** in this file |

---

## Optional: Selenium script (legacy)

If `test_aloware_get_demo.py` is present in the repo: Python 3.10+, Chrome, `pip install -U selenium`, then `python .\test_aloware_get_demo.py` (ALW-LP-002 only). **Primary** automation for this assessment is **Cypress**.

---

## License / attribution

Assessment materials. Site content © Aloware.