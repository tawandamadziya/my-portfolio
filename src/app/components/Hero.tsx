import Image from 'next/image';
import Tawa1 from '../assets/Tawa1.jpg';
export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={Tawa1} alt="Background" layout="fill" objectFit="cover" className="brightness-50" />
      </div>
      
      {/* Overlay Content */}
      <div className="relative z-10">
        <p className="text-lg uppercase tracking-wide">Welcome to your best pick</p>
        <h1 className="text-5xl md:text-7xl font-extrabold">Tawanda Madziya</h1>
        <div className="mt-6 animate-bounce">
          <span className="text-3xl">⬇</span>
        </div>
      </div>
    </section>
  );
}