import React, { useState } from "react";

const Login = ({ setSignUp }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(""); // Estado para el mensaje de error

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página

        // Simular validación de contraseña
        const correctPassword = "123456"; // Contraseña correcta para esta simulación
        if (password !== correctPassword) {
            setError("Contraseña incorrecta");
        } else {
            setError(""); // Limpia el error si la contraseña es correcta
            console.log("Email:", email, "Password:", password);
        }
    };

    return (
        <div className="loginYSignUp-container">
        <h2 className="titulo-login-signUp">INICIAR SESIÓN</h2>
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
            <div className="error-message-container">
                    <p className="error-message">{error}</p>
            </div>
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
        

        <div className="signUp-container">
            <p className="nuevo-usuario-text">¿Nuevo usuario?</p>
            <a className="registrarse-link" onClick={() => setSignUp(true)}>
                Registrarse
            </a>
        </div>
        </div>
    );
};

export default Login;