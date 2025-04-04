import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Restaurant Sayqal - Authentic Uzbek Cuisine</title>
        <meta name="description" content="Restaurant Sayqal offers authentic Uzbek cuisine with halal certification. Enjoy our wide range of traditional dishes in a comfortable setting." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
      </main>

      <Footer />
    </div>
  );
} 