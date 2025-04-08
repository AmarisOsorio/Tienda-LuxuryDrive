import React from "react";
import "./SobreNosotros.css";
 // Asegúrate de que la ruta sea correcta

const SobreNosotros = () => { 
    return (
        <div className="sobre-nosotros">
            <div className="header-Carrito">
                <h1>Donde la aventura inició, el futuro próspero</h1>
            </div>
            <div className="container1">
                <div className="historia">
                    <h2>Historia de la empresa</h2>
                    <p>
                        Luxury Drive nace de la idea de un coleccionista que su pasión por los autos vino de muy niño, evolucionando a una pasión inabordable por automóviles de lujo.
                        Empezó armando pequeños karts los cuales destacaban su diseño, luego a mejorar sistemas de autos clásicos, pero su inquietud por los carros modernos fue lo que lo llevó a tener la idea Luxury Drive, ofrecer a gente igual de apasionada por los autos con elegancia y lujos lo llevó a desarrollar esta gran empresa que espera seguir funcionando por mucho más tiempo.
                    </p>
                </div>
                <div className="fundador">
                    <h3>Eiden Sorni</h3>
                    <p>Fundador</p>
                    <img 
                        src="https://i.pinimg.com/736x/75/a8/1c/75a81c452ee169e56052c75722143944.jpg" 
                        alt="Eiden Sorni" 
                        className="FundadorIMG" 
                    />
                </div>
            </div>
            <div className="mision-vision">
                <div className="mision">
                    <h2>Misión</h2>
                    <p>
                        Reformar lo común para que el cliente obtenga la mejor experiencia en la compra de automóviles.
                    </p>
                </div>
                <div className="vision">
                    <h2>Visión</h2>
                    <p>
                        Ser la agencia líder de automóviles de lujo en la región, donde cada cliente sienta que es el único.
                    </p>
                </div>
            </div>

            <h1>valores</h1>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/736x/75/a8/1c/75a81c452ee169e56052c75722143944.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/75/a8/1c/75a81c452ee169e56052c75722143944.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/736x/75/a8/1c/75a81c452ee169e56052c75722143944.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default SobreNosotros;