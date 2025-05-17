import React from 'react';

export default function WhyWorkWithMe() {
  const proofPoints = [
    {
      id: 1,
      stat: '15+',
      title: 'years of media experience',
      description: 'Bringing expertise and professionalism to every event'
    },
    {
      id: 2,
      stat: '100+',
      title: 'events MC\'d',
      description: 'Creating memorable experiences for diverse audiences'
    },
    {
      id: 3,
      stat: 'Trusted',
      title: 'by government, media and creative industries',
      description: 'Delivering excellence across various sectors'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Work With Me?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPoints.map((point) => (
            <div key={point.id} className="text-center">
              <div className="inline-flex items-center justify-center mb-4">
                <span className="text-4xl md:text-5xl font-bold text-primary">{point.stat}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 