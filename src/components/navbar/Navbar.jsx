import "./styles.css";
import LogoBioplan from "../../assets/images/LogoBioplanHorizontal.png";
import IconFacebook from "../../assets/icons/Facebook.png";
import IconInstagram from "../../assets/icons/Instagram.png";
import IconYoutube from "../../assets/icons/Youtube.png";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top-container">
        <div className="container-logo">
          <a href="">
            <img src={LogoBioplan} alt="" />
          </a>
        </div>
        <div className="container-icons">
          <Button
            className="buttonStyle icon"
            variant="contained"
            href="http://google.com"
            target="_blank"
          >
            DONAR
          </Button>
          <a
            href="https://www.facebook.com/Bioplan.proyecta/?locale=es_LA"
            target="_blank"
          >
            <img src={IconFacebook} alt="" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/bioplan.proyecta/?hl=es"
            target="_blank"
          >
            <img src={IconInstagram} alt="" className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCOR9tgJpFrW3HTgs9T35rBg/videos?view=0&sort=p"
            target="_blank"
          >
            <img src={IconYoutube} alt="" className="icon" />
          </a>
        </div>
      </div>
      <AppBar
        position="relative"
        color="primary"
        className="navbar-bot-container"
      >
        <Toolbar className="conatiner-button">
          <Button color="inherit">INICIO</Button>
          <Button color="inherit">PROYECTOS</Button>
          <Button color="inherit">CONVOCATORIAS</Button>
          <Button color="inherit">BLOG</Button>
          <Button color="inherit">CÓNOCENOS</Button>
          <Button color="inherit">CONTÁCTANOS</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Navbar;
