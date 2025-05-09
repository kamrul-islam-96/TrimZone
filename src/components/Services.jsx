import React from 'react';

function Services() {
    const services = [
      { name: "Classic Fade", price: "$30", desc: "Sharp, clean fade tailored to your style." },
      { name: "Beard Trim", price: "$20", desc: "Sculpted beard with straight-razor precision." },
      { name: "Hot Towel Shave", price: "$35", desc: "Old-school shave with a modern twist." },
      { name: "Buzz Cut", price: "$25", desc: "Sleek and low-maintenance, done right." },
    ];

    return (
      <section id="services" className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-500">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-amber-500 mb-2">{service.price}</p>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Services;
