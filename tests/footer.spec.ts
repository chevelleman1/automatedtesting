import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome } from '../pages/actions';

test.describe('Footer', () => {
  test('Footer contains social media links', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.facebookLink).toBeVisible();
    await expect(s.twitterLink).toBeVisible();
    await expect(s.linkedInLink).toBeVisible();
    await expect(s.instagramLink).toBeVisible();
  });

  test('Footer contains legal links', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.privacyPolicyLink).toBeVisible();
    await expect(s.termsOfServiceLink).toBeVisible();
  });

  test('Footer displays copyright notice', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await expect(s.copyrightText).toBeVisible();
  });

  test('Privacy Policy and Terms of Service link to home anchor', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await s.privacyPolicyLink.click();
    await expect(page).toHaveURL('/#home');
  });
});
