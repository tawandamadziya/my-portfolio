import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-transparent backdrop-blur-md z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-orange-500 text-xl font-bold">T.M</h1>

        <nav>
          <ul className="flex space-x-6 text-white font-medium">
            <li><Link href="#service" className="hover:text-orange-500">Service</Link></li>
            <li><Link href="#about" className="hover:text-orange-500">About Me</Link></li>
            <li><Link href="#portfolio" className="hover:text-orange-500">Portfolio</Link></li>
            <li><Link href="#blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link href="#contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
