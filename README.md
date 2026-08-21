# UI Testing with Playwright

Automated UI testing project using Playwright and TypeScript.

## Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

## Setup

```bash
npm install
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests with UI mode
npm run test:ui

# View HTML report
npm run report
```

## Project Structure

```
├── tests/
│   ├── example.spec.ts
│   └── basic.spec.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Writing Tests

Create new test files in the `tests/` directory with `.spec.ts` extension.

Example:
```typescript
import { test, expect } from '@playwright/test';

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('h1')).toBeVisible();
});
```
