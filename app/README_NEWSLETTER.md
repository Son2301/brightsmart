# Newsletter Setup Guide

This project uses MailerLite for newsletter subscriptions. Follow these steps to complete the setup:

## Setting up MailerLite API

1. **Create a MailerLite account**
   - Sign up at https://www.mailerlite.com if you don't have an account

2. **Get your API key**
   - Go to MailerLite dashboard > Integrations > Developer API
   - Generate a new API key with appropriate permissions

3. **Create a Group for subscribers**
   - Go to Subscribers > Groups
   - Create a new group (e.g., "Monthly Mic Check Newsletter")
   - Note the Group ID (visible in the URL when you select the group)

4. **Configure environment variables**
   - Create a `.env.local` file in the project root with:
     ```
     # MailerLite API Configuration
     MAILERLITE_API_KEY=your_api_key_here
     MAILERLITE_GROUP_ID=your_group_id_here
     ```

## Testing the Integration

1. After setting up the environment variables, restart your development server
2. Test the newsletter signup form in the footer
3. Check your MailerLite dashboard to verify subscribers are being added

## Using MailerLite Embedded Forms (Alternative Approach)

If you prefer using MailerLite's native embedded forms instead of the custom API integration:

1. Go to MailerLite > Forms > Create Form > Embedded Form
2. Design your form and save it
3. Get the form ID from the embed code (looks like: `ml('showForm', { account: '1498075', formId: '5e6d8v' })`)
4. Modify `/app/components/Footer.jsx` to use the embedded form:

```jsx
import { useEffect } from 'react';

export default function Footer() {
  // Initialize MailerLite embedded form when component mounts
  useEffect(() => {
    // Check if MailerLite is loaded and initialize the form
    if (window.ml) {
      window.ml('showForm', { 
        account: '1498075', // Your account ID
        formId: '5e6d8v',   // Your form ID
        element: 'ml-newsletter-form' 
      });
    }
  }, []);
  
  // Rest of the footer code...
  
  {/* Newsletter section */}
  <div id="ml-newsletter-form" className="ml-form-embed mb-4">
    {/* MailerLite will inject the form here */}
    {/* Fallback form in case JS fails to load */}
    <form className="space-y-3">
      {/* Your fallback form elements */}
    </form>
  </div>
}
```

## Understanding the Implementation

This project implements newsletter functionality in two ways:

1. **Custom Form with API Integration** (current implementation)
   - Located in `app/components/NewsletterForm.jsx`
   - Backend endpoint at `app/api/newsletter/route.js`
   - Provides more control over styling and user experience
   
2. **MailerLite Embedded Form** (alternative)
   - Uses MailerLite's embedded form functionality
   - Easier to maintain as changes in MailerLite automatically reflect

Both approaches use the MailerLite API to manage subscribers, track engagement, and send email campaigns. 