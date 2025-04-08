import React from 'react';
import '../pages/Contactanos.css'; // Import the CSS file for styling

const ContactPage = () => {
    return (
        <div>
            <header className="header-contact">
                <div id="header-contact-text">
                    <h1>Estamos para</h1>
                    <h1>servirte</h1>
                </div>
            </header>

            
                <h2>Contáctanos</h2>
                <h3>Le atenderemos lo más pronto posible</h3>
                <section className="contact-section">
                    <form>
                        <div id ="input-group">
                            <input type="text" placeholder="Nombre" required />
                            
                            <input type="tel" placeholder="Teléfono" required />
                        </div>

                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>

            <section className="info-section">
                <div className="info-box">
                    <h3>Encuentranos</h3>
                    <p>Calle del mirador & 87 Avenida Norte, San Salvador</p>
                </div>
                <div className="info-box">
                    <h3>Email</h3>
                    <p>contacto@luxurydrive.com</p>
                </div>
                <div className="info-box">
                    <h3>Teléfono</h3>
                    <p>Call center: 2523 - 8573</p>
                    <p>Oficina central: 7264 - 2533</p>
                </div>
            </section>

            <section className="hours-section">
                <h3>Horarios de atención</h3>
                <p><strong>Sucursales:</strong> Lunes a Viernes de 9:00 am a 5:30 pm</p>
                <p><strong>Call Center & Oficina Central:</strong> Lunes a Viernes de 9:00 am a 9:30 pm</p>
                <p><strong>Sabados:</strong> 8:00 am a 12:00 pm</p>
            </section>

            <footer className="footer">
                <p>Luxury Drive</p>
                <p>Desarrolladores | Términos y Condiciones</p>
                <p>Copyright, © Nombre del módulo</p>
            </footer>
        </div>
    );
};

export default ContactPage;