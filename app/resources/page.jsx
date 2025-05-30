'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsletterPopup from '../components/NewsletterPopup';

export default function ResourcesPage() {
  // State for newsletter popup
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  // State to control how many resources to show
  const [showAllResources, setShowAllResources] = useState(false);

  // Media Kit Resources
  const mediaKitResources = [
    {
      id: 1,
      title: "Professional Headshot (Color)",
      description: "High-resolution color headshot for event programs, websites, and promotional materials.",
      category: "Photos",
      fileType: "JPG",
      fileSize: "5.2 MB",
      dimensions: "3000 × 2000 px",
      preview: "Headshot Preview"
    },
    {
      id: 2,
      title: "On-Stage Speaking Photo",
      description: "Action shot from a recent keynote presentation, suitable for event promotion.",
      category: "Photos",
      fileType: "JPG",
      fileSize: "7.1 MB",
      dimensions: "4000 × 2667 px",
      preview: "Speaking Photo Preview"
    },
    {
      id: 3,
      title: "Full Biography (500 words)",
      description: "Comprehensive professional biography suitable for conference programs and detailed introductions.",
      category: "Biographies",
      fileType: "PDF",
      fileSize: "320 KB",
      dimensions: "1 page",
      preview: "Full Bio Preview"
    },
    {
      id: 4,
      title: "Primary Logo (Full Color)",
      description: "Official full-color logo for use on white or light backgrounds.",
      category: "Logos & Brand",
      fileType: "ZIP",
      fileSize: "1.8 MB",
      fileFormats: "AI, EPS, PNG, SVG",
      preview: "Logo Preview"
    },
    {
      id: 5,
      title: "Introduction Script",
      description: "Ready-to-use MC introduction script for event hosts to properly introduce me at your event.",
      category: "Event Materials",
      fileType: "DOCX",
      fileSize: "78 KB",
      dimensions: "1 page",
      preview: "Script Preview"
    },
    {
      id: 6,
      title: "Speaking Topics Overview",
      description: "Detailed descriptions of my signature talks with key takeaways for your audience.",
      category: "Event Planning",
      fileType: "PDF",
      fileSize: "450 KB",
      dimensions: "3 pages",
      preview: "Topics Preview"
    }
  ];

  // Sample blog posts for the featured section
  const featuredPosts = [
    {
      id: 1,
      title: "10 Ways to Keep Your Audience Engaged During Virtual Events",
      excerpt: "Virtual events present unique challenges for engagement. Learn proven strategies to keep your audience actively participating.",
      date: "Oct 15, 2023",
      image: "/images/Bright Smart Pics/Resources/photo-1712904116109-84cd03566be9.webp",
      imageAlt: "Person presenting at a virtual event",
      imagePlaceholder: "Virtual Event",
      slug: "keep-audience-engaged-virtual-events"
    },
    {
      id: 2,
      title: "The Art of MC'ing: How to Guide an Event Without Stealing the Show",
      excerpt: "Discover the delicate balance of being present enough to guide an event while ensuring speakers and content remain the focus.",
      date: "Sep 3, 2023",
      image: "/images/Bright Smart Pics/Resources/photo-1523289333742-be1143f6b766.webp",
      imageAlt: "MC introducing a speaker on stage",
      imagePlaceholder: "MC on Stage",
      slug: "art-of-mcing"
    },
    {
      id: 3,
      title: "Event Planning Timeline: What to Do 6 Months Before Your Big Day",
      excerpt: "A step-by-step guide for event planners to ensure every detail is covered well in advance of your event.",
      date: "Aug 21, 2023",
      image: "/images/Bright Smart Pics/Resources/photo-1503428593586-e225b39bddfe.webp",
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
      downloadSlug: "event-agenda-template",
      hidden: true
    },
    {
      id: 5,
      title: "Event Budget Calculator",
      description: "A practical tool to help you manage your event budget effectively.",
      icon: "💰",
      downloadSlug: "event-budget-calculator"
    },
    {
      id: 6,
      title: "Virtual Event Checklist",
      description: "Essential items to consider when planning and hosting virtual events.",
      icon: "💻",
      downloadSlug: "virtual-event-checklist"
    },
    {
      id: 7,
      title: "Post-Event Evaluation Form",
      description: "Gather valuable feedback to improve your future events.",
      icon: "📊",
      downloadSlug: "post-event-evaluation"
    },
    {
      id: 8,
      title: "Speaker Marketing Kit",
      description: "Templates to help promote speakers before your event.",
      icon: "📢",
      downloadSlug: "speaker-marketing-kit"
    },
    {
      id: 9,
      title: "Event Emergency Plan",
      description: "Be prepared for unexpected situations with this comprehensive plan.",
      icon: "🚨",
      downloadSlug: "event-emergency-plan"
    }
  ];

  return (
    <main className="bg-white">
      {/* Newsletter Popup */}
      <NewsletterPopup
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

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

      {/* Featured Resources / Media Kit Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Resources</h2>
              <p className="text-xl text-gray-600">
                Download these resources to help promote your event
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
              {mediaKitResources.map((resource) => (
                <div key={resource.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="relative h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    {resource.preview}
                  </div>
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                        {resource.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <span className="mr-1">{resource.fileType}</span>
                      </div>
                      {resource.fileSize && (
                        <div className="flex items-center">
                          <span className="mr-1">{resource.fileSize}</span>
                        </div>
                      )}
                      {resource.dimensions && (
                        <div className="flex items-center">
                          <span className="mr-1">{resource.dimensions}</span>
                        </div>
                      )}
                      {resource.fileFormats && (
                        <div className="flex items-center">
                          <span className="mr-1">{resource.fileFormats}</span>
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => alert('Resource download coming soon!')}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Downloads Section - Moved above Blog section to prioritize */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Free Downloads</h2>
              <p className="text-xl text-gray-600">
                Helpful tools for planning and running standout events.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {freeResources
                .filter(resource => !resource.hidden)
                .slice(0, showAllResources ? 9 : 3)
                .map((resource) => (
                  <div key={resource.id} className="bg-white rounded-lg shadow p-6 flex flex-col h-full">
                    <div className="text-4xl mb-4">{resource.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                    <button
                      onClick={() => alert('Resource download feature coming soon!')}
                      className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors text-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Grab This Resource
                    </button>
                  </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {!showAllResources && (
                <button
                  onClick={() => setShowAllResources(true)}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
                >
                  Show More Resources
                </button>
              )}
              <button
                onClick={() => alert('Resources download feature coming soon!')}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors"
              >
                Get All Free Resources
              </button>
              <button
                onClick={() => setIsNewsletterOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Subscribe for Latest Tips
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section - Moved below Free Downloads section */}
      <section className="py-16 bg-gray-50">
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
                <div
                  key={post.id}
                  onClick={() => alert('Blog post coming soon!')}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative h-48 bg-gray-200">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={() => alert('Blog feature coming soon!')}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                Explore All Event Planning Tips
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want to stay in the loop?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Join my newsletter for exclusive resources and event planning insights.
            </p>
            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              Get Free Updates
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
