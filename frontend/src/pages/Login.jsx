import React from 'react';
import './Login.css'; // Asegúrate de crear este archivo CSS

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src="../../public/img/Group 59.png" alt="Logo" />
      </div>
      <h2>Log In</h2>
      <form>
        <div className="input-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" placeholder="Usuario" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Contraseña" required />
        </div>
        <div className="forgot-password">
          <a href="/recover">¿Olvidaste la contraseña? Recuperar contraseña</a>
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;