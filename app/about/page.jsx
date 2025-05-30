import Image from 'next/image';
import Link from 'next/link';
import { FiUser, FiHeart, FiMessageCircle, FiCheckCircle, FiBriefcase } from 'react-icons/fi';

export default function About() {
  // Values with icons
  const values = [
    {
      id: 1,
      name: 'Inclusivity',
      icon: <FiHeart className="w-7 h-7" />,
      description: 'Creating spaces where everyone feels welcomed and represented'
    },
    {
      id: 2,
      name: 'Empathy',
      icon: <FiUser className="w-7 h-7" />,
      description: 'Understanding audience needs and reading the energy of the room'
    },
    {
      id: 3,
      name: 'Clarity',
      icon: <FiMessageCircle className="w-7 h-7" />,
      description: 'Communicating complex ideas with precision and accessibility'
    },
    {
      id: 4,
      name: 'Highly Organised',
      icon: <FiCheckCircle className="w-7 h-7" />,
      description: 'Meticulous planning ensuring smooth event execution'
    },
    {
      id: 5,
      name: 'Professionalism',
      icon: <FiBriefcase className="w-7 h-7" />,
      description: 'Bringing media-trained excellence to every engagement'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "Joyce brought a unique energy to our conference that transformed what could have been just another corporate event into something truly memorable.",
      author: "Sarah Johnson",
      position: "Events Director, Melbourne Writers Festival"
    },
    {
      id: 2,
      quote: "Her ability to connect with our diverse audience while maintaining the professionalism we needed was remarkable. Joyce is our go-to MC for all major events.",
      author: "Michael Chen",
      position: "Program Manager, Merri-bek City Council"
    },
    {
      id: 3,
      quote: "Working with Joyce made our planning process so much easier. Her experience and calm demeanour helped us navigate unexpected challenges with grace.",
      author: "Emma Rodriguez",
      position: "Creative Director, Open House Melbourne"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section with Signature Quote */}
      <section className="relative py-24 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              I make events feel like conversations, not a schedule of death-by-PowerPoint presentations.
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto my-8"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for professional headshot */}
              <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px]">
                <Image
                  src="/images/Bright Smart Pics/About/brightsmart-founder-joyce-watts.webp"
                  alt="Joyce - Professional Speaker and MC"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>

            <div>
              <span className="text-primary font-semibold">ABOUT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-2">
                I'm Joyce, a speaker and MC who brings warmth, calm and a media insider's savvy to every stage.
              </h2>

              <p className="text-lg mb-6">
                As a woman of colour and founder of one of Australia's most-read family media brands, I know how to connect with diverse audiences—and help events truly shine.
              </p>

              <p className="text-lg mb-6">
                In a white-male dominated space, I bring a fresh perspective as a woman, migrant and person of colour owning a media company. This unique lens allows me to create inclusive experiences that resonate with everyone in the room.
              </p>

              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Schedule Your Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold">MY JOURNEY</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">From Media to MC</h2>
            <p className="text-lg text-gray-600">
              My career path has equipped me with the perfect skill set to elevate your events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline items */}
            <div className="relative border-l-2 border-primary pl-8 pb-8 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <div className="mb-12">
                <span className="text-sm text-gray-500">Early Career</span>
                <h3 className="text-xl font-bold mb-2">Media Foundations</h3>
                <p className="text-gray-600">
                  Built a solid foundation in journalism and media production, developing keen instincts for storytelling and audience engagement.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-primary pl-8 pb-8 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <div className="mb-12">
                <span className="text-sm text-gray-500">Career Milestone</span>
                <h3 className="text-xl font-bold mb-2">Founding a Media Brand</h3>
                <p className="text-gray-600">
                  Launched one of Australia's most successful family-focused media platforms, learning to connect with diverse audiences and build community.
                </p>
              </div>
            </div>

            <div className="relative border-l-2 border-primary pl-8 pb-8 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <div className="mb-12">
                <span className="text-sm text-gray-500">Transition</span>
                <h3 className="text-xl font-bold mb-2">Discovering the Stage</h3>
                <p className="text-gray-600">
                  First experiences as an MC revealed my natural talent for facilitating engaging conversations and creating memorable moments for audiences.
                </p>
              </div>
            </div>

            <div className="relative pl-8 ml-4">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px]"></div>
              <div>
                <span className="text-sm text-gray-500">Present</span>
                <h3 className="text-xl font-bold mb-2">Professional MC & Speaker</h3>
                <p className="text-gray-600">
                  Now dedicated to helping events shine through professional MC services, speaking engagements and workshop facilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold">MY VALUES</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">What I Bring to Every Event</h2>
            <p className="text-lg text-gray-600">
              These core principles guide my approach to making your event exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value) => (
              <div key={value.id} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row with centered items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-2xl md:mx-auto mt-8">
            {values.slice(3).map((value) => (
              <div key={value.id} className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">EXPERTISE</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">Industries & Audiences</h2>
              <p className="text-lg text-gray-600">
                I specialize in bringing my unique perspective to a variety of events and industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-3">Industries Served</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Local Government & Community Organisations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Arts & Cultural Festivals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Media & Creative Industries</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Business & Professional Conferences</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Education & Non-profit Sectors</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 border-l-4 border-primary pl-3">Event Types</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Conferences & Professional Forums</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Award Ceremonies & Galas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Panel Discussions & Interviews</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Workshops & Training Sessions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>Community Events & Festivals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold">CLIENT LOVE</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">What Event Organisers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-primary text-5xl mb-4">"</div>
                <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section with Speaker Sheet Download */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to elevate your next event?</h2>
            <p className="text-lg mb-8">
              Download my speaker one-sheet or get in touch to discuss how I can help make your event truly shine.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/downloads/joyce-speaker-onesheet.pdf" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-white text-primary border-2 border-primary rounded-md hover:bg-primary/5 transition-colors">
                Get My Speaker One-Sheet
              </Link>

              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-medium bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                Start Planning Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Action Photos Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-primary font-semibold">IN ACTION</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">See Me On Stage</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Bright Smart Pics/About/photo-1627560985113-ab67e8031f40.webp"
                alt="Joyce speaking at event"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Bright Smart Pics/About/photo-1670382417551-d2f1ee29aea4.webp"
                alt="Joyce speaking at event"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Bright Smart Pics/About/photo-1686397140330-40f4c9919b58.webp"
                alt="Joyce speaking at event"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Bright Smart Pics/About/photo-1710360683896-e0506fb3579a.webp"
                alt="Joyce speaking at event"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
