import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Boostio</h1>
        <nav>
          <Link href="#features" className="text-white hover:text-indigo-200 ml-4">
            Features
          </Link>
          <Link href="#waitlist" className="text-white hover:text-indigo-200 ml-4">
            Join Waitlist
          </Link>
        </nav>
      </div>
    </header>
  );
}
