"use client";

import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaPaperPlane, FaCalendarAlt, FaClock } from 'react-icons/fa';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

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

  // State for calendar and time selection
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  // Available time slots - these could be fetched from an API
  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowTimeSlots(true);
    setSelectedTime(null); // Reset time when date changes
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

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
    const bookingDetails = {
      ...bookingForm,
      appointmentDate: selectedDate ? selectedDate.toDateString() : null,
      appointmentTime: selectedTime
    };
    console.log('Booking form submitted:', bookingDetails);
    alert('Thank you for your inquiry! I aim to respond within 2 business days.');
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
    setSelectedDate(null);
    setSelectedTime(null);
    setShowTimeSlots(false);
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

  // Function to disable past dates
  const tileDisabled = ({ date }) => {
    return date < new Date(new Date().setHours(0, 0, 0, 0));
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
          {/* Booking Form Section */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">Let's bring your event to life.</h2>
              <div className="h-1 w-20 bg-primary"></div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              {/* Basic Info Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <label htmlFor="organization" className="block text-gray-700 font-medium mb-2">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={bookingForm.organization}
                    onChange={handleBookingChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

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

              {/* Calendar Booking Section */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">Schedule a Discovery Call</h3>
                </div>

                <div className="mb-4">
                  <p className="text-gray-600 text-sm mb-4">
                    Select a date and time for us to discuss your event needs in detail.
                  </p>

                  <div className="calendar-container">
                    <Calendar
                      onChange={handleDateChange}
                      value={selectedDate}
                      tileDisabled={tileDisabled}
                      className="w-full border-0 shadow-none"
                    />
                  </div>
                </div>

                {showTimeSlots && (
                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      <FaClock className="text-primary mr-2" />
                      <h4 className="font-medium text-gray-800">Available Time Slots</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`py-2 px-3 rounded-md border text-sm font-medium ${selectedTime === time
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                            }`}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedDate && selectedTime && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-md">
                    <p className="text-green-800 font-medium text-sm">
                      You selected: {selectedDate.toDateString()} at {selectedTime}
                    </p>
                  </div>
                )}
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
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-600 transition-colors flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" />
                  Let's Talk About Your Event
                </button>
                <p className="text-gray-600 text-sm mt-3 text-center">
                  I aim to respond within 2 business days.
                </p>
              </div>
            </form>
          </section>

          {/* General Inquiries Section */}
          <section>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-800">Got a quick question?</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>

              <p className="text-gray-600 mb-6">
                I'd love to hear from you. Feel free to reach out via the form or email.
              </p>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="inquiry-name"
                    name="name"
                    value={inquiryForm.name}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="inquiry-email"
                    name="email"
                    value={inquiryForm.email}
                    onChange={handleInquiryChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    value={inquiryForm.message}
                    onChange={handleInquiryChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-semibold py-3 px-6 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Send Your Question
                </button>
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
        </div>
      </div>

      {/* Add custom styles for the calendar */}
      <style jsx global>{`
        .react-calendar {
          width: 100%;
          max-width: 100%;
          background: white;
          border: none;
          font-family: inherit;
          line-height: 1.125em;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .react-calendar__tile--active {
          background: var(--color-primary, #f06292);
          color: white;
        }
        .react-calendar__tile--active:enabled:hover,
        .react-calendar__tile--active:enabled:focus {
          background: var(--color-primary-dark, #ec407a);
        }
        .react-calendar__tile:disabled {
          background-color: #f0f0f0;
          color: #ccc;
        }
        .react-calendar button {
          margin: 0;
          border: 0;
          outline: none;
        }
        .react-calendar button:enabled:hover {
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}
