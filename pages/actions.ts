import { type Page } from '@playwright/test';
import { selectors } from './selectors';

export async function gotoHome(page: Page) {
  await page.goto('/');
}

export async function scrollToSection(page: Page, section: 'about' | 'services' | 'contact') {
  const s = selectors(page);
  if (section === 'about') await s.navAbout.click();
  if (section === 'services') await s.navServices.click();
  if (section === 'contact') await s.navContact.click();
}

export async function navigateToCompletedProjects(page: Page) {
  const s = selectors(page);
  await gotoHome(page);
  await s.navAbout.click();
  await s.completedProjectsLink.click();
}

export async function goBackToHomeFromProjects(page: Page) {
  const s = selectors(page);
  await s.backToHomeButton.click();
}
