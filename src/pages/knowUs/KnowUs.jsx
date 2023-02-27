import { MisionVision } from "../../components";
import "./styles.css";
import Image_Mision from "../../assets/images/image-Mision.jpg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
const data = [
  {
    title: "Misión",
    image: Image_Mision,
    text: " Ser una organización comprometida a generar desarrollo y bienestar mediante proyectos y la concientización del cuidado del ambiente.",
  },
  {
    title: "Visión",
    image: Image_Mision,
    text: "Contribuir de manera significativa al desarrollo sostenible de nuestro entorno y cumplir con nuestros objetivos trazados cada año.",
  },
];
export const KnowUs = () => {
  return (
    <>
      <div className="page-conocenos">
        <section className="section-quienesSomos">
          <Box className="container-content">
            <Typography variant="h3" color="" className="title-conocenos">
              ¿Quienes somos?
            </Typography>
            <Typography variant="body1" color="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              adipisci repellendus aspernatur velit quis excepturi natus rem
              quisquam dolorum minima optio numquam illum ipsa iure nostrum
              voluptatum esse assumenda quae.
            </Typography>
          </Box>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-iQdMvfw1jk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </section>
        <section className="section-misionVision">
          {data.map((item) => (
            <MisionVision
              title={item.title}
              text={item.text}
              key={item.title}
            />
          ))}
        </section>
      </div>
    </>
  );
};
