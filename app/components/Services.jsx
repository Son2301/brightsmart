import Link from 'next/link';
import { FiSearch, FiMail, FiUsers } from 'react-icons/fi';

// Creating a custom service section with modern design
function ServiceCard({ icon: Icon, title, subtitle, description, ctaText, ctaLink, isEven }) {
  return (
    <div className={`group relative p-8 md:p-10 rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 ${isEven ? 'bg-gray-100' : 'bg-gray-700 text-white'}`}>
      {/* Accent corner */}
      <div className={`absolute -top-2 -right-2 w-16 h-16 ${isEven ? 'bg-accent/20' : 'bg-accent/30'} rounded-full blur-md opacity-80 transition-all duration-500 group-hover:opacity-100`}></div>

      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${isEven ? 'bg-white text-primary' : 'bg-primary/20 text-white'} shadow-md`}>
          <Icon className="w-6 h-6" />
        </div>

        <h3 className={`text-xs uppercase tracking-wider mb-3 font-semibold ${isEven ? 'text-primary' : 'text-accent'}`}>
          {subtitle}
        </h3>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>

        <p className={`mb-8 ${isEven ? 'text-gray-600' : 'text-gray-300'}`}>
          {description}
        </p>

        <Link
          href={ctaLink}
          className={`group inline-flex items-center font-semibold ${isEven ? 'text-primary' : 'text-accent'} hover:opacity-90 transition-all`}
        >
          <span>{ctaText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute -bottom-36 -right-36 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Expert digital marketing solutions tailored to help your business grow and succeed in today's competitive landscape.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={FiSearch}
            title="Search Engine Optimisation"
            subtitle="GET FOUND ON GOOGLE"
            description="Make sure the people who are looking for your products & services can find you on Google."
            ctaText="Let's get started"
            ctaLink="/services/seo"
            isEven={false}
          />

          <ServiceCard
            icon={FiMail}
            title="Email Marketing"
            subtitle="CONNECT WITH YOUR IDEAL CUSTOMERS"
            description="Attract, nurture and retain loyal and engaged customers - who will buy from you again and again."
            ctaText="Let me help"
            ctaLink="/services/email"
            isEven={true}
          />

          <ServiceCard
            icon={FiUsers}
            title="Social Media"
            subtitle="BUILD A COMMUNITY"
            description="Build social proof, positive word-of-mouth referrals and a community of engaged followers to drive sales."
            ctaText="Let's talk"
            ctaLink="/services/social"
            isEven={false}
          />
        </div>
      </div>
    </section>
  );
} 