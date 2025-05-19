import Link from 'next/link';
import Image from 'next/image';

export default function PastEventsPage() {
  // Events data organized by year
  const eventsByYear = {
    "2023": [
      {
        id: "e2023-1",
        title: "Future of Work Summit",
        date: "November 15-17, 2023",
        location: "San Francisco, CA",
        role: "Keynote Speaker",
        description: "Delivered the opening keynote on 'Reimagining Leadership in the Digital Era' to an audience of 1,200+ business leaders and executives.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1552581234-26160f608093.webp",
        imagePlaceholder: "Future of Work Event",
        highlight: true,
        eventUrl: "https://futureofworksummit.com", // Placeholder URL
      },
      {
        id: "e2023-2",
        title: "Women in Tech Conference",
        date: "September 5-6, 2023",
        location: "Chicago, IL",
        role: "Panel Moderator",
        description: "Moderated a panel discussion on 'Breaking Barriers in Tech Leadership' featuring executives from Fortune 500 companies.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1585974738771-84483dd9f89f.webp",
        imagePlaceholder: "Women in Tech Conference",
        highlight: true,
        eventUrl: "https://womenintech.org/conference", // Placeholder URL
      },
      {
        id: "e2023-3",
        title: "Global Innovation Forum",
        date: "July 22, 2023",
        location: "London, UK",
        role: "Workshop Facilitator",
        description: "Led a half-day workshop on 'Design Thinking for Business Transformation' for 50 senior executives.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1716703742154-8a90c9563eed.webp",
        imagePlaceholder: "Innovation Forum Event",
        highlight: false,
        eventUrl: "https://globalinnovationforum.com", // Placeholder URL
      },
      {
        id: "e2023-4",
        title: "Digital Marketing Summit",
        date: "May 10-12, 2023",
        location: "Miami, FL",
        role: "Breakout Session Speaker",
        description: "Delivered a session on 'The Future of Digital Customer Experience' to marketing professionals.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1495149905644-c9f27692c2c3.webp",
        imagePlaceholder: "Marketing Summit Event",
        highlight: false,
        eventUrl: "https://digitalmarketingsummit.com", // Placeholder URL
      },
      {
        id: "e2023-5",
        title: "Corporate Leadership Retreat",
        date: "March 25-27, 2023",
        location: "Scottsdale, AZ",
        role: "Executive Coach",
        description: "Facilitated team-building exercises and leadership development sessions for a Fortune 100 company's executive team.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1663780887563-bfe3b3550de1.webp",
        imagePlaceholder: "Leadership Retreat Event",
        highlight: false,
        eventUrl: null,
      },
    ],
    "2022": [
      {
        id: "e2022-1",
        title: "Tech Leadership Summit",
        date: "October 18-20, 2022",
        location: "Austin, TX",
        role: "Keynote Speaker",
        description: "Presented on 'Leading Through Digital Transformation' to technology leaders from across industries.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1501504905252-473c47e087f8.webp",
        imagePlaceholder: "Tech Leadership Summit",
        highlight: true,
        eventUrl: "https://techleadershipsummit.com", // Placeholder URL
      },
      {
        id: "e2022-2",
        title: "HR Innovation Conference",
        date: "August 8-9, 2022",
        location: "Boston, MA",
        role: "Featured Speaker",
        description: "Delivered a talk on 'The Future of Work and Talent Development' to HR professionals and executives.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1586752002496-cd05ccef47f3.webp",
        imagePlaceholder: "HR Innovation Conference",
        highlight: true,
        eventUrl: "https://hrinnovationconf.com", // Placeholder URL
      },
      {
        id: "e2022-3",
        title: "Executive Leadership Academy",
        date: "June 15-17, 2022",
        location: "Seattle, WA",
        role: "Program Facilitator",
        description: "Led a 3-day immersive leadership program for mid-career executives focusing on adaptive leadership skills.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1531545514256-b1400bc00f31.webp",
        imagePlaceholder: "Leadership Academy Event",
        highlight: false,
        eventUrl: "https://executiveleadershipacademy.org", // Placeholder URL
      },
      {
        id: "e2022-4",
        title: "Corporate Sustainability Forum",
        date: "April 22, 2022",
        location: "Denver, CO",
        role: "Panel Speaker",
        description: "Participated in a panel discussion on 'Integrating ESG into Business Strategy' for corporate sustainability leaders.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1690191795219-d88b1af86e3b.webp",
        imagePlaceholder: "Sustainability Forum Event",
        highlight: false,
        eventUrl: "https://corpsustainabilityforum.com", // Placeholder URL
      },
    ],
    "2021": [
      {
        id: "e2021-1",
        title: "Digital Transformation Conference",
        date: "November 10-12, 2021",
        location: "Virtual Event",
        role: "Keynote Speaker",
        description: "Delivered a virtual keynote on 'Leading in a Distributed Workplace' to global business leaders.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1588196749597-9ff075ee6b5b.webp",
        imagePlaceholder: "Digital Transformation Conference",
        highlight: true,
        eventUrl: "https://digitaltransformationconf.com", // Placeholder URL
      },
      {
        id: "e2021-2",
        title: "Women Leaders in Business Summit",
        date: "September 28-29, 2021",
        location: "Virtual Event",
        role: "Fireside Chat",
        description: "Participated in a fireside chat on 'Resilient Leadership Through Crisis' with the CEO of a Fortune 500 company.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1634155938686-24a26c55d71a.webp",
        imagePlaceholder: "Women Leaders Summit",
        highlight: true,
        eventUrl: "https://womenleaderssummit.com", // Placeholder URL
      },
      {
        id: "e2021-3",
        title: "Future of Leadership Podcast",
        date: "July 15, 2021",
        location: "Remote",
        role: "Featured Guest",
        description: "In-depth interview on leadership strategies for the post-pandemic workplace and evolving organizational cultures.",
        image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1503428593586-e225b39bddfe.webp",
        imagePlaceholder: "Leadership Podcast Feature",
        highlight: false,
        eventUrl: "https://futureofleadershippodcast.com/episodes/ep127", // Placeholder URL
      },
    ]
  };

  // Get all years and sort in descending order
  const years = Object.keys(eventsByYear).sort((a, b) => parseInt(b) - parseInt(a));

  // Get all highlight events for the featured section
  const highlightEvents = Object.values(eventsByYear)
    .flat()
    .filter(event => event.highlight)
    .slice(0, 3); // Take only 3 for the featured section

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
            <h1 className="text-4xl md:text-5xl font-bold my-4">Past Events</h1>
            <p className="text-xl font-light mb-6">
              Explore my speaking engagements, workshops, and appearances from recent years.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlightEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
                {/* Event Image */}
                <div className="relative h-56 bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full">
                      {event.role}
                    </span>
                    <span className="text-sm text-gray-500">{event.date}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>

                    {event.eventUrl && (
                      <a
                        href={event.eventUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                      >
                        Event Details
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events By Year */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Event History</h2>

          {/* Year filter navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {years.map((year) => (
              <a
                key={year}
                href={`#year-${year}`}
                className="px-6 py-2 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {year}
              </a>
            ))}
          </div>

          {/* Events listed by year */}
          <div className="space-y-16">
            {years.map((year) => (
              <div key={year} id={`year-${year}`} className="scroll-mt-24">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="mr-4">{year}</span>
                  <span className="h-px bg-gray-300 flex-grow"></span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {eventsByYear[year].map((event) => (
                    <div key={event.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row">
                      {/* Event Image - smaller for this layout */}
                      <div className="relative h-40 md:h-auto md:w-1/3 bg-gray-200 shrink-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              {event.role}
                            </span>
                            <span className="text-sm text-gray-500">{event.date}</span>
                          </div>

                          <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                        </div>

                        <div className="mt-auto flex justify-between items-center">
                          <span className="inline-flex items-center text-xs text-gray-500">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </span>

                          {event.eventUrl && (
                            <a
                              href={event.eventUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary font-medium hover:underline"
                            >
                              View Details
                            </a>
                          )}
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
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Looking for a speaker?</h2>
            <p className="text-lg mb-8">
              I'm available for keynotes, workshops, panels, and other speaking engagements. Let's discuss how I can add value to your next event.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
                View Services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
