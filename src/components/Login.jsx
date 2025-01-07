import React, { useState } from "react";

const Login = ({ setSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="login-container">
      <h2 className="titulo-login-signIn">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email" className="label-email">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="input-email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="label-password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="input-password"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
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
};

export default Login;
