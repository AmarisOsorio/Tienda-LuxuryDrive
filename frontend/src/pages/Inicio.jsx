import React from "react";
import "./Inicio.css"


function Inicio() {
    return (
      <>
      <div>
             <header className="header-contact">
                <div id="header-contact-text">
                    <h1>Luxury Drive</h1>
                    <h3>“Domina la carretera con clase”</h3>
                </div>
             </header>
      </div>
      <body>
        <div class="container">
          <h2>
            Marcas populares
          </h2>

          <section>
            <div className="container-section">
              <img src="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/YHvB60xYC0jL2IPerNqKNf3EirsZ29gIkynt8uvL.jpg" alt="" />
              <div className="centered">
              <h1>BUSCA EL AUTO DE TUS SUEÑOS Y NOSOTROS NOS ENCARGAMOS DE HACERLO REALIDAD</h1>
            </div>  
            </div>
          </section>

          <h2>
            Tendencias
          </h2>
        </div>
      </body>
      </>
    );
  }
  
  export default Inicio;