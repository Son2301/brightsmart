import Link from 'next/link';
import Image from 'next/image';

export default function SpeakingTopicsPage() {
  // Speaking topics
  const speakingTopics = [
    {
      id: 1,
      title: "Inclusive Media: Creating Content That Resonates with Diverse Audiences",
      description: "Drawing from my experience as a woman of color in media, this talk explores how organizations can create more inclusive, representative content that connects with today's diverse audiences.",
      takeaways: [
        "Understanding the business case for inclusive content",
        "Practical frameworks for auditing your current media approach",
        "Strategies for authentic representation without tokenism",
        "Building inclusive teams that naturally create inclusive content"
      ],
      audience: "Media organizations, marketing teams, content creators, corporate communications departments",
      customization: "Can be tailored to specific industries or content formats"
    },
    {
      id: 2,
      title: "The Power of Authentic Voice: Bringing Your True Self to Leadership",
      description: "This inspiring talk draws on my journey as a media entrepreneur to explore how embracing your authentic voice and perspective can become your greatest leadership asset.",
      takeaways: [
        "Identifying your unique strengths and perspective",
        "Overcoming imposter syndrome and finding confidence",
        "Turning perceived disadvantages into unique advantages",
        "Building a personal brand that remains true to your values"
      ],
      audience: "Leadership teams, women in business, diversity networks, industry conferences",
      customization: "Can emphasize personal journey or practical applications depending on audience needs"
    },
    {
      id: 3,
      title: "Connection in the Digital Age: Building Community Through Storytelling",
      description: "Based on my experience building one of Australia's most successful media brands, this talk explores how effective storytelling can build community and loyalty in an age of digital distraction.",
      takeaways: [
        "Understanding the elements of stories that create connection",
        "Techniques for identifying and crafting authentic stories within your organization",
        "Balancing digital efficiency with human connection",
        "Measuring the impact of storytelling on audience engagement"
      ],
      audience: "Business leaders, marketing professionals, community organizers, non-profit organizations",
      customization: "Can focus on digital, in-person, or hybrid storytelling approaches"
    },
    {
      id: 4,
      title: "Media-Ready: Communicating Your Message with Impact",
      description: "This practical workshop shares insider techniques from my 15+ years in media to help professionals effectively communicate their message across various platforms.",
      takeaways: [
        "Crafting clear, compelling messaging that cuts through noise",
        "Techniques for confident delivery in high-pressure situations",
        "Adapting your communication style for different media formats",
        "Handling difficult questions and staying on message"
      ],
      audience: "Executives, spokespeople, subject matter experts, anyone who interfaces with media",
      customization: "Can include mock interview scenarios, on-camera practice, or focus on specific media contexts"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Joyce's talk on inclusive media practices was eye-opening. She provided actionable strategies that we've implemented with remarkable results in audience engagement.",
      author: "James Wilson",
      position: "Head of Content, Media Network Australia"
    },
    {
      id: 2,
      quote: "Her authentic approach to leadership resonated deeply with our team. Joyce doesn't just inspire—she provides practical frameworks that have transformed how we approach representation in our work.",
      author: "Priya Sharma",
      position: "Diversity & Inclusion Manager, TechForward"
    },
    {
      id: 3,
      quote: "The storytelling techniques Joyce shared have revolutionized our community outreach. We're connecting with audiences we previously struggled to reach.",
      author: "Michael Rodriguez",
      position: "Communications Director, Community First"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold">SPEAKING TOPICS</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">
              Elevate your event with talks that inspire action, not just applause
            </h1>
            <p className="text-xl font-light mb-10">
              Insightful, engaging presentations tailored specifically for your audience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Approach to Speaking</h2>
              <p className="text-lg mb-6">
                I believe talks should do more than just inspire momentary enthusiasm—they should 
                equip your audience with new perspectives and practical strategies they can apply immediately.
              </p>
              <p className="text-lg mb-6">
                Drawing from my 15+ years in media and my experience as a woman of color building a 
                successful brand in a challenging landscape, my talks blend personal storytelling, 
                research-backed insights, and actionable frameworks.
              </p>
              <p className="text-lg mb-6">
                Each presentation is customized to your specific audience and objectives, ensuring 
                relevant content that resonates with your particular context.
              </p>
            </div>
            
            <div>
              {/* Outcomes Box */}
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary">
                <h3 className="text-xl font-bold mb-6">Speaking Engagement Benefits</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">What to expect</h4>
                      <p className="text-gray-600">Thoughtfully researched content delivered with engaging storytelling and clear, actionable takeaways.</p>
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
                      <p className="text-gray-600">Inspired attendees who leave with specific tools and strategies they can implement immediately.</p>
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
                      <p className="text-gray-600">A professional, low-maintenance speaker who delivers compelling content customized to your specific audience needs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Sample Section (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">See Me in Action</h2>
              <p className="text-lg text-gray-600">
                Watch samples of my speaking style and approach.
              </p>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500">Speaking sample video</p>
                </div>
              </div>
              
              {/* Uncomment when video is available */}
              {/* <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID" 
                title="Joyce Speaking Sample" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Speaking Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Signature Speaking Topics</h2>
              <p className="text-lg text-gray-600">
                Each talk can be customized to your audience's specific needs and delivered as a keynote, workshop, or panel.
              </p>
            </div>
            
            <div className="space-y-20">
              {speakingTopics.map((topic) => (
                <div key={topic.id} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>
                    <p className="text-gray-700 mb-6">{topic.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Key Takeaways</h4>
                      <ul className="space-y-2">
                        {topic.takeaways.map((takeaway, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="flex-shrink-0 text-primary mr-2">•</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2">Ideal For</h4>
                      <p className="text-gray-600">{topic.audience}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Customization</h4>
                      <p className="text-gray-600">{topic.customization}</p>
                    </div>
                  </div>
                  
                  <div>
                    {/* Outcomes Box */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                      <h4 className="font-bold mb-4 text-lg">Outcomes</h4>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1 text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">Attendees gain practical tools and strategies they can implement immediately</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1 text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">Fresh perspectives on challenges your organization may be facing</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1 text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-700">Engaging content that inspires meaningful discussion long after the event</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Placeholder for topic image */}
                    <div className="mt-6 rounded-xl overflow-hidden bg-gray-200 aspect-video relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">Topic Image</div>
                      {/* Uncomment when image is available */}
                      {/* <Image 
                        src={`/images/topics/${topic.id}.jpg`} 
                        alt={topic.title} 
                        fill
                        style={{ objectFit: 'cover' }}
                      /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Client Feedback</h2>
              <p className="text-lg text-gray-600">
                What organizers and audiences say about my speaking engagements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="text-primary text-5xl mb-4">"</div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
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
            <h2 className="text-3xl font-bold mb-6">Book Me for Your Next Event</h2>
            <p className="text-lg mb-8">
              Let's discuss how my talks can bring value to your audience and organization.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/downloads/joyce-speaker-onesheet.pdf" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-white text-primary border-2 border-primary rounded-md hover:bg-primary/5 transition-colors">
                Download Speaker One-Sheet
              </Link>
              
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
                Inquire About Speaking
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
