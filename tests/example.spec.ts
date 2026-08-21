import { test, expect, Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }
}

export class ExamplePage extends BasePage {
  async getHeading() {
    return await this.page.textContent('h1');
  }

  async clickLink(text: string) {
    await this.page.click(`text=${text}`);
  }
}

test.describe('Example Website', () => {
  let examplePage: ExamplePage;

  test.beforeEach(async ({ page }) => {
    examplePage = new ExamplePage(page);
    await examplePage.navigate('https://example.com');
  });

  test('should have correct title', async () => {
    const title = await examplePage.getTitle();
    expect(title).toBe('Example Domain');
  });

  test('should have main heading', async () => {
    const heading = await examplePage.getHeading();
    expect(heading).toContain('Example Domain');
  });

  test('page should be accessible', async ({ page }) => {
    await expect(page).toHaveURL('https://example.com');
    await expect(page.locator('h1')).toBeVisible();
  });
});
