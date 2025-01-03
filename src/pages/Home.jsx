import React from "react";
import { Link } from "react-router-dom"; // Importamos Link para hacer las rutas

const Home = () => {
  return (
    <div>
      {/* Video de fondo */}
      <video className="video-background" autoPlay loop muted>
        <source src="/logo.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>

      {/* Contenido principal */}
      <div className="container">
        <img src="/logo1.png" alt="Imagen personal" className="profile-image" />
        <p className="text">
          ¡Hola! Soy{" "}
          <Link to="/about" className="text-button alex">
            <img src="/flecha.png" alt="Flecha" className="icon"/>Alex
          </Link>
          , y soy{" "}
          <Link to="/portfolio" className="text-button fullstack">
            <img src="/flecha.png" alt="Flecha" className="icon"/>desarrollador Fullstack
          </Link>{" "}

          especializado en{" "}
          <Link to="/portfolio" className="text-button frontend">
            <img src="/flecha.png" alt="Flecha" className="icon"/>Frontend
          </Link>.
        <br/>
          ¿Tienes un proyecto en mente?
          <br/>
          <Link to="/contact" className="text-button hablemos">
            ¡Hablemos!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
