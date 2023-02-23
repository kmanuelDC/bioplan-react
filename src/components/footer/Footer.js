
import HomeIcon from "@mui/icons-material/Home";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArticleIcon from "@mui/icons-material/Article";
import { useTheme } from "@emotion/react";
import React from "react";
import IconFacebook from "../../assets/icons/Facebook.png";
import IconInstagram from "../../assets/icons/Instagram.png";
import IconYoutube from "../../assets/icons/Youtube.png";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import "./styles.css";
import List from "@mui/material/List";
import Googleplay from "../../assets/images/googleplay.png";
import ButtonPlayStore from "../buttonPlaystore/buttonPS";

const itemsContactosFooter = [
    { text: "Jr. Romero 189", icon: <HomeIcon /> },
    { text: "+51940411041", icon: <WorkOutlineIcon /> },
    { text: "bioplan.proyecta@gmail.com", icon: <CampaignIcon /> },
   
  ];
  const itemsPaginasFooter = [
    { text: "Nosotros"  },
    { text: "Contáctanos" },
    { text: "Proyectos" },
    { text: "Políticas" },
    { text: "Donaciones" },
   
  ];
  const itemsPoliticasFooter = [
    { text: "Políticas de Privacidad" },
    { text: "Reglamento Interno" },
    { text: "Preguntas Frecuentes" },
    { text: "Únete al voluntariado" },
   
  ];
  const itemsNuestraAppFooter= [
    { img: "./logo192" },
 
   
  ];
const footer=()=>{
  return (
    <footer className="footer-container">
       
        <ul className="footer-lista">
            <li>
                <h2>Contactos</h2>
                <List>
              {itemsContactosFooter.map((item) => (
                <ListItem key={item.text} >
                  <ListItem>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                </ListItem>
              ))}
            </List>
        
            </li>
            <li className="lista1">
                <h2>Páginas</h2>
            <List >
              {itemsPaginasFooter.map((item) => (
                <ListItem key={item.text} >
                  <ListItem>
                    {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                    <ListItemText primary={item.text} />
                  </ListItem>
                </ListItem>
              ))}
            </List>
            </li>
            <li>
            <h2>Políticas</h2>
            <div className="center-columns">
            <List>
              {itemsPoliticasFooter.map((item) => (
                <ListItem key={item.text}>
                  <ListItem>
                    {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
                    <ListItemText primary={item.text} />
                  </ListItem>
                </ListItem>
              ))}
            </List>
            </div>
            </li>
            <li>
              <div className="Button-playstore">
                <h2>Nuestra App</h2>
                <ButtonPlayStore/>
              </div>
            {/* <a href="">  <img src={Googleplay} alt="" className="iconApp" /></a> */}

            </li>
        </ul>
    </footer>

  );  
};
export default footer;
