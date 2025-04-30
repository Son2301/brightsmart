import Link from 'next/link';
import Image from 'next/image';

export default function MCServicesPage() {
  // FAQ items
  const faqItems = [
    {
      question: "How far in advance should I book you for my event?",
      answer: "For the best availability, I recommend booking 3-6 months in advance for major events. However, I understand that sometimes needs arise unexpectedly, so please don't hesitate to reach out even for shorter timeframes."
    },
    {
      question: "Do you handle technical equipment or should we provide that?",
      answer: "I come prepared with my own handheld microphone as a backup, but generally work with your event's AV team. I'm comfortable with all standard microphone types and have extensive experience with technical setups."
    },
    {
      question: "How involved are you in the planning process?",
      answer: "I believe in being a true partner in your event's success. This means preliminary meetings to understand your goals, reviewing run sheets, suggesting improvements when requested, and being available for questions throughout the planning process."
    },
    {
      question: "Can you help with event flow and timing?",
      answer: "Absolutely! With 15+ years of media experience, I excel at managing time and keeping events flowing smoothly. I can help craft a schedule that provides the right pace and energy for your audience."
    },
    {
      question: "What happens if our event faces unexpected challenges?",
      answer: "My background in live media has prepared me for virtually any contingency. I remain calm under pressure and am adept at improvising solutions while maintaining professionalism and keeping your audience engaged."
    }
  ];

  // Event types
  const eventTypes = [
    {
      title: "Conferences & Forums",
      description: "Setting the tone, maintaining energy, and ensuring smooth transitions between speakers while keeping the program on schedule."
    },
    {
      title: "Award Ceremonies",
      description: "Creating an atmosphere of celebration, appropriately honoring recipients, and balancing formality with engaging moments."
    },
    {
      title: "Panel Discussions",
      description: "Facilitating meaningful conversation, ensuring balanced participation, and drawing out insights while managing time effectively."
    },
    {
      title: "Charity & Gala Events",
      description: "Striking the perfect balance between entertainment and purpose, helping to drive fundraising goals with sensitivity and impact."
    },
    {
      title: "Festival & Community Events",
      description: "Bringing warmth and inclusivity to diverse community gatherings, creating a welcoming atmosphere for all attendees."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold">MC SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">
              Not just a confident voice—an experienced event partner
            </h1>
            <p className="text-xl font-light mb-10">
              I keep your event on time, on-brand, and on-point while creating meaningful connections with your audience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Approach as Your MC</h2>
              <p className="text-lg mb-6">
                I bring more than just a polished presence to your stage. With my unique perspective 
                as a woman of color with extensive media experience, I create an environment of 
                inclusivity and engagement that resonates with diverse audiences.
              </p>
              <p className="text-lg mb-6">
                My goal is to elevate your event by understanding its purpose, connecting authentically 
                with your audience, and ensuring every aspect runs smoothly – from technical coordination 
                to seamless transitions between segments.
              </p>
            </div>
            
            <div>
              {/* Outcomes Box */}
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-6">What You Can Expect</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">What to expect</h4>
                      <p className="text-gray-600">Thorough preparation, professional delivery, and a warm presence that makes everyone feel welcome and valued.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">Audience impact</h4>
                      <p className="text-gray-600">An engaged, connected audience that feels part of the conversation rather than just spectators.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">Event organiser benefits</h4>
                      <p className="text-gray-600">Peace of mind from working with a tech-ready, adaptable professional who makes your job easier and helps achieve your event goals.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Events</h2>
            <p className="text-lg text-gray-600">
              I bring specialized expertise to a wide range of events, each with its unique requirements and audience expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Working Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">The Process of Working Together</h2>
              <p className="text-lg text-gray-600">
                From initial inquiry to post-event follow-up, I ensure a smooth and collaborative experience.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">1</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Initial Consultation</h3>
                    <p className="text-gray-600 mt-2">
                      We'll discuss your event goals, audience, and specific needs to ensure we're a good fit. 
                      This is where I learn about your vision and how I can help bring it to life.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 top-12 h-16 w-px bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">2</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Planning & Preparation</h3>
                    <p className="text-gray-600 mt-2">
                      I'll work closely with your team on run sheets, key messaging, pronunciations, and any special requirements. 
                      This phase typically involves 1-2 planning meetings and detailed review of materials.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 top-12 h-16 w-px bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">3</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Pre-Event Check-In</h3>
                    <p className="text-gray-600 mt-2">
                      A final review before the event to address any last-minute changes and ensure everyone is aligned. 
                      I arrive early on event day for technical checks and to connect with your team.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 top-12 h-16 w-px bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">4</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Event Day</h3>
                    <p className="text-gray-600 mt-2">
                      I bring your event to life with professionalism, energy, and adaptability. 
                      Throughout the event, I remain attentive to audience engagement and timing, 
                      making adjustments as needed to ensure success.
                    </p>
                  </div>
                </div>
                <div className="absolute left-6 top-12 h-16 w-px bg-gray-300"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">5</div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Post-Event Follow-Up</h3>
                    <p className="text-gray-600 mt-2">
                      I'll connect with you after the event to gather feedback and discuss any future collaborations. 
                      Your satisfaction is my priority, and I value the opportunity to grow our professional relationship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Investment</h2>
              <p className="text-lg text-gray-600">
                Pricing is tailored to your specific event needs and scope.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary/10 p-6">
                <h3 className="text-2xl font-bold text-center">MC Services</h3>
                <p className="text-center text-gray-600 mt-2">Professional MC services for your event</p>
              </div>
              
              <div className="p-8">
                <p className="text-lg mb-6">
                  My pricing structure is based on several factors to ensure fair value for your specific needs:
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-primary mr-2">•</span>
                    <span><strong>Event duration</strong> (half-day, full-day, multi-day)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-primary mr-2">•</span>
                    <span><strong>Preparation required</strong> (script development, research, meetings)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-primary mr-2">•</span>
                    <span><strong>Event complexity</strong> (number of speakers, segments, special requirements)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 text-primary mr-2">•</span>
                    <span><strong>Location & travel</strong> (local, interstate, international)</span>
                  </li>
                </ul>
                
                <p className="text-lg font-medium mb-6">
                  Pricing typically ranges from $1,500 for a half-day event to $3,500+ for full-day complex events.
                </p>
                
                <p className="text-gray-600 italic">
                  For detailed pricing specific to your event, please contact me for a personalized quote.
                </p>
                
                <div className="mt-8">
                  <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Answers to common questions about my MC services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to elevate your next event?</h2>
            <p className="text-lg mb-8">
              Let's discuss how I can help make your event more connected, inclusive, and memorable.
            </p>
            
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
              Book Me As Your MC
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
