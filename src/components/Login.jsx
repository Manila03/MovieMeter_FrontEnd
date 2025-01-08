import React, { useState } from "react";

const Login = ({ setSignIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página
        console.log("Email:", email, "Password:", password);
    };

    return (
        <div className="loginYSignIn-container">
        <h2 className="titulo-login-signIn">INICIAR SESIÓN</h2>
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

            <div className="recordarme-container">
                <div className="recordarme-checkbox" onClick={handleCheckboxToggle}>
                    <div className={`checkbox ${isChecked ? "checked" : ""}`}>
                    {isChecked && <span className="tick">✔</span>}
                    </div>
                    <span className="recordarme-text">¿Recordarme?</span>
                </div>
                <a className="forgot-password-link">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>

            <button type="submit" className="boton-iniciar">
            Iniciar sesión
            </button>
        </form>
        

        <div className="signIn-container">
            <p className="nuevo-usuario-text">¿Nuevo usuario?</p>
            <a className="registrarse-link" onClick={() => setSignIn(true)}>
                Registrarse
            </a>
        </div>
        </div>
    );
};

export default Login;