import "./Servicios.css"


function Servicios() {
    return (
      <>
     <div>
        
        <h2>Servicios</h2>
        <h3>Aquí encontras diferentes áreas de asistencia para tu vehiculo</h3>

        
        <div className="containerCards">
            <section>
                <div className="circleImg">
                    
                    <img src="../img/image.png" alt="" />
                </div>
                <div className="card">
                    <h2>Talleres</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum illum ipsum temporibus, iure consequatur. Dignissimos aliquam rerum esse minus placeat ipsa error maiores, officiis ab iure aliquid, consequatur explicabo!</p>
                </div>
                <div className="card">
                    <h2>Agencia de Seguros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum illum ipsum temporibus, iure consequatur. Dignissimos aliquam rerum esse minus placeat ipsa error maiores, officiis ab iure aliquid, consequatur explicabo!</p>
                </div>
            </section>
            <section>
                <div className="card">
                    <h2>Asesoria Personalizada</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum illum ipsum temporibus, iure consequatur. Dignissimos aliquam rerum esse minus placeat ipsa error maiores, officiis ab iure aliquid, consequatur explicabo!</p>
                </div>
                <div className="card">
                    <h2>Planes de Financiamiento</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio laborum illum ipsum temporibus, iure consequatur. Dignissimos aliquam rerum esse minus placeat ipsa error maiores, officiis ab iure aliquid, consequatur explicabo!</p>
                </div>
            </section>
        </div>
    
     </div>

       
       
      </>
    );
  }
  
  export default Servicios;