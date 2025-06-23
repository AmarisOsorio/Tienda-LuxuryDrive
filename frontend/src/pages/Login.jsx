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
    <div id='bodyLogin' className="login-container"> 
      <div className="logo"> 
        <img src="/img/Group 59.png" alt="Logo" /> 
      </div> 
      <h2>Iniciar Sesión</h2> 
      <form onSubmit={handleSubmit}> 
        <div className="input-group"> 
          <label htmlFor="email">Correo Electrónico</label> 
          <input  
            type="email"  
            id="email"  
            name="email" 
            placeholder="correo@ejemplo.com"  
            value={formData.email} 
            onChange={handleChange} 
            required  
          /> 
        </div> 
        <div className="input-group"> 
          <label htmlFor="password">Contraseña</label> 
          <input  
            type="password"  
            id="password"  
            name="password" 
            placeholder="Contraseña"  
            value={formData.password} 
            onChange={handleChange} 
            required  
          /> 
        </div> 
        <div className="forgot-password"> 
          <p>¿Olvidaste la contraseña? </p>  
          <a href="/RecuperacionContraseña">Recuperar contraseña</a> 
        </div> 
        <button type="submit" disabled={loading}> 
          {loading ? 'Ingresando...' : 'Ingresar'} 
        </button> 
      </form> 
      <div className="register-link"> 
        <p>¿No tienes cuenta? </p> 
        
          <a href="/registro">Registrarse</a>
        
      </div> 
      <Toaster position="top-right" /> 
    </div> 
  ); 
}; 
 
export default Login;