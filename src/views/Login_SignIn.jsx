import React, { useState, useEffect } from "react";
import "./Login_SignIn.css";
import Slider from "../components/Slider";

//{condicion ? si_valor_true : si_valor_false}
const Login_SignIn = () => {
  const [signIn, setSignIn] = useState(false); // false: muestra Login, true: muestra SignIn
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const SignIn = () => (
    <div>
      <h2>Sign In</h2>
      <p>Este es el componente de Sign In.</p>
      <button onClick={() => setSignIn(false)}>Ir a Login</button>
    </div>
  );
  
  const Login = () => (
    <div className="login-container">
      <h2 className="titulo-login-signIn">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email" className="label-email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="input-email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="label-password">Contraseña</label>
          <input
            type="password"
            id="password"
            className="input-password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="boton-iniciar">
          Iniciar sesión
        </button>
      </form>
      <button onClick={() => setSignIn(true)} className="boton-irASignIn">
        Ir a Sign In
      </button>
    </div>
  );
  
  const Imagenes = () => (
    <div>
        <Slider />
      </div>
  );

  return (
    <div className="container">
      <div
        className={`form-container ${signIn ? "sign-in-left" : "login-right"}`}
      >
        {signIn ? <SignIn /> : <Login />}
      </div>
  
      <div
        className={`imagenes ${signIn ? "imagenes-right" : "imagenes-left"}`}
      >
        <Imagenes />
      </div>
    </div>
  );
};

export default Login_SignIn;
