import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome } from '../pages/actions';

test.describe('Hero Section', () => {
  test('Hero heading and subtitle are visible', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.heroHeading).toBeVisible();
    await expect(s.heroSubtitle).toBeVisible();
  });

  test('Get Started button is present and clickable', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.getStarted).toBeVisible();
    await s.getStarted.click();
  });

  test('Learn More button is present and clickable', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.learnMore).toBeVisible();
    await s.learnMore.click();
  });
});
