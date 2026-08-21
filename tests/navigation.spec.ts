import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome, scrollToSection } from '../pages/actions';

test.describe('Navigation', () => {
  test('Home navigation button scrolls to top', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await s.navHome.click();
    await expect(s.heroHeading).toBeVisible();
  });

  test('About navigation button scrolls to About Us section', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'about');
    await expect(s.aboutHeading).toBeVisible();
  });

  test('Services navigation button scrolls to Our Services section', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'services');
    await expect(s.servicesHeading).toBeVisible();
  });

  test('Contact navigation button scrolls to Contact Us section', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await expect(s.contactHeading).toBeVisible();
  });
});
