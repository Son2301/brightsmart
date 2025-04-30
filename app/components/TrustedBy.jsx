import React from 'react';
import Image from 'next/image';

export default function TrustedBy() {
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
  );
} 