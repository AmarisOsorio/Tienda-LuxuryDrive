import React from 'react';
import './Login.css'; // Asegúrate de crear este archivo CSS


const Login = () => {
  return (
    <div id="bodyLogin">
    <div className="login-container">
      <div className="logo">
        <img src="../../public/img/Group 59.png" alt="Logo" />
      </div>
      <h2>Log In</h2>
      <form id='formLogin'>
        <div className="input-group-login">
          <label htmlFor="username">Usuario</label>
          <input type="text" placeholder='Usuario' className='input-login'/>
        </div>
        <div className="input-group-login">
          <label htmlFor="password">Contraseña</label>
          <input type="password" placeholder='Contraseña' className='input-login'/>
        </div>
        <div className="forgot-password">
          <p>¿Olvidaste la contraseña? </p> 
          <a href="/RecuperacionContraseña">Recuperar contraseña</a>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;