import Hero from './components/Hero';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import TrustedBy from './components/TrustedBy';
import { Suspense } from 'react';

// Loading component for better user experience
function LoadingSection() {
  return <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
  </div>;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingSection />}>
        <WhyWorkWithMe />
      </Suspense>
      <Suspense fallback={<LoadingSection />}>
        <TrustedBy />
      </Suspense>
    </>
  );
}
