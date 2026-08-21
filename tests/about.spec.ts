import { test, expect } from '@playwright/test';
import { selectors } from '../pages/selectors';
import { gotoHome, scrollToSection, navigateToCompletedProjects, goBackToHomeFromProjects } from '../pages/actions';

test.describe('About Us Section', () => {
  test('About Us section displays company description', async ({ page }) => {
    const s = selectors(page);
    await gotoHome(page);
    await scrollToSection(page, 'about');
    await expect(s.aboutHeading).toBeVisible();
    await expect(s.aboutText).toBeVisible();
    await expect(s.qualityServiceCard).toBeVisible();
    await expect(s.professionalTeamCard).toBeVisible();
    await expect(s.customerFocusCard).toBeVisible();
    await expect(selectors(page).yearsOfExperienceCard).toBeVisible();
  });

  test('Completed projects link navigates to correct page', async ({ page }) => {
    const s = selectors(page);
    await navigateToCompletedProjects(page);
    await expect(page).toHaveURL('https://velcommsoftware.ddns.net/completed-projects');
  });

  test('Completed Projects page displays project list', async ({ page }) => {
    const s = selectors(page);
    await page.goto('https://velcommsoftware.ddns.net/completed-projects');
    await expect(s.completedProjectsHeading).toBeVisible();
    await expect(s.firstProjectHeading).toBeVisible();
  });

  test('Back to Home button returns to main page', async ({ page }) => {
    const s = selectors(page);
    await page.goto('https://velcommsoftware.ddns.net/completed-projects');
    await goBackToHomeFromProjects(page);
    await expect(page).toHaveURL('https://velcommsoftware.ddns.net/');
  });
});
