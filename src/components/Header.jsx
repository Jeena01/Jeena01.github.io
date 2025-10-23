import React, { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen,setMenuOpen]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide header after scrolling 500px (approx. after hero section)
      if (window.scrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0 backdrop-blur-md bg-white/40 shadow-sm"
          : "opacity-0 -translate-y-5 pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex items-center justify-between text-gray-800 font-medium">
        <h1 className="text-xl md:text-2xl font-bold text-pink-600">
          Silly Goose Central
        </h1>

        <nav className="hidden md:flex space-x-8">
          <a href="#projects" className="hover:text-pink-500 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-pink-500 transition">
            Experience
          </a>
          <a href="#publications" className="hover:text-pink-500 transition">
            Publications
          </a>
          <a href="#projects" className="hover:text-pink-500 transition">
            Projects
          </a>
          <a href="#certificates" className="hover:text-pink-500 transition">
            Certificates
          </a>
          
        </nav>

        {/* Optional hamburger for mobile */}
        <div className="md:hidden text-2xl text-pink-600" onClick={()=>setMenuOpen(!menuOpen)}>☰</div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md w-full px-6 py-4 flex flex-col space-y-4">
          <a
            href="#projects"
            className="hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#publications"
            className="hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Publications
          </a>
          <a
            href="#certificates"
            className="hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="hover:text-pink-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
