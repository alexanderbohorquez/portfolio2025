import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Estado para controlar si el menú está desplegado o no
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el clic en la imagen del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efecto para cerrar el menú cuando se hace clic fuera de él
  useEffect(() => {
    // Función para manejar el clic fuera del menú
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && !event.target.closest(".navbar-toggle")) {
        setIsMenuOpen(false);
      }
    };

    // Añadir el event listener al documento
    document.addEventListener("click", handleClickOutside);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Alex.
        </Link>
        {/* Imagen del botón de menú */}
        <img
          src="/menu.png" // Ruta de la imagen del botón
          alt="Menu"
          className="navbar-toggle"
          onClick={toggleMenu} // Llamada a la función para cambiar el estado
        />
        {/* Menú desplegable */}
        <div className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
          <Link to="/about" className="navbar-item sobre-mi">Sobre mí</Link>
          <Link to="/portfolio" className="navbar-item portafolio">Portafolio</Link>
          <Link to="/contact" className="navbar-item contacto">Contacto</Link>
        </div>
      </nav>

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
            <img src="/flecha.png" alt="Flecha" className="icon" />
            Alex
          </Link>
          , y soy{" "}
          <Link to="/portfolio" className="text-button fullstack">
            <img src="/flecha.png" alt="Flecha" className="icon" />
            desarrollador Fullstack
          </Link>{" "}
          especializado en{" "}
          <Link to="/portfolio" className="text-button frontend">
            <img src="/flecha.png" alt="Flecha" className="icon" />
            Frontend
          </Link>
          .
          <br />
          ¿Tienes un proyecto en mente?
          <br />
          <Link to="/contact" className="text-button hablemos">¡Hablemos!</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
