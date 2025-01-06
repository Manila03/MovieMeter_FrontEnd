import React, { useState, useEffect } from "react";
import "./Login_SignIn.css";

//{condicion ? si_valor_true : si_valor_false}
const Login_SignIn = () => {
  const [signIn, setSignIn] = useState(false); // false: muestra Login, true: muestra SignIn

  return (
    <div className="container">
      <div className="imagenes">
        <Imagenes />
      </div>
      
      <div className="form-container">
        {signIn ? (
          <SignIn setSignIn={setSignIn} />
        ) : (
          <Login setSignIn={setSignIn} />
        )}
      </div>
    </div>
  );
};

const SignIn = ({ setSignIn }) => (
  <div>
    <h2>Sign In</h2>
    <p>Este es el componente de Sign In.</p>
    <button onClick={() => setSignIn(false)}>Ir a Login</button>
  </div>
);

const Login = ({ setSignIn }) => (
  <div>
    <h2>Log In</h2>
    <p>Este es el componente de Log In.</p>
    <button onClick={() => setSignIn(true)}>Ir a Sign In</button>
  </div>
);

const Imagenes = () => (
  <div>
    <p>Imágenes aquí</p>
  </div>
);

export default Login_SignIn;
