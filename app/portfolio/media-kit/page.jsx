import Link from 'next/link';
import Image from 'next/image';

export default function MediaKitPage() {
  const mediaCategories = [
    { id: "photos", name: "Photos" },
    { id: "logos", name: "Logos & Brand" },
    { id: "bios", name: "Biographies" },
    { id: "materials", name: "Event Materials" }
  ];

  const mediaResources = [
    {
      id: 1,
      title: "Professional Headshot (Color)",
      description: "High-resolution color headshot for event programs, websites, and promotional materials.",
      category: "photos",
      fileType: "WEBP",
      fileSize: "1.8 MB",
      featured: true,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Prof headshot B&W.webp",
      thumbnailPlaceholder: "Headshot Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Prof headshot B&W.webp"
    },
    {
      id: 2,
      title: "On-Stage Speaking Photo",
      description: "Action shot from a recent keynote presentation, suitable for event promotion.",
      category: "photos",
      fileType: "WEBP",
      fileSize: "513 KB",
      featured: true,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/ON stage speaking.webp",
      thumbnailPlaceholder: "Speaking Photo Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/ON stage speaking.webp"
    },
    {
      id: 3,
      title: "Workshop Facilitation Photo",
      description: "Photo showing workshop facilitation style, perfect for workshop promotion.",
      category: "photos",
      fileType: "WEBP",
      fileSize: "513 KB",
      featured: false,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Workshop facilitation photo.webp",
      thumbnailPlaceholder: "Workshop Photo Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Workshop facilitation photo.webp"
    },
    {
      id: 4,
      title: "Full Biography",
      description: "Comprehensive professional biography suitable for conference programs and detailed introductions.",
      category: "bios",
      fileType: "WEBP",
      fileSize: "2.9 MB",
      featured: true,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Full bio.webp",
      thumbnailPlaceholder: "Full Bio Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Full bio.webp"
    },
    {
      id: 5,
      title: "Short Biography",
      description: "Concise professional biography for event listings and brief introductions.",
      category: "bios",
      fileType: "WEBP",
      fileSize: "392 KB",
      featured: false,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Short bio.webp",
      thumbnailPlaceholder: "Short Bio Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Short bio.webp"
    },
    {
      id: 6,
      title: "Brief Introduction",
      description: "Very brief introduction text for use in programs or quick introductions.",
      category: "bios",
      fileType: "WEBP",
      fileSize: "269 KB",
      featured: false,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Brief intro.webp",
      thumbnailPlaceholder: "Brief Intro Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Brief intro.webp"
    },
    {
      id: 7,
      title: "Primary Logo (Color)",
      description: "Official full-color logo for use on white or light backgrounds.",
      category: "logos",
      fileType: "WEBP",
      fileSize: "586 KB",
      featured: true,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Primary logo (color).webp",
      thumbnailPlaceholder: "Color Logo Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Primary logo (color).webp"
    },
    {
      id: 8,
      title: "Primary Logo (Monochrome)",
      description: "Monochrome version of the logo for use on colored backgrounds or special applications.",
      category: "logos",
      fileType: "WEBP",
      fileSize: "403 KB",
      featured: false,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Primary logo monochrome.webp",
      thumbnailPlaceholder: "Monochrome Logo Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Primary logo monochrome.webp"
    },
    {
      id: 9,
      title: "Brand Style Guide",
      description: "Comprehensive guide for using brand assets correctly in your promotional materials.",
      category: "logos",
      fileType: "WEBP",
      fileSize: "738 KB",
      featured: false,
      thumbnail: "/images/Bright Smart Pics/Portfolio/Media Kit/Brand style guide.webp",
      thumbnailPlaceholder: "Style Guide Preview",
      downloadUrl: "/images/Bright Smart Pics/Portfolio/Media Kit/Brand style guide.webp"
    }
  ];

  const featuredResources = mediaResources.filter(resource => resource.featured);

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
            <h1 className="text-4xl md:text-5xl font-bold my-4">Media Kit</h1>
            <p className="text-xl font-light mb-6">
              Download high-quality assets for events, marketing, and press coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Guidelines Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Usage Guidelines</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Thank you for your interest in using these media assets. Please adhere to the following guidelines:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the most recent version of photos and biographies whenever possible.</li>
                  <li>Do not crop, alter, or edit photos without express permission.</li>
                  <li>Do not modify the logo proportions or colors.</li>
                  <li>Biography text may be shortened, but not altered otherwise.</li>
                  <li>Please credit "Nicole Smith" when using any provided materials.</li>
                </ul>
                <p className="font-medium text-gray-800">
                  For special requests or additional materials, please <Link href="/contact" className="text-primary hover:underline">contact me</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Categories Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {mediaCategories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 rounded-full bg-white border border-gray-200 hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <div key={resource.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
                {/* Thumbnail */}
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full">
                      {mediaCategories.find(cat => cat.id === resource.category)?.name || resource.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  {/* File info */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {resource.fileType}
                    </span>

                    <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      {resource.fileSize}
                    </span>

                    {resource.dimensions && (
                      <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                        {resource.dimensions}
                      </span>
                    )}

                    {resource.pages && (
                      <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        {resource.pages}
                      </span>
                    )}

                    {resource.formats && (
                      <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        {resource.formats}
                      </span>
                    )}
                  </div>

                  {/* Download button */}
                  <a
                    href={resource.downloadUrl}
                    className="block w-full py-3 text-center bg-primary text-white font-medium rounded-md hover:bg-pink-600 transition-colors"
                    download
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">All Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mediaResources.map((resource) => (
              <div key={resource.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                {/* Thumbnail */}
                <div className="relative h-40 bg-gray-200">
                  <Image
                    src={resource.thumbnail}
                    alt={resource.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />

                  {/* Category badge */}
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-0.5 text-xs font-medium bg-black/70 text-white rounded-full">
                      {resource.fileType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="font-bold mb-1">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{resource.description}</p>

                  {/* Download button */}
                  <a
                    href={resource.downloadUrl}
                    className="block w-full py-2 text-center border border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors text-sm"
                    download
                  >
                    Download {resource.fileSize && `(${resource.fileSize})`}
                  </a>
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
            <h2 className="text-3xl font-bold mb-6">Need something specific?</h2>
            <p className="text-lg mb-8">
              If you need custom materials or have specific requirements for your event or publication, please get in touch.
            </p>

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
