// Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative w-full">
      
      <div className="w-full h-[3px] bg-[#8b5cf6] absolute top-0 left-0 z-10" />
      <div className="flex items-center justify-between bg-[#0c1621] h-14 px-8 relative z-20">
        <ul className="flex items-center space-x-8 font-semibold text-white">
          
          <li className="relative">
            <a
              href="/"
              className="text-[#a78bfa] underline underline-offset-[6px] decoration-2 decoration-[#a78bfa]"
            >
              Inicio
            </a>
          </li>
          
          <li>
            <a href="#" className="hover:text-[#a78bfa] transition">
              Catálogo
            </a>
          </li>
          <li>
            <a href="/servicios" className="hover:text-[#a78bfa] transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="/SobreNosotros" className="hover:text-[#a78bfa] transition">
              Sobre nosotros
            </a>
          </li>
          <li>
            <a href="/contactanos" className="hover:text-[#a78bfa] transition">
              Contáctanos
            </a>
          </li>
        </ul>
       
        <button className="border border-white text-white rounded-full px-6 py-1 hover:bg-white hover:text-[#0c1621] transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;