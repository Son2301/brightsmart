import React from 'react';

export default function FeatureShowcase() {
  const features = [
    {
      id: 1,
      number: '01',
      title: 'Strategic Approach',
      description: 'We develop custom digital marketing plans aligned with your business goals and target audience.'
    },
    {
      id: 2,
      number: '02',
      title: 'Data-Driven Results',
      description: 'Our decisions are backed by analytics, ensuring measurable outcomes and continuous improvement.'
    },
    {
      id: 3,
      number: '03',
      title: 'Personalized Solutions',
      description: 'Every business is unique. We tailor our strategies to address your specific challenges and opportunities.'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background element */}
      <div className="hidden md:block absolute -left-32 bottom-0 w-64 h-96 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="hidden md:block absolute top-20 right-32 w-20 h-20 rounded-full bg-accent/20"></div>
      
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Heading Section */}
          <div className="max-w-lg mb-16">
            <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 relative">
              Why Choose Us
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent"></span>
            </h2>
            <p className="text-gray-600 text-lg">
              We combine strategy, creativity, and technology to deliver exceptional digital marketing solutions.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature) => (
              <div key={feature.id} className="group relative">
                {/* Number background */}
                <span className="absolute -top-6 -left-3 text-9xl font-bold text-gray-100 z-0 transition-all duration-300 group-hover:text-gray-200">{feature.number}</span>
                
                {/* Content */}
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
                
                {/* Hover line effect */}
                <div className="absolute -bottom-4 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-24"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-24 bg-white py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <span className="text-primary font-bold text-2xl">93%</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Client Satisfaction</h4>
              <p className="text-gray-600">Based on client feedback surveys and testimonials</p>
            </div>
            
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <span className="text-primary font-bold text-2xl">150+</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Projects Completed</h4>
              <p className="text-gray-600">Successfully delivered across various industries</p>
            </div>
            
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <span className="text-primary font-bold text-2xl">5x</span>
              </div>
              <h4 className="text-lg font-bold mb-2">Average ROI</h4>
              <p className="text-gray-600">Return on investment for our marketing campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 