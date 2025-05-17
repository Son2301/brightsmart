import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioPage() {
  const portfolioSections = [
    {
      id: 1,
      title: "Past Events",
      description: "Explore my experience across corporate, government and industry events.",
      image: "/images/portfolio/past-events-cover.jpg", // Placeholder
      link: "/portfolio/past-events",
      imagePlaceholder: "Past Events Image"
    },
    {
      id: 2,
      title: "Testimonials",
      description: "Hear what clients and event organisers say about working with me.",
      image: "/images/portfolio/testimonials-cover.jpg", // Placeholder
      link: "/portfolio/testimonials",
      imagePlaceholder: "Testimonials Image"
    },
    {
      id: 3,
      title: "Media Kit",
      description: "Download professional resources for your event planning needs.",
      image: "/images/portfolio/media-kit-cover.jpg", // Placeholder
      link: "/portfolio/media-kit",
      imagePlaceholder: "Media Kit Image"
    }
  ];

  const organizations = [
    {
      id: 1,
      name: 'Mainstreet Australia',
      logoPath: '/logos/mainstreet-australia.png'
    },
    {
      id: 2,
      name: 'Open House Melbourne',
      logoPath: '/logos/open-house-melbourne.png'
    },
    {
      id: 3,
      name: 'Merri-bek City Council',
      logoPath: '/logos/merri-bek-council.png'
    },
    {
      id: 4,
      name: 'Maribyrnong City Council',
      logoPath: '/logos/maribyrnong-council.png'
    },
    {
      id: 5,
      name: 'Melbourne Writers Festival',
      logoPath: '/logos/melbourne-writers-festival.png'
    },
    {
      id: 6,
      name: 'Footscray Traders Association',
      logoPath: '/logos/footscray-traders.png'
    },
    {
      id: 7,
      name: 'Footscray Market',
      logoPath: '/logos/footscray-market.png'
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
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">{section.imagePlaceholder}</div>
                  {/* Uncomment when images are available */}
                  {/* <Image 
                    src={section.image} 
                    alt={section.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  /> */}
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
          <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">Trusted By</h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {organizations.map((org) => (
              <div key={org.id} className="w-32 md:w-40 h-16 relative flex items-center justify-center">
                {/* Replace with actual logos when available */}
                <div className="w-full h-12 bg-gray-200 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-xs text-gray-500">{org.name}</span>
                </div>

                {/* When you have the logos, uncomment and use this: */}
                {/* <Image
                  src={org.logoPath}
                  alt={org.name}
                  width={140}
                  height={60}
                  className="filter grayscale opacity-70 hover:opacity-100 transition-opacity"
                /> */}
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

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
