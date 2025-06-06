import React from 'react';

function Gallery() {
    const images = [
      "/images/customer-getting-wash-after-haircut.jpg",
      "/images/hairdresser-making-hair-path-his-client-hair.jpg",
      "/images/shot-professional-barber-work-handsome-young-man-getting-haircut-local-barbershop.jpg",
      "/images/unrecognizable-barber-washing-head-client.jpg"
    ];

    return (
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-amber-500">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Haircut ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md hover:scale-105 transition" />
            ))}
          </div>
        </div>
      </section>
    );
}

export default Gallery;