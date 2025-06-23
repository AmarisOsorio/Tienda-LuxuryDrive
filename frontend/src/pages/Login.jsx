import React, { useState, useContext } from 'react';
import { ClientAuthContext } from '../context/ClientAuthContext';
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
  const { login } = useContext(ClientAuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast.error('Por favor, complete todos los campos');
      return;
    }

    try {
      setLoading(true);
      const success = await login(formData.email, formData.password);
      
      if (!success) {
        setFormData(prevData => ({
          ...prevData,
          password: ''
        }));
      }
    } catch (error) {
      console.error('Error en login:', error);
      toast.error('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
           
          </div>
          <div className="text-white text-sm font-light tracking-[0.3em] uppercase">
            LUXURY DRIVE
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl font-light text-center mb-12">Log In</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Usuario"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              required
            />
          </div>
          
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all duration-300"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <p className="text-white/70 text-sm">
              ¿Olvidaste tu contraseña?{' '}
              <a href="/RecuperacionContraseña" className="text-white/90 hover:text-white underline">
                Recuperar contraseña
              </a>
            </p>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-white text-gray-900 font-medium rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>

          {/* Divider */}
          <div className="text-center text-white/60 text-sm my-8">
            ó
          </div>

          {/* Google Login */}
          <div className="text-center">
            <p className="text-white text-sm mb-4">Ingresar con Google</p>
            <div className="flex justify-center">
              <button
                type="button"
                className="w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/20"
              >
                <span className="text-white text-xl font-bold">G</span>
              </button>
            </div>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center mt-12">
          <p className="text-white/70 text-sm">
            ¿No tienes cuenta?{' '}
            <a href="/registro" className="text-white hover:text-white/80 font-medium">
              Registrarse
            </a>
          </p>
        </div>
      </div>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          },
        }}
      />
    </div>
  );
};

export default Login;