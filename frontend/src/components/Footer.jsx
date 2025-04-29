import React from "react";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-title">Luxury Drive</div>
      
      <div className="footer-links">
        <a href="/contactanos">Contáctanos</a>
        <a href="/desarrolladores">Desarrolladores</a>
        <a href="/Terminos">Términos y Condiciones</a>
      </div>
      
      <div className="social-icons">
        <a href="#" className="social-icon">
          <Facebook size={18} />
        </a>
        <a href="#" className="social-icon">
          <Instagram size={18} />
        </a>
        <a href="#" className="social-icon">
          <Twitter size={18} />
        </a>
        <a href="#" className="social-icon">
          <Mail size={18} />
        </a>
        <a href="#" className="social-icon">
          <Youtube size={18} />
        </a>
      </div>
      
      <div className="copyright">
        Copyright, @ nombre del módulo
      </div>
    </footer>
  );
};

export default Footer;