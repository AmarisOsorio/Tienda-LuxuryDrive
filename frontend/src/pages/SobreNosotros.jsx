import React from "react";
import "./SobreNosotros.css";
import Footer from "../components/Footer";

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
                    Luxury Drive nace de la idea de un coleccionista que su pasión por los  autos vino de muy niño, evolucionando a una pasión inabordable por  automóviles de lujo. 

Empezó armando pequeños karts los cuales destacaban su diseño, luego a mejorar sistemas de autos clásicos, pero su inquietud por los carros modernos fue lo que lo llevo a tener la idea Luxury drive, ofrecer a gente igual de apasionada por los autos con elegancia y lujos lo llevo a desarrollar esta gran empresa que espera seguir funcionando por mucho más tiempo.
 
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
            <div id="carouselExample" className="carousel slide carousel-container">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="data:image/png;base64,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" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/2285/2285606.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn-icons-png.flaticon.com/512/1529/1529061.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default SobreNosotros;