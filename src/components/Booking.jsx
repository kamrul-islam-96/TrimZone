import React from 'react';

function Booking() {
    return (
      <section id="book" className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-500">Book Your Appointment</h2>
          <p className="text-lg mb-6 text-white">Ready for a fresh cut? Schedule your visit with our expert barbers.</p>
          <a href="https://www.vagaro.com" target="_blank" className="bg-amber-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition">Book Now</a>
        </div>
      </section>
    );
}

export default Booking;
