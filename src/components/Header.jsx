import './Header.css'
import Logo from '../assets/react.svg'
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    // const logged = sessionStorage.getItem('logged');
    const logged = sessionStorage;
    console.log(logged);

    return (
        <>
            <div className="encabezado-principal">
            <div className="contenedor-superior">
                <div className="contenedor-logo">
                    <img src={Logo} alt="Logo" className="logo-imagen" />
                </div>
                
                <div className="contenedor-busqueda">
                    <div className="barra-busqueda">
                        <input
                            type="text"
                            placeholder="Busquemos tu pelicula favorita!"
                            className="campo-busqueda"
                        />
                        <button className="boton-buscar">
                            <FaSearch className="icono-buscar" />
                        </button>
                    </div>
                </div>

                <div className="contenedor-usuario">
                    <button className="boton-usuario">Usuario</button>
                    <button className="boton-login">Login / Sign In</button>
                </div>
                
            </div>
            
            
        </div>
        </>
    )
}

export default Header;