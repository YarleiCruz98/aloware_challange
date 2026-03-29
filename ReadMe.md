# Aloware QA Assessment

**Prepared by:** Yarlei Cruz

## Project overview

This repository supports the **Aloware QA assessment** for **aloware.com**. The **formal test plan** (overview, scope, strategy, risks, environments, entry/exit criteria, automation strategy, deliverables, recommended execution order, daily quality, reporting, appendix) is **[`Yarlei_Cruz_Aloware_QA_Assessment.pdf`](./Yarlei_Cruz_Aloware_QA_Assessment.pdf)**. **This repo** implements the required **Cypress + JavaScript** demonstration and CI.

It includes:

- a **sample test-case catalogue** in Gherkin form ([`Test_Cases.md`](./Test_Cases.md)) — same scenarios as Appendix A in the PDF
- the **test plan** as **[`Yarlei_Cruz_Aloware_QA_Assessment.pdf`](./Yarlei_Cruz_Aloware_QA_Assessment.pdf)**
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

---

## Repository contents

| Item | Description |
|------|-------------|
| [`Test_Cases.md`](./Test_Cases.md) | Full BDD/Gherkin-style catalogue (landing + additional areas); mirrors Appendix A in the PDF |
| [`Yarlei_Cruz_Aloware_QA_Assessment.pdf`](./Yarlei_Cruz_Aloware_QA_Assessment.pdf) | **QA test plan** (PDF): sections 2–5 + Appendix A |
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

The **canonical** narrative (smoke vs nightly, scenario IDs, extra activities) is in **[`Yarlei_Cruz_Aloware_QA_Assessment.pdf`](./Yarlei_Cruz_Aloware_QA_Assessment.pdf) — section 3**. Summary below matches that document.

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
| Test plan (written assessment) | [`Yarlei_Cruz_Aloware_QA_Assessment.pdf`](./Yarlei_Cruz_Aloware_QA_Assessment.pdf) |
| Three Cypress demos (JS) | [`cypress/e2e/`](./cypress/e2e/) |
| Cypress structure | [`cypress/`](./cypress/), [`cypress.config.js`](./cypress.config.js) |
| Daily quality steps | Section 3 of the PDF + summary in this README |
| GitHub project / scripts | This repo + [`.github/workflows/cypress.yml`](./.github/workflows/cypress.yml) |
| Document / presentation | Same PDF (`Yarlei_Cruz_Aloware_QA_Assessment.pdf`) |
| Reporting integration | Mochawesome — section **Reporting** |
