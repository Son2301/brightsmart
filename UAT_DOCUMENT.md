# Bright Smart Website - User Acceptance Testing Document

## 1. Introduction

### Purpose
This User Acceptance Testing (UAT) document outlines the testing approach and criteria for validating that the Bright Smart website meets business requirements and is ready for launch. The document provides a structured framework for stakeholders to verify and accept the functionality, usability, and performance of the website.

### Objectives
- Verify that all website features function as specified in the requirements
- Ensure the website meets the needs of the target audience
- Validate usability across different devices and browsers
- Confirm that all call-to-action elements function properly
- Verify the booking system works end-to-end
- Ensure form submissions and email notifications work correctly
- Validate content accuracy and branding compliance

### Participants
- Joyce Bright (Primary Stakeholder)
- Website Administrator(s)
- Test Coordinator
- End Users (optional testers from target audience)

## 2. Testing Environment

### Supported Browsers
- Google Chrome (latest version)
- Mozilla Firefox (latest version)
- Safari (latest version)
- Microsoft Edge (latest version)

### Devices
- Desktop (Windows/Mac)
- Tablet (iPad/Android)
- Mobile (iPhone/Android)

### Testing URL
- UAT Environment: [https://uat.brightsmartwebsite.com](https://uat.brightsmartwebsite.com)

## 3. Test Scenarios and Cases

### 3.1 Home Page

#### Test Scenario: Home Page Content and Navigation
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| HOME-01 | Verify home page loads correctly | 1. Navigate to the home page | Home page loads with all content, images, and styling intact | | |
| HOME-02 | Verify main navigation | 1. Click each main navigation item | Navigation directs to correct pages | | |
| HOME-03 | Verify mobile navigation | 1. View website on mobile device<br>2. Open hamburger menu<br>3. Click each navigation item | Mobile menu opens properly<br>Navigation directs to correct pages | | |
| HOME-04 | Verify hero section CTAs | 1. Click "Let's Talk About Your Event" button<br>2. Return to home<br>3. Click "See How I Can Support You On Stage" | Primary CTA directs to contact/booking page<br>Secondary CTA directs to services page | | |
| HOME-05 | Verify newsletter signup | 1. Enter email in newsletter form<br>2. Click "Get My Monthly Mic Check" | Confirmation message appears<br>Email is received confirming subscription | | |

### 3.2 About Page

#### Test Scenario: About Page Content and Functionality
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| ABOUT-01 | Verify about page content | 1. Navigate to About page | Page loads with all content, images, and sections properly displayed | | |
| ABOUT-02 | Verify "Book a Call with Joyce" CTA | 1. Click the "Book a Call with Joyce" button | Redirects to booking calendar page | | |
| ABOUT-03 | Verify "Download My Speaker Bio & Kit" CTA | 1. Click the "Download My Speaker Bio & Kit" button | Bio document download starts | | |
| ABOUT-04 | Verify "Why I Do This Work" CTA | 1. Click the "Why I Do This Work" link | Navigates to values section or page | | |

### 3.3 Services Pages

#### Test Scenario: MC Services Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| MC-01 | Verify MC Services page content | 1. Navigate to MC Services page | Page loads with all content and images properly displayed | | |
| MC-02 | Verify "Enquire About Hosting Your Event" CTA | 1. Click the CTA button | Redirects to contact form with MC Services pre-selected | | |

#### Test Scenario: Speaking Topics Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| SP-01 | Verify Speaking Topics page content | 1. Navigate to Speaking Topics page | Page loads with all content and images properly displayed | | |
| SP-02 | Verify "Let's Tailor a Talk That Hits Home" CTA | 1. Click the CTA button | Redirects to contact form with Speaking pre-selected | | |

#### Test Scenario: Workshops Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| WS-01 | Verify Workshops page content | 1. Navigate to Workshops page | Page loads with all content and images properly displayed | | |
| WS-02 | Verify "Bring a Workshop to Your Team" CTA | 1. Click the CTA button | Redirects to contact form with Workshops pre-selected | | |
| WS-03 | Verify "Curious How It Works? Start Here" FAQ link | 1. Click the FAQ link | Navigates to FAQ section with workshop information | | |

### 3.4 Portfolio Section

#### Test Scenario: Past Events Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| PORT-01 | Verify Past Events page content | 1. Navigate to Portfolio/Past Events page | Page loads with events properly displayed | | |
| PORT-02 | Verify event filtering | 1. Use category filters if available | Events are filtered correctly by type | | |

#### Test Scenario: Testimonials Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| TEST-01 | Verify Testimonials page content | 1. Navigate to Testimonials page | Page loads with testimonials properly displayed | | |
| TEST-02 | Verify "What Clients Are Saying" section | 1. Scroll through testimonials | Testimonials are readable and properly formatted | | |

#### Test Scenario: Media Kit Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| MEDIA-01 | Verify Media Kit page content | 1. Navigate to Media Kit page | Page loads with all content properly displayed | | |
| MEDIA-02 | Verify "Grab My Full Media Kit" CTA | 1. Click the CTA button | Media kit document download starts | | |

### 3.5 Resources Section

#### Test Scenario: Blog Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| BLOG-01 | Verify Blog listing page | 1. Navigate to Blog page | Blog posts are displayed with titles, dates, and featured images | | |
| BLOG-02 | Verify Blog post page | 1. Click on a blog post<br>2. Verify content loads<br>3. Click "Read the Full Post" if on excerpt view | Full blog post content loads properly | | |
| BLOG-03 | Verify social sharing | 1. Click social sharing buttons on a blog post | Sharing dialog opens with correct content | | |

#### Test Scenario: Free Resources Page
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| RES-01 | Verify Free Resources page content | 1. Navigate to Free Resources page | Resources are displayed properly | | |
| RES-02 | Verify "Grab the Free Event Planning Checklist" CTA | 1. Click the CTA button<br>2. Complete form if required | Checklist document download starts | | |
| RES-03 | Verify newsletter signup | 1. Enter email in "Join My Mic Check Mail" form<br>2. Submit form | Confirmation message appears | | |

### 3.6 Contact & Booking System

#### Test Scenario: Contact Form
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| CONT-01 | Verify Contact page loads | 1. Navigate to Contact page | Page loads with form and all fields displayed | | |
| CONT-02 | Verify form validation | 1. Try to submit form without required fields<br>2. Enter invalid email format | Form shows appropriate validation errors | | |
| CONT-03 | Verify form submission | 1. Fill out all required fields<br>2. Click "Send Your Event Brief" | Confirmation message appears<br>Email confirmation is received | | |

#### Test Scenario: Booking System
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| BOOK-01 | Verify booking calendar loads | 1. Navigate to booking page | Calendar loads showing available dates | | |
| BOOK-02 | Verify service selection | 1. Select different service types | Available dates/times update accordingly | | |
| BOOK-03 | Verify date selection | 1. Click on an available date | Time slots for that date appear | | |
| BOOK-04 | Verify time selection | 1. Select an available time slot | Selection is highlighted | | |
| BOOK-05 | Verify booking confirmation | 1. Complete booking form<br>2. Submit booking | Confirmation page appears<br>Confirmation email is received<br>Calendar invitation is received | | |

### 3.7 Responsive Design

#### Test Scenario: Responsive Layout
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| RESP-01 | Verify desktop layout | 1. View website on desktop (1920x1080) | Layout displays correctly | | |
| RESP-02 | Verify tablet layout | 1. View website on tablet (768px width) | Layout adjusts correctly for tablet | | |
| RESP-03 | Verify mobile layout | 1. View website on mobile (375px width) | Layout adjusts correctly for mobile | | |
| RESP-04 | Verify navigation on mobile | 1. View website on mobile<br>2. Open and use hamburger menu | Menu opens and functions correctly | | |

### 3.8 Call-to-Action Testing

#### Test Scenario: CTA Functionality
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| CTA-01 | Verify Home page CTAs | 1. Test all CTAs on Home page | All CTAs link to correct destinations | | |
| CTA-02 | Verify About page CTAs | 1. Test all CTAs on About page | All CTAs link to correct destinations | | |
| CTA-03 | Verify Services CTAs | 1. Test all CTAs on Services pages | All CTAs link to correct destinations | | |
| CTA-04 | Verify Portfolio CTAs | 1. Test all CTAs on Portfolio pages | All CTAs link to correct destinations | | |
| CTA-05 | Verify Resources CTAs | 1. Test all CTAs on Resources pages | All CTAs link to correct destinations | | |
| CTA-06 | Verify Contact CTAs | 1. Test all CTAs on Contact page | All CTAs link to correct destinations | | |

### 3.9 Email Automation

#### Test Scenario: Email Notifications
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| EMAIL-01 | Verify contact form email | 1. Submit contact form<br>2. Check email inbox | Confirmation email is received<br>Joyce receives notification | | |
| EMAIL-02 | Verify booking confirmation email | 1. Complete booking<br>2. Check email inbox | Booking confirmation email is received<br>Calendar invitation is received<br>Joyce receives notification | | |
| EMAIL-03 | Verify newsletter signup email | 1. Sign up for newsletter<br>2. Check email inbox | Welcome email is received | | |
| EMAIL-04 | Verify resource download email | 1. Download a resource<br>2. Check email inbox | Email with resource link is received | | |

### 3.10 Performance Testing

#### Test Scenario: Page Load Performance
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| PERF-01 | Verify Home page load time | 1. Open Home page in Chrome<br>2. Use Chrome DevTools to check load time | Page loads in under 3 seconds | | |
| PERF-02 | Verify image optimization | 1. Check images on multiple pages<br>2. Use Chrome DevTools to inspect image sizes | Images load quickly and are properly sized | | |
| PERF-03 | Verify mobile performance | 1. Load website on mobile device<br>2. Navigate through key pages | Pages load promptly on mobile | | |

## 4. Accessibility Testing

### Test Scenario: Accessibility Features
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| ACC-01 | Verify keyboard navigation | 1. Navigate the site using only keyboard | All interactive elements are accessible | | |
| ACC-02 | Verify screen reader compatibility | 1. Use screen reader to navigate site | Content is properly announced | | |
| ACC-03 | Verify text contrast | 1. Check text contrast on various pages | Text has sufficient contrast with backgrounds | | |
| ACC-04 | Verify form accessibility | 1. Navigate forms using keyboard<br>2. Check for proper labels | Forms are accessible and properly labeled | | |

## 5. Security Testing

### Test Scenario: Form Security
| Test ID | Test Case | Steps | Expected Result | Pass/Fail | Comments |
|---------|-----------|-------|-----------------|-----------|----------|
| SEC-01 | Verify form handling | 1. Submit forms with special characters | Form processes without error | | |
| SEC-02 | Verify rate limiting | 1. Submit multiple forms rapidly | Rate limiting activates after threshold | | |

## 6. UAT Sign-off

### Acceptance Criteria
The website will be considered ready for production when:
1. All critical test cases (marked as such) have passed
2. No high-severity issues remain unresolved
3. All CTAs function correctly
4. Booking system works end-to-end
5. Email notifications work correctly
6. Website is responsive on all tested devices
7. Content has been reviewed and approved

### Sign-off
By signing below, I confirm that I have reviewed the test results and the website meets the requirements for launch.

| Name | Role | Signature | Date |
|------|------|-----------|------|
| | | | |
| | | | |
| | | | |

## 7. Appendices

### Test Execution Schedule
- UAT Start Date: [Date]
- UAT End Date: [Date]
- Testing Hours: [Hours]
- Results Review Meeting: [Date]

### Issue Reporting Process
1. Document issue with screenshot and steps to reproduce
2. Assign severity (Critical, High, Medium, Low)
3. Log issue in [project management tool]
4. Retest after developer reports fix

### Severity Definitions
- **Critical**: Prevents core functionality from working; must be fixed before launch
- **High**: Significantly impacts user experience; should be fixed before launch
- **Medium**: Causes some inconvenience but workarounds exist; can be fixed post-launch
- **Low**: Minor issue with minimal impact; can be scheduled for future release 