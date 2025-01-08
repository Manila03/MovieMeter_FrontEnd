import React, { useState } from "react";

const SignUp = ({ setSignUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("userName:", userName);
    };

    return (
        <div className="loginYSignUp-container">
            <h2 className="titulo-login-signUp">REGISTRARSE</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email" className="label-email">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input-email"
                        placeholder="Ingrese correo electrónico"
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
                        placeholder="Ingrese contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="userName" className="label-userName">
                        Nombre de usuario
                    </label>
                    <input
                        type="userName"
                        id="userName"
                        className="input-userName"
                        placeholder="Ingrese nombre de usuario"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="boton-registrarse">
                    Registrarse
                </button>
            </form>
            
            
            <div className="login-container">
                <p className="nuevo-usuario-text">¿Ya tienes una cuenta?</p>
                <a className="registrarse-link" onClick={() => setSignUp(false)}>
                    Iniciar sesión
                </a>
            </div>

        </div>
    );
};

export default SignUp;
