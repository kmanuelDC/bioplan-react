import "./styles.css";
import LogoBioplan from "../../assets/images/LogoBioplanHorizontal.png";
import IconFacebook from "../../assets/icons/Recurso4@4x.png";
import IconInstagram from "../../assets/icons/Recurso 3@4x.png";
import IconYoutube from "../../assets/icons/Recurso 2@4x.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top-container">
        <div className="container-logo">
          <img src={LogoBioplan} alt="" />
        </div>
        <div className="container-icons">
          <a href="">Donar</a>
          <a
            href="https://www.facebook.com/Bioplan.proyecta/?locale=es_LA"
            target="_blank"
          >
            <img src={IconFacebook} alt="" />
          </a>
          <a
            href="https://www.instagram.com/bioplan.proyecta/?hl=es"
            target="_blank"
          >
            <img src={IconInstagram} alt="" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOR9tgJpFrW3HTgs9T35rBg/videos?view=0&sort=p"
            target="_blank"
          >
            <img src={IconYoutube} alt="" />
          </a>
        </div>
      </div>
      <nav className="navbar-bot-container">
        <ul>
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">PROYECTOS</a>
          </li>
          <li>
            <a href="">CONVOCATORIAS</a>
          </li>
          <li>
            <a href="">BLOG</a>
          </li>
          <li>
            <a href="">CÓNOCENOS</a>
          </li>
          <li>
            <a href="">CONTÁCTANOS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
