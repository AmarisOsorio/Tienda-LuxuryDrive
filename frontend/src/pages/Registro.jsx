import './Register.css';
import { useState } from 'react';

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleShowModal  = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setVerificationCode('');
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (!verificationCode) {
      alert('Por favor, ingrese el código de verificación');
      return;
    }
    alert('¡Email verificado exitosamente!');
    closeModal();
  };

  return (
    <div className="bodyRegister">
      <div className="logo">
        <img src="/img/Group 59.png" alt="Logo" />
      </div>

      <h2>Crear Cuenta</h2>
      <form className="register-form">
        <div className="form-row">
          <div className="input-group">
            <label>Nombre Completo *</label>
            <input type="text" placeholder="Juan Pérez" required />
          </div>
          <div className="input-group">
            <label>Correo Electrónico *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="correo@ejemplo.com" required />
          </div>
        </div>

        <div className="input-group">
          <label>Dirección *</label>
          <textarea placeholder="Calle, colonia, ciudad..." required />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="2234-5678" />
          </div>
          <div className="input-group">
            <label>DUI *</label>
            <input type="text" placeholder="12345678-9" required />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Licencia de Conducir</label>
            <input type="text" placeholder="L123456789" />
          </div>
          <div className="input-group">
            <label>Ingreso Mensual ($) *</label>
            <input type="number" placeholder="500.00" required />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Contraseña *</label>
            <input type="password" required />
          </div>
          <div className="input-group">
            <label>Confirmar Contraseña *</label>
            <input type="password" required />
          </div>
        </div>

        <button type="submit" className="submit-btn" onClick={handleShowModal}>Crear Cuenta</button>
      </form>

      <div className="login-link">
        <p>¿Ya tienes cuenta? </p>
        <a href="/login">Iniciar Sesión</a>
      </div>

      {modalVisible && (
        <div className="modal-overlay active" onClick={(e) => e.target.classList.contains('modal-overlay') && closeModal()}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>&times;</button>

            <div className="modal-header">
              <div className="email-icon">📧</div>
              <h3>Verificar Email</h3>
            </div>

            <div className="verification-info">
              <p>Hemos enviado un código de verificación a:</p>
              <strong>{email}</strong>
              <p>Ingresa el código de 6 caracteres para activar tu cuenta.</p>
            </div>

            <form className="verification-form" onSubmit={handleVerify}>
              <div className="input-group">
                <label>Código de Verificación</label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.toUpperCase())}
                  maxLength={6}
                  className="verification-input"
                  required
                />
              </div>

              <div className="modal-buttons">
                <button type="button" className="modal-btn secondary" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="modal-btn primary">Verificar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
