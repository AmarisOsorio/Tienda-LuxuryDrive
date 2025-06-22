import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Register = () => {
  const [step, setStep] = useState(1); // 1: Registro, 2: Verificación
  const [loading, setLoading] = useState(false);
  
  // Datos del formulario de registro
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

  // Código de verificación
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.name || !formData.address || !formData.email || 
        !formData.password || !formData.dui || !formData.monthlyIncome) {
      toast.error('Por favor, complete todos los campos obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (formData.dui.length !== 10) {
      toast.error('El DUI debe tener 10 dígitos (incluyendo el guión)');
      return;
    }

    if (formData.monthlyIncome <= 0) {
      toast.error('El ingreso mensual debe ser mayor a 0');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('/api/clients/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          address: formData.address,
          email: formData.email,
          password: formData.password,
          telephone: formData.telephone,
          dui: formData.dui,
          driversLicense: formData.driversLicense,
          monthlyIncome: parseFloat(formData.monthlyIncome)
        }),
      });

      const data = await response.json();

      if (data.message.includes('successfully')) {
        toast.success('¡Registro exitoso! Revisa tu correo para el código de verificación');
        setStep(2);
      } else if (data.message.includes('already exist')) {
        toast.error('Este correo ya está registrado');
      } else {
        toast.error('Error en el registro');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  const handleVerification = async (e) => {
    e.preventDefault();

    if (!verificationCode) {
      toast.error('Por favor, ingrese el código de verificación');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('/api/clients/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Para enviar las cookies
        body: JSON.stringify({
          verificationCode: verificationCode
        }),
      });

      const data = await response.json();

      if (data.message.includes('successfully')) {
        toast.success('¡Email verificado exitosamente!');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        toast.error('Código inválido o expirado');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error de conexión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='bodyRegister' className="register-container">
      <div className="logo">
        <img src="/img/Group 59.png" alt="Logo" />
      </div>

      {step === 1 ? (
        // PASO 1: FORMULARIO DE REGISTRO
        <>
          <h2>Crear Cuenta</h2>
          <form onSubmit={handleRegister} className="register-form">
            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">Nombre Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan Pérez"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="100"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Correo Electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength="100"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="address">Dirección *</label>
              <textarea
                id="address"
                name="address"
                placeholder="Calle, colonia, ciudad..."
                value={formData.address}
                onChange={handleChange}
                maxLength="150"
                rows="2"
                required
              />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="telephone">Teléfono</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  placeholder="2234-5678"
                  value={formData.telephone}
                  onChange={handleChange}
                  maxLength="100"
                />
              </div>
              <div className="input-group">
                <label htmlFor="dui">DUI *</label>
                <input
                  type="text"
                  id="dui"
                  name="dui"
                  placeholder="12345678-9"
                  value={formData.dui}
                  onChange={handleChange}
                  maxLength="10"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="driversLicense">Licencia de Conducir</label>
                <input
                  type="text"
                  id="driversLicense"
                  name="driversLicense"
                  placeholder="L123456789"
                  value={formData.driversLicense}
                  onChange={handleChange}
                  maxLength="10"
                />
              </div>
              <div className="input-group">
                <label htmlFor="monthlyIncome">Ingreso Mensual ($) *</label>
                <input
                  type="number"
                  id="monthlyIncome"
                  name="monthlyIncome"
                  placeholder="500.00"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="password">Contraseña *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mínimo 6 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  minLength="6"
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirmar Contraseña *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Repetir contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  minLength="6"
                  required
                />
              </div>
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Registrando...' : 'Crear Cuenta'}
            </button>
          </form>
        </>
      ) : (
        // PASO 2: VERIFICACIÓN DE EMAIL
        <>
          <h2>Verificar Email</h2>
          <div className="verification-info">
            <p>Hemos enviado un código de verificación a:</p>
            <strong>{formData.email}</strong>
            <p>Ingresa el código de 6 caracteres para activar tu cuenta.</p>
          </div>
          
          <form onSubmit={handleVerification} className="verification-form">
            <div className="input-group">
              <label htmlFor="verificationCode">Código de Verificación</label>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                placeholder="abc123"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength="6"
                className="verification-input"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'Verificando...' : 'Verificar Email'}
            </button>

            <button 
              type="button" 
              onClick={() => setStep(1)} 
              className="back-btn"
            >
              Volver al Registro
            </button>
          </form>
        </>
      )}

      <div className="login-link">
        <p>¿Ya tienes cuenta? </p>
        <a href="/login">Iniciar Sesión</a>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default Register;