import React from "react";
import "./boxFooter.css";
import MapIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import { ListaFooter } from "../listaFooter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GooglePlayIcon from "../../assets/images/playStore.png";

const dataFooter = [
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
        text: "Inicio",
        url: "/",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Proyectos",
        url: "/Proyectos",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Convocatorias",
        url: "/Convocatorias",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Blog",
        url: "/Blog",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Conócenos",
        url: "/Conocenos",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Contáctanos",
        url: "/Contactanos",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Donaciones",
        url: "/Donar",
        icon: <ArrowForwardIosIcon />,
      },
    ],
  },
  {
    title: "Políticas",
    items: [
      {
        text: "Políticas de Privacidad",
        url: "https://www.google.com",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Reglamento Interno",
        url: "https://www.google.com",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Preguntas Frecuentes",
        url: "https://www.google.com",
        icon: <ArrowForwardIosIcon />,
      },
      {
        text: "Únete al voluntariado",
        url: "https://www.google.com",
        icon: <ArrowForwardIosIcon />,
      },
    ],
  },
  {
    title: "Nuestra App",
    items: [
      {
        icon: GooglePlayIcon,
        url: "https://www.google.com",
      },
    ],
  },
];

const BoxFooter = () => {
  return (
    <>
      <Box className="footer">
        {dataFooter.map((item) => (
          <ListaFooter
            title={item.title}
            itemList={item.items}
            key={item.title}
          />
        ))}
      </Box>
    </>
  );
};
export default BoxFooter;
