import React, { useState, useEffect } from "react";
import "./Login_SignIn.css";
import Slider from "../components/Slider";
import Login from "../components/Login";
import SignIn from "../components/SignIn";

//{condicion ? si_valor_true : si_valor_false}
const Login_SignIn = () => {
  const [signIn, setSignIn] = useState(false); // false: muestra Login, true: muestra SignIn

  return (
    <div className="container">
      <div className={`form-container ${signIn ? "sign-in-left" : "login-right"}`}>
        {signIn ? (
          <SignIn setSignIn={setSignIn} />
        ) : (
          <Login setSignIn={setSignIn}/>
        )}
      </div>
  
      <div className={`imagenes ${signIn ? "imagenes-right" : "imagenes-left"}`} >
        <Slider />
      </div>

    </div>
  );
};

export default Login_SignIn;