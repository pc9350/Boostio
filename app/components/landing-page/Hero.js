import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-4">Your Personal Fitness Companion</h2>
        <p className="text-xl mb-8">Achieve your fitness goals with personalized workouts, meal plans, and progress tracking</p>
        <Link href="#waitlist" className="bg-white text-indigo-700 py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-100 transition duration-300">
          Get Early Access
        </Link>
      </div>
    </section>
  );
}