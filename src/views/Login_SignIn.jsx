import React, { useState, useEffect } from "react";
import "./Login_SignIn.css";
import Slider from "../components/Slider";

//{condicion ? si_valor_true : si_valor_false}
const Login_SignIn = () => {
  const [signIn, setSignIn] = useState(true); // false: muestra Login, true: muestra SignIn

  return (
    <div className="container">
      {/* 
      <div className="imagenes">
        <Imagenes />
      </div>
      */}

        
    <div className="form-wrapper">
        {/* Si 'signIn' es verdadero, SignIn estará en el lado izquierdo */}
        <div className={`form-container ${signIn ? "sign-in-left" : "sign-in-right"}`}>
          <SignIn setSignIn={setSignIn} />
        </div>

        {/* Si 'signIn' es falso, Login estará en el lado derecho */}
        <div className={`form-container ${!signIn ? "login-left" : "login-right"}`}>
          <Login setSignIn={setSignIn} />
        </div>
      </div>
      

      {/*
      <div className="form-container">
        {signIn ? (
          <SignIn setSignIn={setSignIn} />
        ) : (
          <Login setSignIn={setSignIn} />
        )}
      </div>
      */}
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
      <Slider />
    </div>
);

export default Login_SignIn;
