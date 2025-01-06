import './Prueba2.css'
import Slider from "../components/Slider";

const Prueba2 = () => {
    return (
        <div className="container">
          <div className="imagenes">
            <Imagenes />
          </div>
          </div>
    )
}

const Imagenes = () => (
    <div>
      <Slider />
    </div>
  );

export default Prueba2;