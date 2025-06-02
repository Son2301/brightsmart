# Bright Smart Website - Detailed Documentation

## 1. Introduction

### Project Overview
The Bright Smart Website is a professional web platform designed to showcase Joyce Bright's services as an MC, speaker, and workshop facilitator. The website aims to establish a strong online presence while providing easy access to information about her services, past events, and resources.

[SCREENSHOT: Homepage hero section showing Joyce Bright]

### Target Audience
- Event organizers and planners
- Corporate clients seeking professional MCs
- Organizations looking for engaging speakers
- Teams interested in professional development workshops
- Media representatives seeking information

### Project Goals and Objectives
- Create a professional, user-friendly website that represents Joyce's brand
- Streamline the booking process for potential clients
- Showcase past events and testimonials to build credibility
- Provide valuable resources through the blog and free materials
- Automate communication processes for improved efficiency
- Optimize for search engines to increase visibility

### Key Stakeholders
- Joyce Bright (Client)
- Website development team
- Content creators
- End users (potential clients)

## 2. Getting Started

### System Requirements
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

### Installation Guide
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd bright-smart-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

[SCREENSHOT: Terminal showing successful installation]

### Environment Setup
Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EMAIL_SERVICE=your-email-service
EMAIL_USERNAME=your-email-username
EMAIL_PASSWORD=your-email-password
CALENDAR_API_KEY=your-calendar-api-key
```

### Running Development Server
Start the development server with:

```bash
npm run dev
```

Access the website at [http://localhost:3000](http://localhost:3000)

[SCREENSHOT: Browser showing the website in development mode]

### Project Structure Overview
```
app/
├── components/      # Reusable UI components
├── api/             # API routes
├── styles/          # Global styles
├── utils/           # Utility functions
├── lib/             # Library code and helpers
├── layouts/         # Page layout components
├── public/          # Static assets
├── about/           # About page
├── services/        # Services pages
├── portfolio/       # Portfolio pages
├── resources/       # Resources and blog
└── contact/         # Contact pages
```

## 3. Architecture and Design

### Technology Stack
- **Framework**: Next.js (React framework)
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Booking System**: React Calendar
- **Email Automation**: Nodemailer
- **State Management**: React Context API
- **Deployment**: Vercel

[SCREENSHOT: Architecture diagram showing the relationship between technologies]

### Component Structure
The application follows a component-based architecture with:
- Layout components (headers, footers, navigation)
- Page-specific components
- Reusable UI components (buttons, forms, cards)
- Service-specific components

[SCREENSHOT: Component hierarchy diagram]

### Data Flow
1. User interactions trigger state changes or API calls
2. Data is fetched from API endpoints or local state
3. Components re-render to reflect updated data
4. Form submissions are processed through API routes
5. Confirmation emails and notifications are sent via Nodemailer

### Responsive Design Implementation
The website is built with a mobile-first approach using Tailwind CSS breakpoints:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

[SCREENSHOT: Website on different devices showing responsive design]

### Branding Guidelines
- **Primary Colors**: [colors details]
- **Typography**: [font details]
- **Logo Usage**: [logo guidelines]
- **Voice and Tone**: Professional, warm, and authoritative

## 4. Features Documentation

### 4.1 Core Website Features

#### Navigation System
The website uses a responsive navigation system with:
- Desktop navigation menu
- Mobile hamburger menu
- Dropdown for Services submenu
- Breadcrumb navigation on inner pages

[SCREENSHOT: Navigation menu in desktop and mobile views]

#### Content Management
Content is structured according to the following hierarchy:
- Home page with sections for services overview, testimonials, and call-to-action
- About page with biography, values, and credentials
- Service pages with detailed descriptions
- Portfolio showcasing past events
- Resources section with blog and downloadable materials

[SCREENSHOT: Content management structure]

#### Responsive Layout
The layout adapts to different screen sizes using Tailwind CSS:
- Flexible grid systems
- Responsive typography
- Conditional rendering of elements based on screen size
- Touch-friendly controls for mobile devices

#### SEO Implementation
- Semantic HTML structure
- Meta tags for pages
- Optimized headings and content
- Structured data for events and services
- Sitemap.xml and robots.txt

[SCREENSHOT: Example of SEO elements in the code]

### 4.2 Booking System

#### Calendar Integration
The booking system integrates with Joyce's calendar to:
- Display available time slots
- Prevent double bookings
- Synchronize with external calendars

[SCREENSHOT: Calendar interface showing available slots]

#### Scheduling Logic
1. User selects a service type
2. Available dates are displayed based on Joyce's calendar
3. User selects date and time
4. System confirms availability in real-time
5. Booking is confirmed and added to calendar

#### Confirmation Process
After a booking is made:
1. User receives an immediate confirmation page
2. Confirmation email is sent with details
3. Calendar invitation is generated
4. Joyce receives notification of the new booking

[SCREENSHOT: Booking confirmation page]

#### Email Notifications
Automated emails are sent for:
- Booking confirmations
- Reminders (24 hours before event)
- Follow-up after the event
- Cancellations or rescheduling

### 4.3 Form Submission

#### Contact Form Implementation
The website includes forms for:
- General inquiries
- Booking requests
- Newsletter signup
- Resource downloads

[SCREENSHOT: Contact form with fields]

#### Data Validation
Forms implement:
- Required field validation
- Email format validation
- Phone number format validation
- Character limits where appropriate

#### Submission Handling
When a form is submitted:
1. Client-side validation occurs
2. Data is sent to the API route
3. Server-side validation is performed
4. Data is processed (stored or forwarded)
5. Confirmation is returned to the user

[SCREENSHOT: Form submission flow diagram]

#### Confirmation Emails
Customized confirmation emails are sent based on form type:
- Inquiry acknowledgments
- Resource download links
- Newsletter welcome emails

### 4.4 Email Automation

#### Setup and Configuration
Email automation uses Nodemailer with:
- SMTP configuration
- HTML email templates
- Attachments capability
- Error handling and retry logic

[SCREENSHOT: Email configuration code]

#### Email Templates
The system includes templates for:
- Welcome emails
- Booking confirmations
- Event reminders
- Follow-up messages
- Newsletter distributions

[SCREENSHOT: Email template example]

#### Trigger Points
Emails are automatically triggered by:
- Form submissions
- Calendar events
- Scheduled intervals (newsletters)
- Admin actions

#### Follow-up System
The follow-up system:
- Schedules follow-up emails based on event dates
- Sends customized messages based on service type
- Includes feedback requests
- Offers relevant resources or next steps

### 4.5 Social Media Integration

#### LinkedIn Connection
- LinkedIn profile widget on About page
- Share buttons for services and blog posts
- LinkedIn activity feed option

[SCREENSHOT: LinkedIn integration on the website]

#### Social Media Sharing
Each page includes:
- Social sharing buttons
- Pre-formatted share text
- Open Graph tags for rich previews
- Twitter card metadata

#### Social Feed Display
- Optional display of latest social media posts
- Filtered to show professional content
- Automatic updates

[SCREENSHOT: Social feed display on the website]

## 5. API Reference

### Internal APIs
The following API routes are available:

#### `/api/contact`
Handles contact form submissions.
- Method: POST
- Parameters: name, email, phone, message
- Returns: { success: boolean, message: string }

#### `/api/booking`
Manages booking requests.
- Method: POST
- Parameters: name, email, phone, service, date, time
- Returns: { success: boolean, bookingId: string, message: string }

[SCREENSHOT: API response example]

### External API Integrations
The website integrates with:
- Calendar API for booking system
- Email service API
- Social media APIs

### Authentication Methods
APIs are protected using:
- API keys for external services
- CSRF tokens for form submissions
- Rate limiting to prevent abuse

### Rate Limits and Considerations
- Contact submissions: 5 per hour per IP
- Booking requests: 3 per hour per IP
- Failed attempts handling

## 6. Components Library

### Reusable UI Components
The website uses the following reusable components:

#### Button Component
```jsx
<Button 
  variant="primary|secondary|outline" 
  size="small|medium|large"
  onClick={handleClick}
>
  Button Text
</Button>
```

[SCREENSHOT: Button component variants]

### Form Components
- Input fields with validation
- Custom select dropdowns
- Date and time pickers
- Form wrappers with error handling

[SCREENSHOT: Form components in use]

### Navigation Components
- MainNav component
- MobileMenu component
- Dropdown component
- Breadcrumbs component

### Media Components
- ImageWithFallback component
- VideoPlayer component
- Gallery component
- MediaCard component

[SCREENSHOT: Media components examples]

### Calendar and Booking Components
- CalendarView component
- TimeSlotPicker component
- BookingForm component
- ConfirmationDisplay component

## 7. Styling Guide

### Tailwind CSS Configuration
The tailwind.config.js file extends the default configuration with:
- Custom colors
- Custom font families
- Extended spacing scales
- Custom animations

[SCREENSHOT: Tailwind configuration file]

### Theme Customization
The theme can be customized by:
- Modifying the tailwind.config.js file
- Using CSS variables for dynamic theming
- Applying consistent classes through components

### Color Palette
```
Primary: #[color-code]
Secondary: #[color-code]
Accent: #[color-code]
Text: #[color-code]
Background: #[color-code]
```

[SCREENSHOT: Color palette visualization]

### Typography
- Headings: [font family], weights: 600, 700
- Body: [font family], weights: 400, 500
- Special text: [font family], weight: 500
- Font sizes responsive based on screen size

### Responsive Breakpoints
```
sm: 640px   (Small devices)
md: 768px   (Medium devices)
lg: 1024px  (Large devices)
xl: 1280px  (Extra large devices)
2xl: 1536px (2X-Large devices)
```

[SCREENSHOT: Website at different breakpoints]

## 8. Call-to-Action Copywriting Standards

### Brand Voice Guidelines
All CTAs should be:
- Warm and approachable
- Premium in feel
- Purpose-driven
- Clear and specific
- Second-person ("you", "your", "let's")

[SCREENSHOT: Brand voice examples in CTAs]

### CTA Phrasing Guidelines by Page Type

#### Home Page CTAs
- Hero button: "Let's Talk About Your Event"
- Secondary button: "See How I Can Support You On Stage"
- Newsletter: "Get My Monthly Mic Check — Tips, Tools + Stories from the Stage"
- Blog teaser: "Explore Practical Tips for Event Planners"
- Testimonials: "Hear What Event Organisers Say"

#### About Page CTAs
- Booking CTA: "Book a Call with Joyce Let's explore if we're the right fit."
- Lead magnet: "Download My Speaker Bio & Kit"
- Values CTA: "Why I Do This Work (And Why It Matters)"

[SCREENSHOT: About page CTAs implementation]

#### Services Pages CTAs
- MC Services: "Enquire About Hosting Your Event Confident, warm, on-brand MCing."
- Speaking Topics: "Let's Tailor a Talk That Hits Home"
- Workshops: "Bring a Workshop to Your Team Inspire, engage, and make it stick."
- FAQs: "Curious How It Works? Start Here."

#### Portfolio/Testimonials CTAs
- Media Kit: "Grab My Full Media Kit Bios, photos, intros — all in one place."
- Case Studies: "See How I Helped These Events Succeed"
- Testimonials: "What Clients Are Saying"

[SCREENSHOT: Portfolio page CTAs implementation]

#### Resources & Blog CTAs
- Freebie: "Grab the Free Event Planning Checklist Made for time-poor organisers."
- Blog: "Read the Full Post Real talk from behind the podium."
- Resource CTA: "Ready to Level Up Your Event? Let's Talk."
- Newsletter: "Join My Mic Check Mail — No Fluff, Just Insights"

#### Contact Page CTAs
- Booking Form: "Send Your Event Brief I'll get back to you within 2 business days."
- General Inquiries: "Have Questions? Let's Connect."
- FAQ: "I've Heard It All — Check the FAQs"

[SCREENSHOT: Contact page CTAs implementation]

## 9. Content Management

### Content Structure
Content is organized in a hierarchical structure:
- Pages (main navigation items)
- Sections (divisions within pages)
- Components (reusable content blocks)
- Elements (individual content items)

[SCREENSHOT: Content structure diagram]

### Adding Blog Posts
To add a new blog post:
1. Create a new markdown file in `/app/resources/blog/[slug]`
2. Add frontmatter with title, date, author, featured image
3. Write content using markdown
4. Add to blog index in `/app/resources/blog/page.jsx`

[SCREENSHOT: Blog post creation process]

### Updating Portfolio Items
To update portfolio items:
1. Navigate to `/app/portfolio/data.js`
2. Add new event with details, images, and testimonials
3. Save to update the portfolio page

### Managing Testimonials
Testimonials are stored in `/app/components/testimonials/data.js` and can be:
- Added with client name, position, and quote
- Categorized by service type
- Featured on relevant pages

[SCREENSHOT: Testimonials management interface]

### Updating Services Information
Service details can be updated in:
- `/app/services/mc/page.jsx`
- `/app/services/speaking/page.jsx`
- `/app/services/workshops/page.jsx`

## 10. Testing

### Testing Strategy
The testing strategy includes:
- Unit tests for components and utilities
- Integration tests for API routes
- End-to-end tests for user flows
- Accessibility tests

[SCREENSHOT: Testing workflow diagram]

### Unit Testing
Unit tests focus on:
- Component rendering
- State management
- Utility functions
- Form validation

### Integration Testing
Integration tests verify:
- API route functionality
- Form submission flow
- Email sending
- Calendar integration

[SCREENSHOT: Example integration test]

### Performance Testing
Performance metrics monitored:
- Page load time
- Time to Interactive
- First Contentful Paint
- Largest Contentful Paint
- Cumulative Layout Shift

### Accessibility Testing
Accessibility testing ensures:
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Sufficient color contrast
- Alternative text for images

[SCREENSHOT: Accessibility testing results]

## 11. Deployment

### Build Process
The build process includes:
1. Code linting and testing
2. Asset optimization
3. CSS and JS minification
4. Static HTML generation for applicable pages
5. Deployment to hosting platform

[SCREENSHOT: Build output]

### Deployment Environments
Three environments are available:
- Development (local)
- Staging (preview builds)
- Production (live website)

### Deployment Procedures
To deploy to production:
1. Merge code to main branch
2. Automatic build and deployment via Vercel
3. Run post-deployment tests
4. Verify site functionality

[SCREENSHOT: Deployment pipeline]

### Monitoring and Alerts
The site is monitored for:
- Uptime and availability
- Performance metrics
- Error rates
- Form submission issues

## 12. Performance Optimization

### Image Optimization
Images are optimized using:
- Next.js Image component
- WebP format with fallbacks
- Responsive sizing
- Lazy loading

[SCREENSHOT: Image optimization comparison]

### Code Splitting
Code splitting is implemented through:
- Next.js automatic code splitting
- Dynamic imports for large components
- Route-based chunking

### Lazy Loading
Lazy loading is applied to:
- Below-the-fold images
- Non-critical components
- Third-party scripts
- Off-screen content

[SCREENSHOT: Network tab showing lazy loaded resources]

### Caching Strategies
Caching implemented includes:
- Browser caching with appropriate headers
- Static generation for applicable pages
- API response caching where appropriate
- Service worker for offline capability

### Core Web Vitals Optimization
Optimizations for Core Web Vitals:
- Minimizing CLS with proper image dimensions
- Improving LCP with prioritized loading
- Enhancing FID with code splitting and optimization

[SCREENSHOT: Core Web Vitals report]

## 13. Security Considerations

### Data Protection
Data protection measures include:
- Secure handling of user data
- No unnecessary data collection
- Compliance with privacy regulations
- Secure storage practices

### Form Security
Forms are protected with:
- CSRF tokens
- Input sanitization
- Rate limiting
- Honeypot fields to catch spam

[SCREENSHOT: Form security implementation]

### API Security
API routes are secured using:
- Authentication where needed
- Rate limiting
- Input validation
- Error handling that doesn't expose sensitive information

### Authentication and Authorization
- Admin access protected with secure authentication
- Role-based access for content management
- Secure session handling

## 14. Maintenance Guide

### Regular Updates
Scheduled maintenance includes:
- Dependency updates (monthly)
- Content reviews (weekly)
- Performance checks (monthly)
- Security audits (quarterly)

[SCREENSHOT: Maintenance schedule]

### Backup Procedures
Backup strategy consists of:
- Database backups (daily)
- Code repository backups
- Content snapshots
- Recovery testing

### Troubleshooting Common Issues
Documentation for common issues:
- Form submission failures
- Booking system errors
- Email delivery problems
- Performance degradation

[SCREENSHOT: Troubleshooting flowchart]

### Performance Monitoring
Performance is monitored using:
- Google Analytics
- Core Web Vitals reporting
- Server response time tracking
- Error logging

## 15. Future Enhancements

### Planned Features
Features planned for future releases:
- Enhanced booking system with payment integration
- Video testimonial showcase
- Client portal for event planning
- Expanded resource library

[SCREENSHOT: Feature roadmap visualization]

### Roadmap
Timeline for upcoming enhancements:
- Q1: [features]
- Q2: [features]
- Q3: [features]
- Q4: [features]

### Potential Integrations
Future integrations being considered:
- CRM system
- Marketing automation tools
- Event management software
- Enhanced analytics

## 16. Appendices

### Glossary of Terms
- **MC**: Master of Ceremonies
- **CTA**: Call to Action
- **Conversion**: When a visitor takes a desired action
- [Additional terms]

### Frequently Asked Questions
Organized by category:
- Services FAQs
- Booking FAQs
- Technical FAQs
- Content FAQs

[SCREENSHOT: FAQ section on website]

### External Resources
Useful external documentation:
- Next.js documentation
- Tailwind CSS documentation
- React Calendar documentation
- Nodemailer documentation

### Change Log
- [Date]: Initial website launch
- [Date]: Added booking system
- [Date]: Enhanced portfolio section
- [Date]: [Additional changes]

### Contact Information for Support
- Technical support: [email]
- Content updates: [email]
- General inquiries: [email] 

## 17. WordPress Conversion Guide

### Overview
This guide provides technical instructions for converting the Next.js/React codebase to WordPress-compatible PHP, templates, and functionality. The conversion maintains the existing design, features, and user experience while leveraging WordPress's content management capabilities.

### Code Architecture Conversion

#### Component-to-Template Conversion Strategy
Convert React components to WordPress PHP templates using this mapping:

**Next.js Structure → WordPress Structure**
```
app/components/        → wp-content/themes/brightsmart/template-parts/
app/about/page.jsx     → wp-content/themes/brightsmart/page-about.php
app/services/          → wp-content/themes/brightsmart/archive-services.php
app/portfolio/         → wp-content/themes/brightsmart/archive-portfolio.php
app/resources/         → wp-content/themes/brightsmart/archive-resources.php
app/contact/           → wp-content/themes/brightsmart/page-contact.php
```

#### Converting React Components to PHP Templates

**Example: Hero Component Conversion**

Next.js Component:
```jsx
// components/Hero.jsx
export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <section className="hero-section bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <a href={ctaLink} className="btn btn-secondary">
          {ctaText}
        </a>
      </div>
    </section>
  );
}
```

WordPress Template Part:
```php
<?php
// template-parts/hero.php
$title = get_field('hero_title') ?: get_the_title();
$subtitle = get_field('hero_subtitle');
$cta_text = get_field('cta_text') ?: 'Let\'s Talk About Your Event';
$cta_link = get_field('cta_link') ?: '/contact';
?>

<section class="hero-section bg-primary text-white py-20">
    <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold mb-6"><?php echo esc_html($title); ?></h1>
        <?php if ($subtitle): ?>
            <p class="text-xl mb-8"><?php echo esc_html($subtitle); ?></p>
        <?php endif; ?>
        <a href="<?php echo esc_url($cta_link); ?>" class="btn btn-secondary">
            <?php echo esc_html($cta_text); ?>
        </a>
    </div>
</section>
```

### CSS Framework Conversion

#### Tailwind CSS to WordPress CSS
Convert Tailwind utility classes to custom CSS or use a WordPress-compatible approach:

**Option 1: Convert to Custom CSS**
```css
/* style.css */
.hero-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.text-5xl {
    font-size: 3rem;
    line-height: 1;
}

.font-bold {
    font-weight: 700;
}

.mb-6 {
    margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
    .text-5xl {
        font-size: 2rem;
    }
}
```

**Option 2: Use Tailwind with WordPress**
```php
// functions.php
function brightsmart_enqueue_tailwind() {
    wp_enqueue_style('tailwind-css', 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');
    // Or enqueue your compiled Tailwind CSS file
    wp_enqueue_style('brightsmart-tailwind', get_template_directory_uri() . '/assets/css/tailwind.css');
}
add_action('wp_enqueue_scripts', 'brightsmart_enqueue_tailwind');
```

### API Routes Conversion

#### Converting Next.js API Routes to WordPress Functions

**Next.js Contact API:**
```javascript
// app/api/contact/route.js
export async function POST(request) {
    const { name, email, phone, message } = await request.json();
    
    // Validate data
    if (!name || !email || !message) {
        return Response.json({ success: false, message: 'Missing required fields' });
    }
    
    // Send email
    await sendEmail({ name, email, phone, message });
    
    return Response.json({ success: true, message: 'Message sent successfully' });
}
```

**WordPress Equivalent:**
```php
// functions.php
function handle_contact_form_submission() {
    // Verify nonce for security
    if (!wp_verify_nonce($_POST['contact_nonce'], 'contact_form_action')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        wp_redirect(add_query_arg('status', 'error', wp_get_referer()));
        exit;
    }
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    if (wp_mail($to, $subject, $body, $headers)) {
        wp_redirect(add_query_arg('status', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('status', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_contact_form', 'handle_contact_form_submission');
add_action('admin_post_nopriv_contact_form', 'handle_contact_form_submission');
```

### Form Components Conversion

#### React Form to WordPress Form

**Next.js Form Component:**
```jsx
// components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', message: ''
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        // Handle response
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
            />
            {/* Other fields */}
            <button type="submit">Send Your Event Brief</button>
        </form>
    );
}
```

**WordPress Form:**
```php
<?php
// template-parts/contact-form.php
?>
<form method="post" action="<?php echo esc_url(admin_url('admin-post.php')); ?>" class="contact-form">
    <?php wp_nonce_field('contact_form_action', 'contact_nonce'); ?>
    <input type="hidden" name="action" value="contact_form">
    
    <div class="form-group">
        <label for="name">Name *</label>
        <input type="text" id="name" name="name" required 
               value="<?php echo esc_attr($_POST['name'] ?? ''); ?>">
    </div>
    
    <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required
               value="<?php echo esc_attr($_POST['email'] ?? ''); ?>">
    </div>
    
    <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone"
               value="<?php echo esc_attr($_POST['phone'] ?? ''); ?>">
    </div>
    
    <div class="form-group">
        <label for="message">Message *</label>
        <textarea id="message" name="message" required><?php echo esc_textarea($_POST['message'] ?? ''); ?></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary">Send Your Event Brief</button>
</form>

<?php
// Display status messages
if (isset($_GET['status'])) {
    if ($_GET['status'] === 'success') {
        echo '<div class="alert alert-success">I\'ll get back to you within 2 business days.</div>';
    } else {
        echo '<div class="alert alert-error">Something went wrong. Have Questions? Let\'s Connect.</div>';
    }
}
?>
```

### Booking System Conversion

#### Custom Booking System Implementation

**WordPress Booking Custom Post Type:**
```php
// functions.php
function create_booking_post_type() {
    register_post_type('booking', array(
        'labels' => array(
            'name' => 'Bookings',
            'singular_name' => 'Booking'
        ),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'custom-fields'),
        'capability_type' => 'post',
        'capabilities' => array(
            'create_posts' => 'do_not_allow'
        ),
        'map_meta_cap' => true
    ));
}
add_action('init', 'create_booking_post_type');

// Booking form handler
function handle_booking_submission() {
    if (!wp_verify_nonce($_POST['booking_nonce'], 'booking_form_action')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $service = sanitize_text_field($_POST['service']);
    $date = sanitize_text_field($_POST['date']);
    $time = sanitize_text_field($_POST['time']);
    
    // Create booking post
    $booking_id = wp_insert_post(array(
        'post_type' => 'booking',
        'post_title' => $name . ' - ' . $service . ' - ' . $date,
        'post_status' => 'publish',
        'meta_input' => array(
            'client_name' => $name,
            'client_email' => $email,
            'service_type' => $service,
            'booking_date' => $date,
            'booking_time' => $time,
            'booking_status' => 'pending'
        )
    ));
    
    if ($booking_id) {
        // Send confirmation email
        send_booking_confirmation($booking_id);
        wp_redirect(add_query_arg('booking', 'success', wp_get_referer()));
    } else {
        wp_redirect(add_query_arg('booking', 'error', wp_get_referer()));
    }
    exit;
}
add_action('admin_post_booking_form', 'handle_booking_submission');
add_action('admin_post_nopriv_booking_form', 'handle_booking_submission');
```

### Email Automation Conversion

#### WordPress Email System

**Email Functions:**
```php
// functions.php
function send_booking_confirmation($booking_id) {
    $booking = get_post($booking_id);
    $client_email = get_post_meta($booking_id, 'client_email', true);
    $client_name = get_post_meta($booking_id, 'client_name', true);
    $service = get_post_meta($booking_id, 'service_type', true);
    $date = get_post_meta($booking_id, 'booking_date', true);
    $time = get_post_meta($booking_id, 'booking_time', true);
    
    $subject = 'Booking Confirmation - ' . $service;
    $message = "
    <h2>Booking Confirmed</h2>
    <p>Hi {$client_name},</p>
    <p>Your booking has been confirmed:</p>
    <ul>
        <li>Service: {$service}</li>
        <li>Date: {$date}</li>
        <li>Time: {$time}</li>
    </ul>
    <p>I'll get back to you within 2 business days with further details.</p>
    <p>Best regards,<br>Joyce Bright</p>
    ";
    
    $headers = array('Content-Type: text/html; charset=UTF-8');
    
    wp_mail($client_email, $subject, $message, $headers);
    
    // Send notification to admin
    $admin_message = "New booking received:\n\nClient: {$client_name}\nEmail: {$client_email}\nService: {$service}\nDate: {$date}\nTime: {$time}";
    wp_mail(get_option('admin_email'), 'New Booking: ' . $service, $admin_message);
}

// Schedule reminder emails
function schedule_booking_reminders() {
    $bookings = get_posts(array(
        'post_type' => 'booking',
        'meta_query' => array(
            array(
                'key' => 'booking_date',
                'value' => date('Y-m-d', strtotime('+1 day')),
                'compare' => '='
            ),
            array(
                'key' => 'reminder_sent',
                'compare' => 'NOT EXISTS'
            )
        )
    ));
    
    foreach ($bookings as $booking) {
        send_booking_reminder($booking->ID);
        update_post_meta($booking->ID, 'reminder_sent', true);
    }
}

// Hook to run daily
add_action('wp', function() {
    if (!wp_next_scheduled('daily_booking_reminders')) {
        wp_schedule_event(time(), 'daily', 'daily_booking_reminders');
    }
});
add_action('daily_booking_reminders', 'schedule_booking_reminders');
```

### Navigation System Conversion

#### WordPress Menu System

**Theme Functions:**
```php
// functions.php
function brightsmart_register_menus() {
    register_nav_menus(array(
        'primary' => 'Primary Menu',
        'services' => 'Services Menu',
        'footer' => 'Footer Menu'
    ));
}
add_action('after_setup_theme', 'brightsmart_register_menus');

// Custom walker for dropdown menus
class Brightsmart_Walker_Nav_Menu extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $output .= "\n$indent<ul class=\"dropdown-menu\">\n";
    }
    
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $classes[] = 'menu-item-' . $item->ID;
        
        $class_names = join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';
        
        $output .= '<li' . $class_names .'>';
        
        $link_content = $item->title;
        if ($depth === 0 && in_array('menu-item-has-children', $classes)) {
            $link_content .= ' <span class="dropdown-arrow">▼</span>';
        }
        
        $output .= '<a href="' . esc_url($item->url) . '">' . $link_content . '</a>';
    }
}
```

### Custom Post Types for Content

#### Services, Portfolio, and Testimonials

**Custom Post Types Setup:**
```php
// functions.php
function create_custom_post_types() {
    // Services
    register_post_type('service', array(
        'labels' => array(
            'name' => 'Services',
            'singular_name' => 'Service'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'services')
    ));
    
    // Portfolio
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => 'Portfolio',
            'singular_name' => 'Portfolio Item'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'has_archive' => true,
        'rewrite' => array('slug' => 'portfolio')
    ));
    
    // Testimonials
    register_post_type('testimonial', array(
        'labels' => array(
            'name' => 'Testimonials',
            'singular_name' => 'Testimonial'
        ),
        'public' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
        'has_archive' => false
    ));
}
add_action('init', 'create_custom_post_types');

// Add custom fields for testimonials
function add_testimonial_meta_boxes() {
    add_meta_box(
        'testimonial_details',
        'Testimonial Details',
        'testimonial_details_callback',
        'testimonial'
    );
}
add_action('add_meta_boxes', 'add_testimonial_meta_boxes');

function testimonial_details_callback($post) {
    wp_nonce_field('testimonial_details_nonce', 'testimonial_details_nonce');
    
    $client_name = get_post_meta($post->ID, 'client_name', true);
    $client_position = get_post_meta($post->ID, 'client_position', true);
    $client_company = get_post_meta($post->ID, 'client_company', true);
    $rating = get_post_meta($post->ID, 'rating', true);
    
    echo '<p><label>Client Name: <input type="text" name="client_name" value="' . esc_attr($client_name) . '" /></label></p>';
    echo '<p><label>Position: <input type="text" name="client_position" value="' . esc_attr($client_position) . '" /></label></p>';
    echo '<p><label>Company: <input type="text" name="client_company" value="' . esc_attr($client_company) . '" /></label></p>';
    echo '<p><label>Rating: <select name="rating">';
    for ($i = 1; $i <= 5; $i++) {
        echo '<option value="' . $i . '"' . selected($rating, $i, false) . '>' . $i . ' Stars</option>';
    }
    echo '</select></label></p>';
}
```

### Template Hierarchy Implementation

#### Main Template Files

**page-services.php:**
```php
<?php get_header(); ?>

<main class="services-page">
    <?php get_template_part('template-parts/hero'); ?>
    
    <section class="services-grid py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">See How I Can Support You On Stage</h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <?php
                $services = get_posts(array(
                    'post_type' => 'service',
                    'posts_per_page' => -1,
                    'orderby' => 'menu_order',
                    'order' => 'ASC'
                ));
                
                foreach ($services as $service): ?>
                    <div class="service-card bg-white shadow-lg rounded-lg p-6">
                        <?php if (has_post_thumbnail($service->ID)): ?>
                            <div class="service-image mb-4">
                                <?php echo get_the_post_thumbnail($service->ID, 'medium', array('class' => 'w-full h-48 object-cover rounded')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h3 class="text-xl font-semibold mb-3"><?php echo get_the_title($service); ?></h3>
                        <div class="service-excerpt mb-4">
                            <?php echo wp_trim_words(get_the_content(null, false, $service), 20); ?>
                        </div>
                        
                        <?php
                        $cta_text = get_field('cta_text', $service->ID);
                        $service_type = strtolower(get_the_title($service));
                        
                        if (strpos($service_type, 'mc') !== false) {
                            $cta_text = $cta_text ?: 'Enquire About Hosting Your Event';
                        } elseif (strpos($service_type, 'speaking') !== false) {
                            $cta_text = $cta_text ?: 'Let\'s Tailor a Talk That Hits Home';
                        } elseif (strpos($service_type, 'workshop') !== false) {
                            $cta_text = $cta_text ?: 'Bring a Workshop to Your Team';
                        }
                        ?>
                        
                        <a href="<?php echo get_permalink($service); ?>" class="btn btn-primary">
                            <?php echo esc_html($cta_text); ?>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
    
    <?php get_template_part('template-parts/testimonials'); ?>
    <?php get_template_part('template-parts/cta-section'); ?>
</main>

<?php get_footer(); ?>
```

### JavaScript Functionality Conversion

#### Interactive Elements

**WordPress JavaScript Implementation:**
```php
// functions.php
function brightsmart_enqueue_scripts() {
    wp_enqueue_script('brightsmart-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true);
    
    // Localize script for AJAX
    wp_localize_script('brightsmart-main', 'brightsmart_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('brightsmart_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'brightsmart_enqueue_scripts');
```

**main.js:**
```javascript
// Mobile menu toggle
jQuery(document).ready(function($) {
    $('.mobile-menu-toggle').on('click', function() {
        $('.mobile-menu').toggleClass('active');
    });
    
    // Form validation
    $('.contact-form').on('submit', function(e) {
        var isValid = true;
        
        $(this).find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });
        
        if (!isValid) {
            e.preventDefault();
            alert('Have Questions? Let\'s Connect. Please fill in all required fields.');
        }
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
});
```

### Performance Optimization

#### WordPress Optimization Functions

```php
// functions.php
// Remove unnecessary WordPress features
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Optimize images
add_theme_support('post-thumbnails');
set_post_thumbnail_size(300, 200, true);
add_image_size('hero-image', 1200, 600, true);
add_image_size('portfolio-thumb', 400, 300, true);

// Defer non-critical JavaScript
function defer_non_critical_js($tag, $handle, $src) {
    $defer_scripts = array('brightsmart-main');
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace('<script ', '<script defer ', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'defer_non_critical_js', 10, 3);

// Optimize database queries
function optimize_queries() {
    if (!is_admin()) {
        remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
        remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
    }
}
add_action('init', 'optimize_queries');
```

### WordPress Theme Structure

#### Complete Theme Setup

**functions.php:**
```php
<?php
// Theme setup
function brightsmart_theme_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'brightsmart_theme_setup');

// Enqueue styles and scripts
function brightsmart_scripts() {
    wp_enqueue_style('brightsmart-style', get_stylesheet_uri());
    wp_enqueue_script('brightsmart-script', get_template_directory_uri() . '/js/main.js', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'brightsmart_scripts');

// Widget areas
function brightsmart_widgets_init() {
    register_sidebar(array(
        'name'          => 'Footer',
        'id'            => 'footer-1',
        'before_widget' => '<div class="widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'brightsmart_widgets_init');
```

**header.php:**
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <?php
            if (has_custom_logo()) {
                the_custom_logo();
            } else {
                echo '<h1 class="site-title"><a href="' . esc_url(home_url('/')) . '">' . get_bloginfo('name') . '</a></h1>';
            }
            ?>
            
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu flex space-x-6',
                    'walker' => new Brightsmart_Walker_Nav_Menu(),
                ));
                ?>
            </nav>
            
            <button class="mobile-menu-toggle md:hidden">
                <span class="sr-only">Toggle menu</span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </div>
    </div>
</header>
```

**footer.php:**
```php
<footer class="site-footer bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
            <div class="footer-about">
                <h3 class="text-xl font-semibold mb-4">Joyce Bright</h3>
                <p class="text-gray-300">Professional MC, Speaker, and Workshop Facilitator</p>
            </div>
            
            <div class="footer-services">
                <h3 class="text-xl font-semibold mb-4">Services</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'services',
                    'menu_class' => 'footer-menu space-y-2',
                ));
                ?>
            </div>
            
            <div class="footer-contact">
                <h3 class="text-xl font-semibold mb-4">Have Questions? Let's Connect.</h3>
                <p class="text-gray-300">Ready to Level Up Your Event? Let's Talk.</p>
            </div>
            
            <div class="footer-newsletter">
                <h3 class="text-xl font-semibold mb-4">Join My Mic Check Mail</h3>
                <p class="text-gray-300 mb-4">No Fluff, Just Insights</p>
                <!-- Newsletter signup form here -->
            </div>
        </div>
        
        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p class="text-gray-400">&copy; <?php echo date('Y'); ?> Joyce Bright. All rights reserved.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
```

This converted guide focuses specifically on the technical aspects of converting the Next.js codebase to WordPress-compatible PHP, templates, and functionality, providing developers with the exact code transformations needed for the migration. 