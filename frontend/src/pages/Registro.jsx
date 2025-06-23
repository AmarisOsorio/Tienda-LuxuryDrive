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
        credentials: 'include',
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="w-full max-w-4xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-white text-sm font-light tracking-[0.3em] uppercase mb-2">
            LUXURY DRIVE
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl font-light text-center mb-8">Crear Cuenta</h2>

        {/* Form Container */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
          <div className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">
                Dirección *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300 resize-none"
                required
              />
            </div>

            {/* Row 2: Phone and DUI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  DUI *
                </label>
                <input
                  type="text"
                  name="dui"
                  value={formData.dui}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Row 3: Driver's License and Monthly Income */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Licencia de Conducir
                </label>
                <input
                  type="text"
                  name="driversLicense"
                  value={formData.driversLicense}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Ingreso Mensual ($) *
                </label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Row 4: Passwords */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Contraseña *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Confirmar Contraseña *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 mt-8"
            >
              Crear Cuenta
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <p className="text-white/70 text-sm">
              ¿Ya tienes cuenta?{' '}
              <a href="/login" className="text-white hover:text-white/80 font-medium underline">
                Iniciar Sesión
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Verification Modal */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-light transition-colors duration-200"
            >
              ×
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Verificar Email</h3>
            </div>

            {/* Verification Info */}
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-2">
                Hemos enviado un código de verificación a:
              </p>
              <p className="font-semibold text-gray-800 mb-4">{formData.email}</p>
              <p className="text-sm text-gray-500">
                Ingresa el código de 6 caracteres para activar tu cuenta.
              </p>
            </div>

            {/* Verification Form */}
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Código de Verificación
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-lg font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  placeholder="000000"
                  required
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleVerify}
                  className="flex-1 py-3 px-4 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                >
                  Verificar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;