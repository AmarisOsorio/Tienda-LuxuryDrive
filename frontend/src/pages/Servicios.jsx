import React from "react";
import "./Servicios.css"
import ServiceCard from "../components/ServiceCard";

const servicios = [
    {
      iconName: 'image.png',    
      title: 'Talleres',
      description: 'Servicio profesional de mantenimiento y reparación.'
    },
    {
      iconName: 'image1.png',
      title: 'Agencia de seguros',
      description: 'Protege tu auto con las mejores aseguradoras.'
    },
    {
      iconName: 'image2.png',
      title: 'Asesoría Personalizada',
      description: 'Te guiamos para encontrar el vehículo ideal.'
    },
    {
      iconName: 'image3.png',
      title: 'Planes de Financiamiento',
      description: 'Opciones flexibles que se adaptan a tus necesidades.'
    }
  ];

  function Servicios() {
    return (
        
      <>

      <div id="bodyServicios">
        <div>

             <header className="header-contact9">
                <div id="header-contact-text">
                    <h1>Ofrecemos la </h1>
                    <h1>mejor atención a</h1>
                    <h1>nuestros clientes</h1>
                </div>
             </header>
        
        <h2>Servicios</h2>
        <h3>Aquí encontras diferentes áreas de asistencia para tu vehiculo</h3>

        <section className="services-section">

          
          <div className="services-grid">
            {servicios.map((servicio, index) => (
              <ServiceCard
                key={index}
                iconName={servicio.iconName}
                title={servicio.title}
                description={servicio.description}
              />
            ))}
          </div>
        </section>
     </div>

      </div>
     
     
     
      </>
    );
  }
  
  export default Servicios;