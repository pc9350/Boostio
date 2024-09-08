import Header from './components/landing-page/Header';
import Hero from './components/landing-page/Hero';
import Features from './components/landing-page/Features';
import Waitlist from './components/landing-page/Waitlist';
import Footer from './components/landing-page/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Features />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}