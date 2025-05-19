import Link from 'next/link';
import Image from 'next/image';
import { FiMic, FiMessageSquare, FiUsers } from 'react-icons/fi';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "MC Services",
      description: "Not just a confident voice—an experienced event partner who knows how to keep things on time, on-brand and on-point.",
      icon: <FiMic className="w-10 h-10" />,
      link: "/services/mc-services",
      color: "from-primary/20 to-primary/5"
    },
    {
      id: 2,
      title: "Speaking Topics",
      description: "Elevate your event with talks that inspire action, not just applause. Tailored insights for your specific audience.",
      icon: <FiMessageSquare className="w-10 h-10" />,
      link: "/services/speaking-topics",
      color: "from-accent/20 to-accent/5"
    },
    {
      id: 3,
      title: "Workshops",
      description: "Workshops designed for action: give your team practical skills, not just inspiration. Interactive and results-driven.",
      icon: <FiUsers className="w-10 h-10" />,
      link: "/services/workshops",
      color: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold">SERVICES</span>
            <h1 className="text-4xl md:text-5xl font-bold my-4">Elevate Your Events</h1>
            <p className="text-xl text-gray-600 mb-10">
              From professional MC services to engaging talks and transformative workshops,
              I bring warmth, expertise and inclusivity to every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-500`}></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <div className="mt-auto flex items-center font-medium text-primary">
                    <span>Learn more</span>
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

      {/* Why Choose Me */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold">WHY CHOOSE ME</span>
              <h2 className="text-3xl md:text-4xl font-bold my-4">An Event Partner, Not Just a Service Provider</h2>
              <p className="text-lg text-gray-600 mb-6">
                I don't just show up and perform—I collaborate closely with event organisers to
                ensure every aspect of your event aligns with your goals and resonates with your audience.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Inclusive Approach</h3>
                    <p className="text-gray-600">Creating events where everyone feels seen, heard and valued.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Media Professional</h3>
                    <p className="text-gray-600">15+ years of media experience brings a polished, professional edge to your events.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Adaptable & Prepared</h3>
                    <p className="text-gray-600">Ready to pivot when needed while maintaining a calm, professional presence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Placeholder for image */}
              <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
                <Image
                  src="/images/Bright Smart Pics/Services/Joyce-Watts-laughing-with-computer-768x512.webp"
                  alt="Joyce speaking at an event"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-accent/30 rounded-full blur-md"></div>
              <div className="absolute -top-5 -right-5 w-32 h-32 border-4 border-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to create an exceptional event?</h2>
            <p className="text-lg mb-8">
              Let's discuss how I can help make your next gathering truly memorable.
            </p>

            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-pink-600 transition-colors">
              Request Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
