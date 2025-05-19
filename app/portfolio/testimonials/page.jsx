import Link from 'next/link';
import Image from 'next/image';

export default function TestimonialsPage() {
  // Testimonial data organized by industry
  const testimonialsByIndustry = {
    "Corporate": [
      {
        id: "t-corp-1",
        quote: "Jane's coaching transformed the way our executive team communicates. Her strategic approach and deep expertise helped us navigate a challenging reorganization with clarity and confidence.",
        author: "Michael Chen",
        title: "Chief Operating Officer",
        company: "Nexus Technologies",
        image: "/images/testimonials/michael-chen.jpg", // Placeholder path
        imagePlaceholder: "M",
        featured: true,
        industry: "Corporate",
      },
      {
        id: "t-corp-2",
        quote: "Working with Jane on our leadership development program exceeded all expectations. Her ability to connect with executives at all levels and deliver actionable insights is unmatched.",
        author: "Sarah Williams",
        title: "VP of Human Resources",
        company: "Global Financial Partners",
        image: "/images/testimonials/sarah-williams.jpg", // Placeholder path
        imagePlaceholder: "S",
        featured: true,
        industry: "Corporate",
      },
      {
        id: "t-corp-3",
        quote: "Jane's communication workshops have become an essential part of our onboarding process. The practical skills and frameworks she provides have measurably improved team collaboration.",
        author: "James Peterson",
        title: "Director of Talent Development",
        company: "Innovate Solutions",
        image: "/images/testimonials/james-peterson.jpg", // Placeholder path
        imagePlaceholder: "J",
        featured: false,
        industry: "Corporate",
      },
      {
        id: "t-corp-4",
        quote: "The executive coaching provided by Jane helped me navigate a particularly challenging transition to senior leadership. Her guidance was both practical and transformative.",
        author: "Olivia Rodriguez",
        title: "Chief Marketing Officer",
        company: "Horizon Media Group",
        image: "/images/testimonials/olivia-rodriguez.jpg", // Placeholder path
        imagePlaceholder: "O",
        featured: false,
        industry: "Corporate",
      },
    ],
    "Non-Profit": [
      {
        id: "t-np-1",
        quote: "Jane's messaging workshop completely transformed how we communicate our mission. Our donor engagement has increased by 30% since implementing her storytelling framework.",
        author: "David Thompson",
        title: "Executive Director",
        company: "Global Education Initiative",
        image: "/images/testimonials/david-thompson.jpg", // Placeholder path
        imagePlaceholder: "D",
        featured: true,
        industry: "Non-Profit",
      },
      {
        id: "t-np-2",
        quote: "Our board retreat facilitated by Jane was the most productive we've ever had. She skillfully navigated difficult conversations and helped us align on strategic priorities.",
        author: "Grace Kim",
        title: "Board Chair",
        company: "Community Health Alliance",
        image: "/images/testimonials/grace-kim.jpg", // Placeholder path
        imagePlaceholder: "G",
        featured: false,
        industry: "Non-Profit",
      },
      {
        id: "t-np-3",
        quote: "Jane's communication training for our volunteer coordinators has dramatically improved our community outreach effectiveness. She understands the unique challenges non-profits face.",
        author: "Marcus Johnson",
        title: "Volunteer Programs Director",
        company: "Urban Renewal Project",
        image: "/images/testimonials/marcus-johnson.jpg", // Placeholder path
        imagePlaceholder: "M",
        featured: false,
        industry: "Non-Profit",
      },
    ],
    "Government": [
      {
        id: "t-gov-1",
        quote: "Jane's facilitation of our stakeholder engagement sessions was masterful. She created a safe space for difficult discussions that led to breakthrough solutions for our community development initiative.",
        author: "Victoria Nguyen",
        title: "Director of Community Relations",
        company: "City of Riverdale",
        image: "/images/testimonials/victoria-nguyen.jpg", // Placeholder path
        imagePlaceholder: "V",
        featured: true,
        industry: "Government",
      },
      {
        id: "t-gov-2",
        quote: "The crisis communication framework Jane developed for our department has become an essential tool. Her training helped us navigate recent challenges with transparency and empathy.",
        author: "Robert Martinez",
        title: "Public Affairs Manager",
        company: "State Environmental Agency",
        image: "/images/testimonials/robert-martinez.jpg", // Placeholder path
        imagePlaceholder: "R",
        featured: false,
        industry: "Government",
      },
    ],
    "Education": [
      {
        id: "t-edu-1",
        quote: "Jane's leadership program for our faculty has transformed departmental collaboration. Her approach to navigating academic politics while staying focused on student outcomes was exactly what we needed.",
        author: "Dr. Elizabeth Barrett",
        title: "Dean of Student Affairs",
        company: "Pacific Coast University",
        image: "/images/testimonials/elizabeth-barrett.jpg", // Placeholder path
        imagePlaceholder: "E",
        featured: true,
        industry: "Education",
      },
      {
        id: "t-edu-2",
        quote: "The workshop Jane conducted for our administrative team on managing difficult conversations has had lasting impact. We now approach conflicts as opportunities rather than obstacles.",
        author: "Thomas Wilson",
        title: "School Principal",
        company: "Lakeside Academy",
        image: "/images/testimonials/thomas-wilson.jpg", // Placeholder path
        imagePlaceholder: "T",
        featured: false,
        industry: "Education",
      },
    ],
    "Events": [
      {
        id: "t-event-1",
        quote: "Joyce helped us keep our event on track, engage a diverse audience, get fantastic feedback, and relax and enjoy our event.",
        author: "Emma Thompson",
        title: "Events Director",
        company: "Mainstreet Australia",
        image: "/images/Bright Smart Pics/Portfolio/Testimonials/photo-1512314889357-e157c22f938d.webp",
        imagePlaceholder: "E",
        featured: true,
        industry: "Events",
        highlightPoints: [
          "Keep our event on track",
          "Engage a diverse audience",
          "Get fantastic feedback",
          "Relax and enjoy our event"
        ]
      }
    ]
  };

  // Case studies data
  const caseStudies = [
    {
      id: "cs-1",
      organization: "Mainstreet Australia",
      logo: "/images/clientLogos/Mainstreet-Australia-logo.png",
      logoPlaceholder: "Mainstreet Australia Logo",
      images: [
        "/images/case-studies/mainstreet-1.jpg",
        "/images/case-studies/mainstreet-2.jpg"
      ],
      imagesPlaceholder: "Mainstreet Event Photo",
      brief: "Facilitate a day-long conference for retail precinct managers from across Victoria, focusing on post-pandemic recovery strategies.",
      challenge: "Bring together diverse stakeholders with different priorities and create a collaborative environment where participants could share challenges and develop actionable solutions.",
      approach: "Designed an interactive program combining expert panels with facilitated breakout sessions. Created custom discussion frameworks to ensure productive conversations and tangible outcomes.",
      results: {
        engagement: "97% active participation in breakout sessions",
        feedback: "4.8/5 average satisfaction rating from attendees",
        social: "250+ LinkedIn shares of event content",
        additional: "6 new partnership initiatives formed during the event"
      }
    },
    {
      id: "cs-2",
      organization: "Merri-bek City Council",
      logo: "/images/clientLogos/Merri-bek_logo.png",
      logoPlaceholder: "Merri-bek City Council Logo",
      images: [
        "/images/case-studies/merribek-1.jpg",
        "/images/case-studies/merribek-2.jpg"
      ],
      imagesPlaceholder: "Merri-bek Council Event Photo",
      brief: "Design and facilitate a series of community consultation workshops for a controversial urban development project.",
      challenge: "Navigate strong opposing viewpoints and ensure all community voices were heard while maintaining a respectful and productive dialogue.",
      approach: "Implemented a structured but flexible format allowing for both individual input and group discussion. Used visual mapping techniques to identify common ground and priorities across different stakeholder groups.",
      results: {
        engagement: "350+ community members actively participated",
        feedback: "92% of participants felt their concerns were acknowledged",
        social: "Positive coverage in 3 local news outlets",
        additional: "Council adopted 8 key recommendations from the workshops"
      }
    },
    {
      id: "cs-3",
      organization: "Open House Melbourne / City of Maribyrnong / Footscray Market",
      logo: "/images/clientLogos/open-house.svg",
      logoPlaceholder: "Open House Melbourne Logo",
      images: [
        "/images/case-studies/footscray-1.jpg",
        "/images/case-studies/footscray-2.jpg"
      ],
      imagesPlaceholder: "Footscray Market Event Photo",
      brief: "Coordinate a collaborative cultural event celebrating Footscray Market's 40th anniversary as part of Open House Melbourne.",
      challenge: "Create a cohesive program that honored the market's multicultural heritage while engaging new audiences and coordinating multiple stakeholder groups.",
      approach: "Developed a narrative-driven event combining historical exhibitions, vendor stories, and interactive experiences. Created a collaborative governance structure with clear roles for each partner organization.",
      results: {
        engagement: "5,000+ visitors across the weekend event",
        feedback: "4.7/5 average visitor satisfaction rating",
        social: "1,200+ Instagram posts using the event hashtag",
        additional: "Featured in Time Out Melbourne as a 'must-visit' event"
      }
    }
  ];

  // Get all industries
  const industries = Object.keys(testimonialsByIndustry);

  // Get featured testimonials for the showcase section
  const featuredTestimonials = Object.values(testimonialsByIndustry)
    .flat()
    .filter(testimonial => testimonial.featured)
    .slice(0, 3); // Take only 3 for the showcase

  // Function to get random testimonial (not in featured) for the quote banner
  const getRandomTestimonial = () => {
    const allTestimonials = Object.values(testimonialsByIndustry).flat();
    const nonFeatured = allTestimonials.filter(t => !t.featured);
    return nonFeatured[Math.floor(Math.random() * nonFeatured.length)];
  };

  const randomTestimonial = getRandomTestimonial();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/portfolio" className="inline-flex items-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold my-4">Client Testimonials</h1>
            <p className="text-xl font-light mb-6">
              Read what clients have to say about their experiences working with me.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Highlighted Testimonial */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
              <div className="text-primary mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.722 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576zM25.355 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576z"></path>
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Joyce helped us...</h2>
                  <ul className="space-y-4">
                    {testimonialsByIndustry.Events[0].highlightPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-lg">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden relative">
                      <Image
                        src={testimonialsByIndustry.Events[0].image}
                        alt={testimonialsByIndustry.Events[0].author}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonialsByIndustry.Events[0].author}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonialsByIndustry.Events[0].title}, {testimonialsByIndustry.Events[0].company}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden hidden md:block">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Event Photo
                  </div>
                  {/* Uncomment when images are available */}
                  {/* <Image 
                    src="/images/testimonials/event-success.jpg" 
                    alt="Successful event" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Success Stories</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6 text-primary">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.722 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576zM25.355 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576z"></path>
                    </svg>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg mb-6">{testimonial.quote}</blockquote>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden relative">
                      {testimonial.industry === "Events" ? (
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="text-lg font-bold text-gray-500">{testimonial.imagePlaceholder}</div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                      <span className="text-xs text-primary">{testimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {randomTestimonial && (
              <>
                <div className="mb-6">
                  <svg className="w-12 h-12 mx-auto opacity-50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.722 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576zM25.355 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576z"></path>
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-light italic mb-8">{randomTestimonial.quote}</blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4 overflow-hidden relative">
                    {randomTestimonial.industry === "Events" ? (
                      <Image
                        src={randomTestimonial.image}
                        alt={randomTestimonial.author}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="text-lg font-bold">{randomTestimonial.imagePlaceholder}</div>
                    )}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold">{randomTestimonial.author}</h4>
                    <p className="text-sm opacity-80">{randomTestimonial.title}, {randomTestimonial.company}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Case Studies</h2>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore detailed examples of how I've helped organizations achieve their goals through effective facilitation and event management.
          </p>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`bg-white rounded-xl shadow-md overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex`}>
                {/* Images Section */}
                <div className="md:w-2/5 relative">
                  <div className="h-64 md:h-full bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {study.imagesPlaceholder}
                    </div>
                    {/* Uncomment when images are available */}
                    {/* <Image 
                      src={study.images[0]} 
                      alt={`${study.organization} case study`} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    /> */}
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="h-12 w-36 bg-gray-200 relative flex items-center justify-center mr-4">
                      <Image
                        src={study.logo}
                        alt={study.organization}
                        width={144}
                        height={48}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold">{study.organization}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold text-primary mb-2">The Brief</h4>
                      <p className="text-gray-700">{study.brief}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary mb-2">The Challenge</h4>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-primary mb-2">My Approach</h4>
                    <p className="text-gray-700">{study.approach}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-primary mb-3">Results</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-500 mb-1">Engagement</div>
                        <div className="font-medium">{study.results.engagement}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-500 mb-1">Feedback</div>
                        <div className="font-medium">{study.results.feedback}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-500 mb-1">Social Media</div>
                        <div className="font-medium">{study.results.social}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <div className="text-sm text-gray-500 mb-1">Additional</div>
                        <div className="font-medium">{study.results.additional}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials By Industry */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials By Industry</h2>

          {/* Industry filter navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <a
                key={industry}
                href={`#industry-${industry.toLowerCase().replace(' ', '-')}`}
                className="px-6 py-2 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {industry}
              </a>
            ))}
          </div>

          {/* Testimonials by industry */}
          <div className="space-y-16">
            {industries.map((industry) => (
              <div key={industry} id={`industry-${industry.toLowerCase().replace(' ', '-')}`} className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="mr-4">{industry}</span>
                  <span className="h-px bg-gray-300 flex-grow"></span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonialsByIndustry[industry].map((testimonial) => (
                    <div key={testimonial.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6">
                      {/* Quote Icon */}
                      <div className="mb-4 text-primary">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.722 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576zM25.355 6.417c-5.876 2.457-9.88 7.570-9.88 13.196 0 4.393 2.342 8.247 6.292 8.247 3.282 0 5.855-2.586 5.855-6.06 0-3.243-2.342-5.820-5.463-5.820-0.654 0-1.308 0.13-1.832 0.26 0.784-3.372 3.782-6.715 7.173-8.247l-2.146-1.576z"></path>
                        </svg>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-gray-700 mb-6">{testimonial.quote}</blockquote>

                      {/* Author Info */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3 overflow-hidden relative">
                          {testimonial.industry === "Events" ? (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.author}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          ) : (
                            <div className="text-sm font-bold text-gray-500">{testimonial.imagePlaceholder}</div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{testimonial.author}</h4>
                          <p className="text-xs text-gray-600">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
            <p className="text-lg mb-8">
              I'd love to learn about your goals and how I can help your organization succeed.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
