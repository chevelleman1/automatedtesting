import { test, expect, Page } from '@playwright/test';

test.describe('Basic Playwright Operations', () => {
  test('can navigate to a URL', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveURL('https://example.com');
  });

  test('can take a screenshot', async ({ page }) => {
    await page.goto('https://example.com');
    await page.screenshot({ path: 'screenshot.png' });
  });

  test('can evaluate JavaScript', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBeTruthy();
  });
});
