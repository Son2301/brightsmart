import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Bright Smart - Digital Marketing Specialist',
  description: 'Helping businesses attract the right clients and get more sales with SEO, email marketing, and social media strategies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* MailerLite Universal */}
        <Script id="mailerLite-universal" strategy="beforeInteractive">
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '1498075');
          `}
        </Script>
        {/* End MailerLite Universal */}
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
