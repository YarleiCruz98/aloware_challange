# Aloware QA Assessment – Selenium Demonstration

## Project Overview

This repository contains the Selenium demonstration script for the Aloware QA assessment.

The full assessment includes:
- a complete BDD/Gherkin test suite
- a QA test plan
- a daily quality strategy for broader site validation
- one simple Selenium script demonstrating a critical conversion scenario

Selected Selenium scenario:
- `ALW-LP-002` — Hero "Get a demo" navigates to the Request a demo page

## Repository Contents

- `test_aloware_get_demo.py` — Selenium demonstration script
- `Test_Cases.md` — Full BDD/Gherkin test suite
- `Yarlei_Cruz_Aloware_QA_Assessment.pdf` — Final assessment document
- `README.md` — Project overview and execution instructions

## Daily Quality Strategy

Beyond the single Selenium demonstration, the remainder of aloware.com should be validated through a layered daily QA routine.

### Daily Smoke

Focus on the highest-risk public journeys:
- homepage availability
- hero CTA routing
- demo page availability
- pricing CTA routing
- key public page reachability

Examples from the suite:
- `ALW-LP-001`
- `ALW-LP-002`
- `ALW-DEMO-001A`
- `ALW-DEMO-001B`
- `ALW-PRC-003`
- `ALW-LNK-001`

### Nightly Regression

Expand coverage to:
- pricing behavior
- mobile navigation
- apps/download links
- AI Voice Agent interactions
- accessibility basics
- console quality checks

Examples from the suite:
- `ALW-PRC-001`
- `ALW-PRC-002`
- `ALW-MOB-001`
- `ALW-MOB-002`
- `ALW-AI-001`
- `ALW-AI-002`
- `ALW-AI-003`
- `ALW-APP-001A` to `ALW-APP-002C`
- `ALW-QA-001` to `ALW-QA-004`

### Additional Daily Quality Activities

- link integrity monitoring
- visual regression on desktop and mobile
- accessibility checks for key CTAs
- console/network review for user-visible failures
- defect triage by severity

## Prerequisites

- Python 3.10+ installed
  - Verify with: `python --version`
- Google Chrome installed

## Setup

1. Create a virtual environment (recommended)  
   In PowerShell, from the project folder:

   `python -m venv .venv`  
   `.\.venv\Scripts\Activate.ps1`

2. Install dependencies

   `pip install -U selenium`

## Run

Execute the test:

`python .\test_aloware_get_demo.py`

## Assessment Deliverables

This repository provides the Selenium demonstration script requested in the assessment, while the full BDD test suite and QA test plan are included in the accompanying markdown/PDF deliverables.