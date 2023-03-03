import React, { memo } from "react";
import { CardContainer, Carousel } from "../../components";
import LogoSenaju from "../../assets/images/Logo-Web-SENAJU.png";
import "./home.css";
import CardMedia from "@mui/material/CardMedia";
import { Link, Typography, Box, Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

export const Home = memo(() => {
  return (
    <>
      <div className="page-home">
        <section className="section-carousel">
          <Carousel />
        </section>
        <section className="section-presentacion">
          <Link href="https://www.google.com/">
            <CardMedia
              title=""
              image={LogoSenaju}
              component="img"
              className="img-LogoSenaju"
            />
          </Link>
          <Box>
            <Typography variant="h4" color="">
              Somos BIOPLAN Proyecta!
            </Typography>
            <Typography variant="body2" color="">
              Una organización comprometida a generar desarrollo y bienestar
              mediante proyectos y la concientización del cuidado del ambiente
            </Typography>
          </Box>
          <Button>
            <PlayCircleOutlineIcon /> PRESENTACIÓN
          </Button>
        </section>
        <section className="section-cards">
          <CardContainer />
        </section>
      </div>
    </>
  );
});
