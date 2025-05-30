import Link from 'next/link';
import Image from 'next/image';

export default function WorkshopsPage() {
  // Workshop offerings
  const workshops = [
    {
      id: 1,
      title: "Media Training for Executives",
      description: "Prepare your leadership team to confidently and effectively communicate with media across all platforms. This hands-on workshop equips participants with practical techniques for message delivery, handling difficult questions, and creating soundbites that resonate.",
      outcomes: [
        "Confidence in navigating both planned and impromptu media interactions",
        "Ability to craft compelling messages that align with organizational goals",
        "Techniques for maintaining control in challenging interview situations"
      ],
      formats: ["In-person (preferred)", "Virtual"],
      duration: ["Half-day (3 hours)", "Full-day (6 hours) with extended practice sessions"],
      audienceSize: "Up to 12 participants for optimal individual attention",
      materials: "Comprehensive workbook, video recording of practice sessions, post-workshop feedback report"
    },
    {
      id: 2,
      title: "Inclusive Communication: Connecting With Diverse Audiences",
      description: "Transform your organization's approach to inclusive communication. This workshop moves beyond superficial diversity efforts to help teams develop authentic, respectful communication strategies that genuinely connect with diverse audiences.",
      outcomes: [
        "Framework for evaluating current communications through an inclusivity lens",
        "Practical strategies for authentic representation without tokenism",
        "Techniques for addressing blind spots and unconscious bias in messaging"
      ],
      formats: ["In-person", "Virtual", "Hybrid"],
      duration: ["Half-day (3 hours)", "Full-day (6 hours) with extended case studies"],
      audienceSize: "Up to 25 participants to allow for meaningful group discussions",
      materials: "Interactive workbook, inclusivity audit template, resource guide for continued learning"
    },
    {
      id: 3,
      title: "Storytelling for Impact: Crafting Narratives That Move People to Action",
      description: "Harness the power of strategic storytelling to drive engagement and action. This workshop teaches participants how to identify, craft, and deliver compelling stories that support organizational goals and create authentic connection.",
      outcomes: [
        "Understanding of narrative structures that drive emotional connection and action",
        "Ability to identify and develop authentic stories within your organization",
        "Techniques for adapting stories across different platforms and contexts"
      ],
      formats: ["In-person", "Virtual", "Hybrid"],
      duration: ["Half-day (3 hours)", "Two half-days with implementation period between sessions"],
      audienceSize: "Up to 20 participants for interactive exercises",
      materials: "Storytelling framework templates, implementation guide, example bank"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold">WORKSHOPS</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">
              Workshops designed for action: practical skills, not just inspiration
            </h1>
            <p className="text-xl font-light mb-10">
              Interactive, engaging training that creates lasting change in how your team communicates.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Workshop Approach</h2>
              <p className="text-lg mb-6">
                Too many workshops leave participants feeling temporarily inspired but without
                concrete skills to implement. My workshops are different—they're designed to create
                lasting change through practical frameworks, hands-on exercises, and custom
                implementation plans.
              </p>
              <p className="text-lg mb-6">
                Drawing from my 15+ years in media, I bring real-world experience and proven
                techniques that participants can immediately apply to their work. Each workshop
                is highly interactive, with opportunities for practice, feedback, and personalization.
              </p>
              <p className="text-lg mb-6">
                All workshops can be customized to your organization's specific context, challenges,
                and goals—ensuring relevance and maximum impact for your team.
              </p>
            </div>

            <div>
              {/* Outcomes Box */}
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-6">Workshop Benefits</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">What to expect</h4>
                      <p className="text-gray-600">Highly interactive sessions with concrete tools, frameworks, and practice opportunities, not just theory.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">Participant impact</h4>
                      <p className="text-gray-600">Immediate confidence and capability improvement, with practical skills that can be applied right away.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">Organizational benefits</h4>
                      <p className="text-gray-600">Measurable improvement in your team's communication effectiveness, creating lasting organizational change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Format Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Format Options</h2>
              <p className="text-lg text-gray-600">
                All workshops can be delivered in formats that work for your team's needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">In-Person</h3>
                <p className="text-gray-600">
                  Immersive, high-energy sessions with maximum interaction and personalized feedback. Ideal for team building and complex skill development.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Virtual</h3>
                <p className="text-gray-600">
                  Highly engaging online sessions designed specifically for the virtual environment. Includes breakout rooms, digital collaboration tools, and varied activities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Hybrid</h3>
                <p className="text-gray-600">
                  Combining in-person and virtual components to accommodate distributed teams. Carefully designed to ensure equal participation regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Offerings */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Workshop Offerings</h2>
              <p className="text-lg text-gray-600">
                Each workshop can be customized to your organization's specific needs and challenges.
              </p>
            </div>

            <div className="space-y-20">
              {workshops.map((workshop) => (
                <div key={workshop.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-primary/5 p-8">
                    <h3 className="text-2xl font-bold mb-2">{workshop.title}</h3>
                    <p className="text-gray-700">{workshop.description}</p>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        {/* Workshop Outcomes Box */}
                        <div className="bg-gray-50 p-6 rounded-xl mb-8">
                          <h4 className="font-bold mb-4 text-lg">Outcomes</h4>

                          <div className="space-y-3">
                            {workshop.outcomes.map((outcome, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 text-primary">
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                  </svg>
                                </div>
                                <div className="ml-3">
                                  <p className="text-gray-700">{outcome}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Workshop Materials */}
                        <div>
                          <h4 className="text-lg font-semibold mb-3">Materials Provided</h4>
                          <p className="text-gray-600">{workshop.materials}</p>
                        </div>
                      </div>

                      <div>
                        <div className="space-y-6">
                          {/* Format Options */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Format Options</h4>
                            <ul className="space-y-1">
                              {workshop.formats.map((format, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                                  <span className="text-gray-600">{format}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Duration Options */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Duration Options</h4>
                            <ul className="space-y-1">
                              {workshop.duration.map((option, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                                  <span className="text-gray-600">{option}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Audience Size */}
                          <div>
                            <h4 className="text-lg font-semibold mb-3">Ideal Audience Size</h4>
                            <p className="text-gray-600">{workshop.audienceSize}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Workshop Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Custom Workshops</h2>
              <p className="text-lg text-gray-600">
                Don't see exactly what you need? I can develop custom workshops tailored to your specific challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-lg mb-6">
                Drawing from my 15+ years of media experience, I can develop specialized workshops for your organization's unique needs. Popular custom topics include:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Crisis Communication</strong> - Preparing teams to effectively communicate during challenging situations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Presentation Skills</strong> - Helping team members deliver compelling, confident presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Visual Storytelling</strong> - Creating impactful visual content across platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-primary mr-2">•</span>
                  <span className="text-gray-700"><strong>Audience Engagement</strong> - Strategies for deeper connection with your specific audience segments</span>
                </li>
              </ul>

              <p className="text-gray-600 mb-8">
                The custom workshop development process typically includes needs assessment, learning objective development, content creation, and delivery—all with ongoing collaboration to ensure the final workshop meets your specific goals.
              </p>

              <div className="text-center">
                <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                  Inquire About Custom Workshops
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary font-semibold">TESTIMONIAL</span>
              <h2 className="text-3xl font-bold mt-2 mb-8">What Participants Say</h2>
            </div>

            <div className="bg-gray-50 p-10 rounded-xl relative">
              <div className="text-primary text-8xl absolute top-4 left-6 opacity-20">"</div>
              <div className="relative z-10">
                <p className="text-xl text-gray-700 italic mb-8">
                  Joyce's media training workshop transformed how our team approaches communication. Her hands-on approach,
                  practical frameworks, and personalized feedback gave everyone concrete skills they could apply immediately.
                  Three months later, we're still using the techniques she taught us, and we've seen measurable improvements
                  in our media coverage and audience engagement.
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gray-300 rounded-full mr-4">
                    {/* Replace with actual image when available */}
                    {/* <Image 
                      src="/images/testimonials/sarah-wong.jpg" 
                      alt="Sarah Wong" 
                      width={56} 
                      height={56} 
                      className="rounded-full"
                    /> */}
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Wong</h4>
                    <p className="text-gray-600">Communications Director, Tech Innovation Alliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to elevate your team's communication skills?</h2>
            <p className="text-lg mb-8">
              Let's discuss how my workshops can help your team develop practical skills that create lasting impact.
            </p>

            <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Inquire About Workshops
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
