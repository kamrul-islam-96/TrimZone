function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gray-800 bg-opacity-90 p-4 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-500">TrimZone</h1>
           <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-amber-500 transition">Home</a></li>
            <li><a href="#services" className="hover:text-amber-500 transition">Services</a></li>
            <li><a href="#gallery" className="hover:text-amber-500 transition">Gallery</a></li>
            <li><a href="#book" className="hover:text-amber-500 transition">Book Now</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;