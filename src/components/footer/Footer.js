import React from "react";
import "./styles.css";
import MapIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import Buttonbtn from "../btn/btn-ps";
import Lista from "../lista/Lista";
import PlayStore from "../../assets/icons/playstore";

const data = [
  {
    title: "Contactos",
    items: [
      { text: "Jr. Romero 189", icon: <MapIcon /> },
      { text: "+51940411041", icon: <PhoneIcon /> },
      { text: "bioplan.proyecta@gmail.com", icon: <MailIcon /> },
    ],
  },
  {
    title: "Páginas",
    items: [
      {
        text: "Nosotros",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Contáctanos",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Proyectos",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Políticas",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Donaciones",
        url: "https://www.google.com",
        class: "link-footer",
      },
    ],
  },
  {
    title: "Políticas",
    items: [
      {
        text: "Políticas de Privacidad",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Reglamento Interno",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Preguntas Frecuentes",
        url: "https://www.google.com",
        class: "link-footer",
      },
      {
        text: "Únete al voluntariado",
        url: "https://www.google.com",
        class: "link-footer",
      },
    ],
  },
];

const footer = () => {
  return (
    <footer className="footer-container">
      <ul className="footer-lista">
        {data.map((item,i) => (
          <li key={`li-${i}`}>
            <h2 key={`h2-${i}`}>{item.title}</h2>
            <Lista key={`ls-${i}`} items={item.items}></Lista>
          </li>
        ))}
        <li>
          <div className="Button-playstore">
            <h2>Nuestra App</h2>

            <Buttonbtn
              class="button-playstore"
              icon={<PlayStore />}
              url="https://www.google.com"
            >
              PLAYSTORE
            </Buttonbtn>
            <br></br>
            {/* <Linkbtn class="btn button-playstore p-3" icon={<PlayStore/>} url="https://www.google.com">PLAYSTORE</Linkbtn> */}
          </div>
          {/* <a href="">  <img src={Googleplay} alt="" className="iconApp" /></a> */}
        </li>
      </ul>
    </footer>
  );
};
export default footer;
