import React from 'react';
import Image from 'next/image';

export default function TrustedBy() {
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-gray-700 mb-2">Trusted By</h3>
        <p className="text-center text-gray-500 mb-8">Organisations who have collaborated with us</p>

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
  );
} 