import { type Page, type Locator } from '@playwright/test';

export const selectors = (page: Page) => ({
  navHome: page.locator('button:has-text("Home")'),
  navAbout: page.locator('button:has-text("About")'),
  navServices: page.locator('button:has-text("Services")'),
  navContact: page.locator('button:has-text("Contact")'),

  heroHeading: page.getByRole('heading', { name: 'Welcome to Velcomm' }),
  heroSubtitle: page.getByText('Professional services'),
  getStarted: page.locator('button:has-text("Get Started")'),
  learnMore: page.locator('button:has-text("Learn More")'),

  aboutHeading: page.getByRole('heading', { name: 'About Us' }),
  aboutText: page.getByText('We are a dedicated'),
  qualityServiceCard: page.getByRole('heading', { name: 'Quality Service' }),
  professionalTeamCard: page.getByRole('heading', { name: 'Professional Team' }),
  customerFocusCard: page.getByRole('heading', { name: 'Customer Focus' }),
  yearsOfExperienceCard: page.getByRole('heading', { name: 'Years Of Experience' }),
  completedProjectsLink: page.locator('a[href="/completed-projects"]'),

  completedProjectsHeading: page.getByRole('heading', { name: 'Completed Projects' }),
  firstProjectHeading: page.getByRole('heading', { name: 'Enterprise Cloud Migration ECM' }),
  backToHomeButton: page.locator('button:has-text("Back to Home")'),

  servicesHeading: page.getByRole('heading', { name: 'Our Services' }),
  consultationCard: page.getByRole('heading', { name: 'Consultation' }),
  implementationCard: page.getByRole('heading', { name: 'Implementation' }),
  analysisCard: page.getByRole('heading', { name: 'Analysis' }),
  strategyCard: page.getByRole('heading', { name: 'Strategy' }),

  consultationDescription: page.getByText('Professional advice and'),
  implementationDescription: page.getByText('Expert execution of plans and'),
  analysisDescription: page.getByText('Comprehensive evaluation and'),
  strategyDescription: page.getByText('Customized solutions for your'),

  contactHeading: page.getByRole('heading', { name: 'Contact Us' }),
  nameInput: page.getByRole('textbox', { name: 'Your Name' }),
  emailInput: page.getByRole('textbox', { name: 'Your Email' }),
  messageInput: page.getByRole('textbox', { name: 'Your Message' }),
  sendMessageButton: page.getByRole('button', { name: 'Send Message' }),
  contactSuccessMessage: page.getByText("We'll get back to you shortly!"),
  addressText: page.getByText('123 Business Street'),
  emailText: page.getByText('info@velcomm.com'),
  phoneText: page.getByText('(555) 123-'),

  facebookLink: page.getByRole('link', { name: 'Facebook' }),
  twitterLink: page.getByRole('link', { name: 'Twitter' }),
  linkedInLink: page.getByRole('link', { name: 'LinkedIn' }),
  instagramLink: page.getByRole('link', { name: 'Instagram' }),
  privacyPolicyLink: page.getByRole('link', { name: 'Privacy Policy' }),
  termsOfServiceLink: page.getByRole('link', { name: 'Terms of Service' }),
  copyrightText: page.getByText('© 2024 Velcomm. All rights'),
});
