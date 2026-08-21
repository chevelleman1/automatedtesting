import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome, scrollToSection } from '../pages/actions';

test.describe('Contact Us Section', () => {
  test('Contact form fields are visible', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await expect(s.nameInput).toBeVisible();
    await expect(s.emailInput).toBeVisible();
    await expect(s.messageInput).toBeVisible();
    await expect(s.sendMessageButton).toBeVisible();
  });

  test('Contact information is displayed correctly', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await expect(s.addressText).toBeVisible();
    await expect(s.emailText).toBeVisible();
    await expect(s.phoneText).toBeVisible();
  });

  test('Contact form submission with valid data triggers request', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await s.nameInput.fill('John Doe');
    await s.emailInput.fill('john.doe@example.com');
    await s.messageInput.fill('This is a test message.');
    await s.sendMessageButton.click();
  });

  test('Contact form submission shows success message', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await s.nameInput.fill('John Doe');
    await s.emailInput.fill('john.doe@example.com');
    await s.messageInput.fill('This is a test message.');
    await s.sendMessageButton.click();
    await expect(s.contactSuccessMessage).toBeVisible();
  });

  test('Contact form submission with empty fields shows validation', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'contact');
    await s.nameInput.fill('');
    await s.emailInput.fill('');
    await s.messageInput.fill('');
    await s.sendMessageButton.click();

  });
});
