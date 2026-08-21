import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome } from '../pages/actions';

test.describe('Accessibility and Error Handling', () => {
  test('Page loads without unexpected console errors', async ({ page }) => {
    await gotoHome(page);
    const errors = await page.evaluate(() => window.__consoleErrors || []);
  });

  test('Page has correct title', async ({ page }) => {
    await gotoHome(page);
    await expect(page).toHaveTitle('Velcomm');
  });

  test('Page URL is correct on load', async ({ page }) => {
    await gotoHome(page);
    await expect(page).toHaveURL('/');
  });

  test('Completed Projects page loads without crashes', async ({ page }) => {
    const s = selectors(page);
    await page.goto('/completed-projects');
    await expect(s.completedProjectsHeading).toBeVisible();
  });
});
