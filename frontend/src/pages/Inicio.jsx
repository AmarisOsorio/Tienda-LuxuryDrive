import React from "react";
import "./Inicio.css"


function Inicio() {
    return (
      <div className="home">
      <div className="hero">
  <div className="hero-text">
    <h1>Luxury Drive</h1>
    <p>"Domina la carretera con clase"</p>
    <p>
      Nos especializamos en vehículos de alta gama, desde superdeportivos y sedanes ejecutivos hasta SUVs de lujo y autos eléctricos premium.
    </p>
    <button className="btn-primary">Conoce más</button>
  </div>
  <div className="hero-image">
    <img src="https://www.pngmart.com/files/22/Porsche-Taycan-PNG-Image.png" alt="Luxury Car" />
  </div>
</div>

      
      <section className="brands">
        <h2>Marcas populares</h2>
        <div className="brands-logos">
          <img src="https://1000marcas.net/wp-content/uploads/2019/12/Ferrari-Logo.png" alt="Ferrari" />
          <img src="https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-0.png" alt="Mercedes" />
          <img src="https://1000marcas.net/wp-content/uploads/2020/01/Lamborghini-Logo-1998.png" alt="Bugatti" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rolls-royce.svg/1200px-Rolls-royce.svg.png" alt="Rolls Royce" />
        </div>
      </section>

      <div className="promo-banner">
        <div className="promo-overlay">
          <div className="promo-content">
            <h3>BUSCA EL AUTO DE TUS SUEÑOS Y NOSOTROS NOS ENCARGAMOS DE HACERLO REALIDAD</h3>
             <p>Hacé un vistazo a los planes de financiamiento que ofrecemos.</p>
              <button className="btn-secondary">Planes</button>
          </div>
        </div>
      </div>

      <section className="trending">
        <h2>Tendencias</h2>
      </section>
    </div>
  );
  }
  
  export default Inicio;