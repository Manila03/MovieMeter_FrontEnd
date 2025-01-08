import React, { useState } from "react";
import "./Login_SignUp.css";
import Slider from "../components/Slider";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const Login_SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false); // false: muestra Login, true: muestra SignUp

  return (
    <div className="container">
      <div className={`form-container ${isSignUp ? "sign-up-left" : "login-right"}`}>
        {isSignUp ? (
          <SignUp setSignUp={setIsSignUp} />
        ) : (
          <Login setSignUp={setIsSignUp} />
        )}
      </div>

      <div className={`imagenes ${isSignUp ? "imagenes-right" : "imagenes-left"}`}>
        <Slider />
      </div>
    </div>
  );
};

export default Login_SignUp;
