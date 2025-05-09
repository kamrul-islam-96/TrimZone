import React from 'react';

function Hero() {
    return (
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611767013028-9f95101146cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}
      >
        <div className="text-center bg-gray-900 bg-opacity-60 p-8 rounded-lg">
          <h2 className="text-5xl font-bold mb-4 text-amber-500">TrimZone Men's Salon</h2>
          <p className="text-xl mb-6">Precision fades, classic cuts, and rugged style for the modern man.</p>
          <a href="#book" className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">Book Now</a>
        </div>
      </section>
    );
}

export default Hero;
