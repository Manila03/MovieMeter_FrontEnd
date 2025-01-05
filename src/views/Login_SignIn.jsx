import React, { useState } from "react";
import "./Login_SignIn.css";

const Login_SignIn = () => {
  const [signIn, setSignIn] = useState(false); 

  return (
    <div className="container">
      <div className="toggle-buttons">
      </div>

      <div className={`sign-in ${!signIn ? "hidden" : ""}`}>
        <LeftComponent setSignIn={setSignIn} />
      </div>

      <div className={`login ${signIn ? "hidden" : ""}`}>
        <RightComponent setSignIn={setSignIn} />
      </div>
    </div>
  );
};

const LeftComponent = ({ setSignIn }) => (
  <div>
    <h2>Sign In</h2>
    <p>Este es el componente de Sign In.</p>
    <button onClick={() => setSignIn(false)}>Log In</button>
  </div>
);

const RightComponent = ({ setSignIn }) => (
  <div>
    <h2>Log In</h2>
    <p>Este es el componente de Log In.</p>
    <button onClick={() => setSignIn(true)}>Sign In</button>
  </div>
);

export default Login_SignIn;
