import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".navbar") && !event.target.closest(".navbar-toggle")) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div >
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
                    <Link to="/about" className="navbar-item sobre-mi">
                        Sobre mí
                    </Link>
                    <Link to="/portfolio" className="navbar-item portafolio">
                        Portafolio
                    </Link>
                    <Link to="/contact" className="navbar-item contacto">
                        Contacto
                    </Link>
                </div>
            </nav>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
            {/* Contenido principal */}
            <div className="about-content">
                <h1 className="about-title">ALEXANDER BOHORQUEZ</h1>
                <h2 className="about-subtitle">DESARROLLADOR FULLSTACK</h2>
            </div>
            {/* Contenedor principal para el chat y contenido adicional */}
            <div className="about-containers">
                {/* Contenedor del chat */}
                
                <div className="chat-container">
                    <div>
                    </div>
                    {/* Contenedor para los mensajes del chat */}
                    <div className="chat-left">
                        <div className="chat-card">
                            <p className="chat-message user-message">
                                Hola Brayan, cuéntame sobre tu perfil profesional. ¿Qué te hace destacar en el mundo laboral? 🌟
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">
                                ¡Hola! 👋 Soy un apasionado desarrollador web con un enfoque especial en diseño responsivo y
                                desarrollo full-stack. 🚀 He trabajado tanto en el front-end como en el back-end, logrando una
                                integración perfecta entre ambos mundos. 🌐
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">
                                Cuento con certificaciones que respaldan mis habilidades y me permiten aportar soluciones
                                innovadoras. 🎓 Además, me considero una persona con una sólida ética de trabajo, siempre
                                comprometido con la mejora continua. 💪 Mi objetivo es contribuir al éxito de cada proyecto en
                                el que participo, ofreciendo no solo habilidades técnicas, sino también una mentalidad
                                proactiva y orientada a resultados. 💡✨ 🌐
                            </p>
                        </div>
                    </div>

                    <div className="chat-left">
                        <div className="chat-card">
                            <p className="chat-message user-message">
                                ¡Cuéntame sobre tu experiencia profesional! ¿Qué has hecho recientemente? 🧐🌟
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">
                                Claro, te cuento con gusto. 😄 Durante mi tiempo en Grupo Cubo (2024), desempeñé el rol de
                                Desarrollador y Analista, donde desarrollé habilidades técnicas y de gestión que me hacen
                                destacar✨ 🌐
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">💻 Tecnologías: React, Node.js, WordPress, JavaScript, Figma y Canva fueron mis herramientas principales.</p>
                        </div>
                    </div>
                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">
                                🎨 Diseño y UX/UI: Creé interfaces de usuario intuitivas y atractivas, enfocándome en brindar
                                una excelente experiencia al usuario. También diseñé maquetas y prototipos con Figma y edité
                                contenido visual para proyectos de marketing.
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">🛠️ Soporte técnico: Solucioné problemas de software y aplicaciones, asegurando una experiencia fluida para los usuarios.</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">🧪 Calidad de software: Ejecuté pruebas para garantizar productos sin errores y con alta calidad.</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">📅 Gestión de proyectos: Coordiné el desarrollo de software, asegurándome de cumplir plazos y especificaciones técnicas.</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">🤝 Liderazgo de equipos: Organicé tareas, roles y horarios para mantener una dinámica eficiente y enfocada en los objetivos.</p>
                        </div>
                    </div>

                    <div className="chat-left">
                        <div className="chat-card">
                            <p className="chat-message user-message">
                                ¡Wow, suena increíble! 😲 Me encantaría saber más sobre tus proyectos. ¿Qué tipo de cosas has
                                desarrollado? 🚀
                            </p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">¡Gracias! 😊 Te cuento un poco sobre mis proyectos personales:</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">💡 Interfaces Interactivas: He trabajado en el desarrollo de interfaces utilizando HTML, CSS y JavaScript, creando experiencias dinámicas y atractivas.</p>
                        </div>
                    </div>
                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">⚛️ React Frontend: También tengo experiencia en proyectos donde empleé React, aprovechando su potencia para crear aplicaciones modernas y escalables.</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">🌟 Tendencias Actuales: Siempre estoy explorando nuevas tendencias en diseño y desarrollo para mantenerme actualizado y aportar ideas frescas.</p>
                        </div>
                    </div>

                    <div className="chat-right">
                        <div className="chat-card">
                            <p className="chat-message bot-message">Si quieres que te cuente más detalles sobre alguno en particular, ¡solo dime! 👨‍💻</p>
                        </div>
                    </div>
                </div>
                {/* Contenedor de contenido adicional */}
                <div className="additional-content">
                    <p>¡Bienvenido! Aquí encontrarás información adicional sobre mi trabajo, habilidades y trayectoria profesional. Sigue explorando para conocer más.</p>
                </div>
            </div>
        </div>
    );
};

// Asegúrate de que solo haya una exportación predeterminada
export default About;
