"use client";

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPaperPlane } from 'react-icons/fa';

export default function ContactPage() {
  // State for booking form
  const [bookingForm, setBookingForm] = useState({
    name: '',
    organization: '',
    email: '',
    serviceType: '',
    eventDetails: '',
    budgetRange: '',
    contactMethod: 'email'
  });

  // State for general inquiry form
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle booking form changes
  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle general inquiry form changes
  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle booking form submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('Booking form submitted:', bookingForm);
    alert('Thank you for your inquiry! Please complete your booking in the calendar below.');
    // Reset form
    setBookingForm({
      name: '',
      organization: '',
      email: '',
      serviceType: '',
      eventDetails: '',
      budgetRange: '',
      contactMethod: 'email'
    });
  };

  // Handle general inquiry form submission
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log('General inquiry submitted:', inquiryForm);
    alert('Thank you for your message! I\'ll get back to you soon.');
    // Reset form
    setInquiryForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold my-4">Contact Me</h1>
            <p className="text-xl font-light mb-6">
              Let's discuss how I can help make your next event a success
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* General Inquiries Section */}
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Got a quick question?</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>

              <p className="text-gray-600 mb-6">
                I'd love to hear from you. Feel free to reach out via the form below.
              </p>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Organization field */}
                <div>
                  <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">Organisation</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={bookingForm.organization}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">Type of Service</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={bookingForm.serviceType}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="mc">MC Services</option>
                    <option value="facilitation">Event Facilitation</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="workshop">Workshop</option>
                    <option value="consultation">Event Consultation</option>
                    <option value="other">Other (please specify in details)</option>
                  </select>
                </div>

                {/* Event Details */}
                <div>
                  <label htmlFor="eventDetails" className="block text-gray-700 font-medium mb-2">Event Details</label>
                  <textarea
                    id="eventDetails"
                    name="eventDetails"
                    value={bookingForm.eventDetails}
                    onChange={handleBookingChange}
                    rows="4"
                    placeholder="Please include event date, location, audience size, and any specific requirements"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budgetRange" className="block text-gray-700 font-medium mb-2">Budget Range</label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={bookingForm.budgetRange}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                    <option value="not-sure">Not sure yet</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Preferred Contact Method</label>
                  <div className="space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={bookingForm.contactMethod === 'email'}
                        onChange={handleBookingChange}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2">Email</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={bookingForm.contactMethod === 'phone'}
                        onChange={handleBookingChange}
                        className="form-radio text-primary"
                      />
                      <span className="ml-2">Phone</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Let's Talk About Your Event
                </button>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  I aim to respond within two business days.
                </p>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Direct Contact</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FaPaperPlane className="text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:joyce@brightsmart.com.au" className="text-primary hover:underline">joyce@brightsmart.com.au</a>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Connect on Social</p>
                  <div className="flex space-x-4">
                    <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-primary">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-primary">
                      <FaTwitter size={24} />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-primary">
                      <FaInstagram size={24} />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-primary">
                      <FaFacebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Booking Form Section - Replace with Calendar Only */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-4">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Schedule a Discovery Call</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>

            <p className="text-gray-600 mb-4">
              Select a convenient time for us to discuss your event needs in detail.
            </p>

            {/* TidyCal Calendar Booking Section */}
            <div className="cal-embed-container rounded-lg overflow-hidden border border-gray-100">
              <div className="tidycal-embed" data-path="joyce-watts/15-minute-meeting"></div>
              <script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script>
            </div>

            {/* Add styling to help with responsiveness and expansion */}
            <style jsx global>{`
              /* Fix for TidyCal embed responsive display */
              .cal-embed-container {
                height: 100%;
                min-height: 800px;
                display: flex;
                flex-direction: column;
              }
              
              /* Full viewport height minus header space */
              @media screen and (min-height: 800px) {
                .cal-embed-container {
                  min-height: calc(100vh - 200px) !important;
                }
              }
            `}</style>
          </section>
        </div>
      </div>
    </main>
  );
}
