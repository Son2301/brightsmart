import Link from 'next/link';

export default function ServiceSection({ title, subtitle, description, ctaText, ctaLink, bgColor = 'bg-gray-200' }) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto text-center">
        <h3 className="text-sm uppercase tracking-wider mb-2">{subtitle}</h3>
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="max-w-2xl mx-auto mb-8">{description}</p>
        <Link 
          href={ctaLink} 
          className={`inline-block bg-accent text-black font-semibold px-6 py-3 hover:bg-yellow-400 transition-colors`}
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
} 