import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  const portfolioSections = [
    {
      id: 1,
      title: "Past Events",
      description: "Explore my experience across corporate, government and industry events.",
      image: "/images/Bright Smart Pics/Portfolio/Past Events/photo-1585974738771-84483dd9f89f.webp",
      link: "/portfolio/past-events",
      imagePlaceholder: "Past Events Image"
    },
    {
      id: 2,
      title: "Testimonials",
      description: "Hear what clients and event organisers say about working with me.",
      image: "/images/Bright Smart Pics/Portfolio/Testimonials/photo-1512314889357-e157c22f938d.webp",
      link: "/portfolio/testimonials",
      imagePlaceholder: "Testimonials Image"
    },
    {
      id: 3,
      title: "Media Kit",
      description: "Download professional resources for your event planning needs.",
      image: "/images/Bright Smart Pics/Portfolio/Media Kit/ON stage speaking.webp",
      link: "/portfolio/media-kit",
      imagePlaceholder: "Media Kit Image"
    }
  ];

  const organizations = [
    {
      id: 1,
      name: 'Mainstreet Australia',
      logoPath: '/images/clientLogos/Mainstreet-Australia-logo.png'
    },
    {
      id: 2,
      name: 'Open House Melbourne',
      logoPath: '/images/clientLogos/open-house.svg'
    },
    {
      id: 3,
      name: 'Merri-bek City Council',
      logoPath: '/images/clientLogos/Merri-bek_logo.png'
    },
    {
      id: 4,
      name: 'Maribyrnong City Council',
      logoPath: '/images/clientLogos/Maribyrnong_city_council_logo.svg'
    },
    {
      id: 5,
      name: 'Melbourne Writers Festival',
      logoPath: '/images/clientLogos/melbourne_writer_festival.png'
    },
    {
      id: 6,
      name: 'Footscray Traders Association',
      logoPath: '/images/clientLogos/FootscrayTradersLogoAssn-Member.png'
    },
    {
      id: 7,
      name: 'Footscray Market',
      logoPath: '/images/clientLogos/Footscray+Market_Fresh+&+Cheap_Red_Small.png'
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold">PORTFOLIO</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">Experience That Speaks Volumes</h1>
            <p className="text-xl font-light mb-6">
              Explore my past events, client testimonials and resources for event organisers.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioSections.map((section) => (
              <Link
                key={section.id}
                href={section.link}
                className="group block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 bg-gray-200">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl font-semibold text-gray-700 mb-2">Trusted By</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 place-items-center max-w-6xl mx-auto">
            {organizations.map((org) => (
              <div key={org.id} className="flex items-center justify-center h-24 w-full">
                <div className="relative w-full h-full max-w-[160px] max-h-[70px]">
                  <Image
                    src={org.logoPath}
                    alt={org.name}
                    fill
                    sizes="160px"
                    className="filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-300"
                    style={{ objectFit: 'contain' }}
                  />
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
            <h2 className="text-3xl font-bold mb-6">Ready to create a memorable event?</h2>
            <p className="text-lg mb-8">
              Let's discuss how I can help bring your vision to life and create an exceptional experience for your audience.
            </p>

            <Link href="/contact" className="inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
