# Velcomm Website Test Plan

## Application Overview

Test plan for Velcomm single-page marketing website (https://velcommsoftware.ddns.net/). The site includes a hero section, About Us, Services, Contact Us form, and a Completed Projects sub-page. Navigation uses scroll-to-section behavior. Contact form submission currently fails with a 500 error.

## Test Scenarios

### 1. Navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Home navigation button scrolls to top

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the Home navigation button
    - expect: Home section is visible at the top of the page

#### 1.2. About navigation button scrolls to About Us section

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the About navigation button
    - expect: About Us heading is visible

#### 1.3. Services navigation button scrolls to Our Services section

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the Services navigation button
    - expect: Our Services heading is visible

#### 1.4. Contact navigation button scrolls to Contact Us section

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Click the Contact navigation button
    - expect: Contact Us heading is visible

### 2. Hero Section

**Seed:** `tests/seed.spec.ts`

#### 2.1. Hero heading and subtitle are visible

**File:** `tests/hero.spec.ts`

**Steps:**
  1. Load the home page
    - expect: Heading 'Welcome to Velcomm' is visible
  2. Scroll to the hero section
    - expect: Subtitle 'Professional services tailored to your needs' is visible

#### 2.2. Get Started button is present and clickable

**File:** `tests/hero.spec.ts`

**Steps:**
  1. Click the Get Started button
    - expect: Get Started button is visible and enabled

#### 2.3. Learn More button is present and clickable

**File:** `tests/hero.spec.ts`

**Steps:**
  1. Click the Learn More button
    - expect: Learn More button is visible and enabled

### 3. About Us Section

**Seed:** `tests/seed.spec.ts`

#### 3.1. About Us section displays company description

**File:** `tests/about.spec.ts`

**Steps:**
  1. Scroll to the About Us section
    - expect: Heading 'About Us' is visible
  2. Verify about text content
    - expect: Company description paragraphs are visible
  3. Verify value cards
    - expect: Four value proposition cards are visible

#### 3.2. Completed projects link navigates to correct page

**File:** `tests/about.spec.ts`

**Steps:**
  1. Click the 'here' link in the Years Of Experience card
    - expect: Link to /completed-projects is present
  2. Wait for navigation
    - expect: URL contains /completed-projects

#### 3.3. Completed Projects page displays project list

**File:** `tests/about.spec.ts`

**Steps:**
  1. Scroll to the projects heading
    - expect: Heading 'Completed Projects' is visible
  2. Verify project cards
    - expect: At least one project entry is visible with year, title, client, and description

#### 3.4. Back to Home button returns to main page

**File:** `tests/about.spec.ts`

**Steps:**
  1. Click the 'Back to Home' button
    - expect: Back to Home button is visible
  2. Wait for navigation
    - expect: URL is https://velcommsoftware.ddns.net/

### 4. Services Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Our Services section displays four service cards

**File:** `tests/services.spec.ts`

**Steps:**
  1. Scroll to the Our Services section
    - expect: Heading 'Our Services' is visible
  2. Verify Consultation card
    - expect: Consultation service card is visible
  3. Verify Implementation card
    - expect: Implementation service card is visible
  4. Verify Analysis card
    - expect: Analysis service card is visible
  5. Verify Strategy card
    - expect: Strategy service card is visible

#### 4.2. Each service card contains title and description

**File:** `tests/services.spec.ts`

**Steps:**
  1. Verify Consultation card details
    - expect: Consultation card has icon, title, and description
  2. Verify Implementation card details
    - expect: Implementation card has icon, title, and description
  3. Verify Analysis card details
    - expect: Analysis card has icon, title, and description
  4. Verify Strategy card details
    - expect: Strategy card has icon, title, and description

### 5. Contact Us Section

**Seed:** `tests/seed.spec.ts`

#### 5.1. Contact form fields are visible

**File:** `tests/contact.spec.ts`

**Steps:**
  1. Scroll to Contact Us section
    - expect: Your Name textbox is visible
  2. Verify Email field
    - expect: Your Email textbox is visible
  3. Verify Message field
    - expect: Your Message textbox is visible
  4. Verify Send Message button
    - expect: Send Message button is visible

#### 5.2. Contact information is displayed correctly

**File:** `tests/contact.spec.ts`

**Steps:**
  1. Verify contact address
    - expect: Address is displayed
  2. Verify contact email
    - expect: Email info@velcomm.com is displayed
  3. Verify contact phone
    - expect: Phone (555) 123-4567 is displayed

#### 5.3. Contact form submission with valid data triggers request

**File:** `tests/contact.spec.ts`

**Steps:**
  1. Fill Name with 'John Doe'
    - expect: Name field is filled successfully
  2. Fill Email with 'john.doe@example.com'
    - expect: Email field is filled successfully
  3. Fill Message with 'This is a test message.'
    - expect: Message field is filled successfully
  4. Click Send Message button
    - expect: Form is ready to submit

#### 5.4. Contact form submission shows success message

**File:** `tests/contact.spec.ts`

**Steps:**
   1. Fill Name with 'John Doe'
     - expect: Name field is filled successfully
   2. Fill Email with 'john.doe@example.com'
     - expect: Email field is filled successfully
   3. Fill Message with 'This is a test message.'
     - expect: Message field is filled successfully
   4. Click Send Message button
     - expect: Success message "We'll get back to you shortly!" is visible

#### 5.5. Contact form submission with empty fields shows validation

**File:** `tests/contact.spec.ts`

**Steps:**
  1. Clear Name field
    - expect: Name field is cleared
  2. Clear Email field
    - expect: Email field is cleared
  3. Clear Message field
    - expect: Message field is cleared
  4. Click Send Message button
    - expect: Send Message button is clicked

### 6. Footer

**Seed:** `tests/seed.spec.ts`

#### 6.1. Footer contains social media links

**File:** `tests/footer.spec.ts`

**Steps:**
  1. Scroll to footer
    - expect: Facebook link is visible
  2. Verify Twitter link
    - expect: Twitter link is visible
  3. Verify LinkedIn link
    - expect: LinkedIn link is visible
  4. Verify Instagram link
    - expect: Instagram link is visible

#### 6.2. Footer contains legal links

**File:** `tests/footer.spec.ts`

**Steps:**
  1. Verify Privacy Policy link
    - expect: Privacy Policy link is visible
  2. Verify Terms of Service link
    - expect: Terms of Service link is visible

#### 6.3. Footer displays copyright notice

**File:** `tests/footer.spec.ts`

**Steps:**
  1. Verify copyright text
    - expect: Copyright notice is visible

#### 6.4. Privacy Policy and Terms of Service link to home anchor

**File:** `tests/footer.spec.ts`

**Steps:**
  1. Click Privacy Policy link
    - expect: Privacy Policy link is clickable
  2. Verify URL
    - expect: URL is https://velcommsoftware.ddns.net/#home

### 7. Accessibility and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 7.1. Page loads without unexpected console errors

**File:** `tests/accessibility.spec.ts`

**Steps:**
  1. Check console for errors
    - expect: Console errors are within expected limits
  2. Verify known error
    - expect: Known 404 for config.js is present but does not block functionality

#### 7.2. Page has correct title

**File:** `tests/accessibility.spec.ts`

**Steps:**
  1. Verify page title
    - expect: Page title is 'Velcomm'

#### 7.3. Page URL is correct on load

**File:** `tests/accessibility.spec.ts`

**Steps:**
  1. Verify page URL
    - expect: URL is https://velcommsoftware.ddns.net/

#### 7.4. Completed Projects page loads without crashes

**File:** `tests/accessibility.spec.ts`

**Steps:**
  1. Navigate to /completed-projects
    - expect: Page navigates to /completed-projects
  2. Verify page content
    - expect: Projects list is rendered
