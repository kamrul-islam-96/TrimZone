import React from 'react';

function Hero() {
    return (
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{backgroundImage: "url('/images/man-cuts.jpg')"}}
      >
        <div className="text-center bg-gray-900 bg-opacity-60 p-8 rounded-lg">
          <h2 className="text-5xl font-bold mb-4 text-amber-500">TrimZone Men's Salon</h2>
          <p className="text-xl mb-6 text-white">Precision fades, classic cuts, and rugged style for the modern man.</p>
          <a href="#book" className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">Book Now</a>
        </div>
      </section>
    );
}

export default Hero;
