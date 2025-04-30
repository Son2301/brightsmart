import Link from 'next/link';
import Image from 'next/image';

export default function ResourcesPage() {
  // Sample blog posts for the featured section
  const featuredPosts = [
    {
      id: 1,
      title: "10 Ways to Keep Your Audience Engaged During Virtual Events",
      excerpt: "Virtual events present unique challenges for engagement. Learn proven strategies to keep your audience actively participating.",
      date: "Oct 15, 2023",
      image: "/images/blog/virtual-events.jpg",
      imageAlt: "Person presenting at a virtual event",
      imagePlaceholder: "Virtual Event",
      slug: "keep-audience-engaged-virtual-events"
    },
    {
      id: 2,
      title: "The Art of MC'ing: How to Guide an Event Without Stealing the Show",
      excerpt: "Discover the delicate balance of being present enough to guide an event while ensuring speakers and content remain the focus.",
      date: "Sep 3, 2023",
      image: "/images/blog/mc-guide.jpg",
      imageAlt: "MC introducing a speaker on stage",
      imagePlaceholder: "MC on Stage",
      slug: "art-of-mcing"
    },
    {
      id: 3,
      title: "Event Planning Timeline: What to Do 6 Months Before Your Big Day",
      excerpt: "A step-by-step guide for event planners to ensure every detail is covered well in advance of your event.",
      date: "Aug 21, 2023",
      image: "/images/blog/planning-timeline.jpg",
      imageAlt: "Event planning calendar and checklist",
      imagePlaceholder: "Planning Timeline",
      slug: "event-planning-timeline"
    }
  ];
  
  // Free downloadable resources
  const freeResources = [
    {
      id: 1,
      title: "MC Run Sheet Template",
      description: "A comprehensive template to keep your event flowing smoothly from start to finish.",
      icon: "📝",
      downloadSlug: "mc-run-sheet-template"
    },
    {
      id: 2,
      title: "Speaker Briefing Checklist",
      description: "Ensure your speakers are fully prepared with this detailed briefing checklist.",
      icon: "✅",
      downloadSlug: "speaker-briefing-checklist"
    },
    {
      id: 3,
      title: "How to Introduce a Speaker (Without It Being Awkward)",
      description: "Craft compelling speaker introductions that set the right tone for their presentation.",
      icon: "🎤",
      downloadSlug: "speaker-introduction-guide"
    },
    {
      id: 4,
      title: "Sample Event Agenda Template",
      description: "A flexible agenda template you can customize for any type of event.",
      icon: "📋",
      downloadSlug: "event-agenda-template"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold my-4">Resources</h1>
            <p className="text-xl font-light mb-6">
              Valuable tools, tips, and insights to help you create exceptional event experiences
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Blog</h2>
              <p className="text-xl text-gray-600">
                Real-world advice for event planners, marketers and speakers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {featuredPosts.map((post) => (
                <Link 
                  href={`/resources/blog/${post.slug}`} 
                  key={post.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      {post.imagePlaceholder}
                    </div>
                    {/* Uncomment when real images are available */}
                    {/* <Image 
                      src={post.image} 
                      alt={post.imageAlt} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    /> */}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/resources/blog" 
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Explore All Event Planning Tips
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Downloads Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Free Downloads</h2>
              <p className="text-xl text-gray-600">
                Helpful tools for planning and running standout events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {freeResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                  <Link 
                    href={`/resources/free-resources/${resource.downloadSlug}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-pink-600 transition-colors text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Get This Resource
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/resources/free-resources/all"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
              >
                Get All Free Resources
              </Link>
              <Link 
                href="/newsletter"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Subscribe for Latest Tips
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Email Subscribe Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Get the latest resources, event tips, and exclusive content delivered straight to your inbox.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button 
                type="submit" 
                className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-300 transition-colors"
              >
                Get Free Updates
              </button>
            </form>
            <p className="text-sm mt-4 opacity-80">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
