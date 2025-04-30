import './styles/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Bright Smart - Digital Marketing Specialist',
  description: 'Helping businesses attract the right clients and get more sales with SEO, email marketing, and social media strategies.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
