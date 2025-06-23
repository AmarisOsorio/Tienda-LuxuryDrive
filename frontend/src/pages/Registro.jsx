import './Register.css';
import { useState } from 'react';

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    telephone: '',
    dui: '',
    driversLicense: '',
    monthlyIncome: ''
  });

  // Cambiar los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Enviar datos al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/registerClients/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // para enviar cookie del token
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.message.includes('succesfully')) {
        setModalVisible(true);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert('Error en el registro');
    }
  };

  // Enviar código de verificación
  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:4000/api/registerClients/verifyCodeEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ verificationCode })
      });

      const data = await res.json();
      alert(data.message);

      if (data.message.includes('successfully')) {
        setModalVisible(false);
      }
    } catch (err) {
      console.error(err);
      alert('Error al verificar el código');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setVerificationCode('');
  };

  return (
    <div className="bodyRegister">
      <div className="logo">
        <img src="/img/Group 59.png" alt="Logo" />
      </div>

      <h2>Crear Cuenta</h2>

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <label>Nombre Completo *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Correo Electrónico *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="input-group">
          <label>Dirección *</label>
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Teléfono</label>
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>DUI *</label>
            <input type="text" name="dui" value={formData.dui} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Licencia de Conducir</label>
            <input type="text" name="driversLicense" value={formData.driversLicense} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Ingreso Mensual ($) *</label>
            <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label>Contraseña *</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Confirmar Contraseña *</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit" className="submit-btn">Crear Cuenta</button>
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
              <strong>{formData.email}</strong>
              <p>Ingresa el código de 6 caracteres para activar tu cuenta.</p>
            </div>

            <form className="verification-form" onSubmit={handleVerify}>
              <div className="input-group">
                <label>Código de Verificación</label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
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