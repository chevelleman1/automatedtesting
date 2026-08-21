import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome, scrollToSection } from '../pages/actions';

test.describe('Services Section', () => {
  test('Our Services section displays four service cards', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'services');
    await expect(s.servicesHeading).toBeVisible();
    await expect(s.consultationCard).toBeVisible();
    await expect(s.implementationCard).toBeVisible();
    await expect(s.analysisCard).toBeVisible();
    await expect(s.strategyCard).toBeVisible();
  });

  test('Each service card contains title and description', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'services');
    await expect(s.consultationDescription).toBeVisible();
    await expect(s.implementationDescription).toBeVisible();
    await expect(s.analysisDescription).toBeVisible();
    await expect(s.strategyDescription).toBeVisible();
  });
});
