import "./Servicios.css"


function Servicios() {
    return (
      <>
     <div>

             <header className="header-contact">
                <div id="header-contact-text">
                    <h1>Ofrecemos la </h1>
                    <h1>mejor atención a</h1>
                    <h1>nuestros clientes</h1>
                </div>
             </header>
        
        <h2>Servicios</h2>
        <h3>Aquí encontras diferentes áreas de asistencia para tu vehiculo</h3>

        
        <div className="containerCards">
            <section>
                 
                <div className="card">
                   <div className="circleImg">
                    <img src="../img/image.png" alt="" />
                   </div>
                   <div className="info">
                   <h2>Talleres</h2>
                   <p>Nuestros talleres son reconocidos por la calidad y servicio a nuestro cliente, poseen personal capacitado para el manteniemiento y reparación de diferentes marcas de vehiculos.</p>
                   </div>
                </div>
                
                <div className="card">
                   <div className="circleImg">
                    <img src="../img/image(5).png" alt="" />
                   </div>
                   <div className="info">
                    <h2>Agencia de Seguros</h2>
                    <p>Con nosotros puedes estar tranquilo cuando estes de viaje, nuestro seguros estan presentes en cualquier zona del país, facilitando la atención de los clientes.                </p>
                   </div>
                </div>
            </section>
            <section>
                <div className="card">
                <div className="circleImg">
                    <img src="../img/image(4).png" alt="" />
                   </div>
                   <div className="info">
                   <h2 >Asesoria</h2>
                   <h2> Personalizada</h2>
                    <p>Personal capacitado para cualquier tipo de dudas que tu tengas a la hora de comprar un vehiculo con nosotros. Ofrecemos atención al cliente las 24 en nuestros call center</p>
                   </div>
                </div>
                <div className="card">
                <div className="circleImg">
                    <img src="../img/image(3).png" alt="" />
                   </div>
                   <div className="info">
                   <h2>Planes de Financiamiento</h2>
                   <p>Ofrecemos planes de financiamiento que se ajustan a tu bolsillo, para que puedas disfrutar tu nuevo vehiculo sin preocuparte por el costo</p>
                   </div>
                </div>
            </section>
        </div>
    
     </div>
 
      </>
    );
  }
  
  export default Servicios;