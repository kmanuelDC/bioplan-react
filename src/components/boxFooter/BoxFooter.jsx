import React from "react";
import "./boxFooter.css";
import MapIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import { ListaFooter } from "../listaFooter";

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
      },
      {
        text: "Proyectos",
        url: "/Proyectos",
      },
      {
        text: "Convocatorias",
        url: "/Convocatorias",
      },
      {
        text: "Blog",
        url: "/Blog",
      },
      {
        text: "Conócenos",
        url: "/Conocenos",
      },
      {
        text: "Contáctanos",
        url: "/Contactanos",
      },
      {
        text: "Donaciones",
        url: "/Donar",
      },
    ],
  },
  {
    title: "Políticas",
    items: [
      {
        text: "Políticas de Privacidad",
        url: "https://www.google.com",
      },
      {
        text: "Reglamento Interno",
        url: "https://www.google.com",
      },
      {
        text: "Preguntas Frecuentes",
        url: "https://www.google.com",
      },
      {
        text: "Únete al voluntariado",
        url: "https://www.google.com",
      },
    ],
  },
  {
    title: "Nuestra App",
    items: [
      {
        text: "Políticas de Privacidad",
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
