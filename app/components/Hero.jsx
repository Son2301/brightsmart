import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/sampleVideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container mx-auto relative z-10 h-[90vh] flex items-end pb-20">
        <div className="max-w-3xl">
          <h1 className="mb-2">
            <span className="text-4xl md:text-5xl font-bold text-primary">Joyce Watts</span>
            <span className="text-4xl md:text-5xl font-bold text-white block mt-1">Australia's leading MC</span>
          </h1>

          <p className="text-xl md:text-2xl font-light mt-6 mb-8 max-w-2xl text-white">
            Helping brilliant events feel more connected, inclusive and human – with a mic in hand and 15+ years of media experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Request a Free Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-[#c40050] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Link>

            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 font-medium text-white border-2 border-white rounded-md hover:bg-white/10 transition-colors">
              See My Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 