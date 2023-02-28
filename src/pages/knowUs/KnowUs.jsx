import { CardPhotography, MisionVision } from "../../components";
import "./styles.css";
import Image_Mision from "../../assets/images/image-Mision.jpg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Photo1 from "../../assets/photos/photo1.jpg";
const dataMisionVision = [
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

const dataCardPhotography = [
  {
    photo: Photo1,
    name: "Alex Smith",
    position: "Manager",
  },
  {
    photo: Photo1,
    name: "May Brown",
    position: "Manager",
  },
  {
    photo: Photo1,
    name: "Ann Richmond",
    position: "Manager",
  },
  {
    photo: Photo1,
    name: "Roxie Swanson",
    position: "Manager",
  },
];
export const KnowUs = () => {
  return (
    <>
      <div className="page-conocenos">
        <Box className="container-header">
          <Typography variant="h1" color="" className="title-conocenos">
            Conocénos
          </Typography>
        </Box>
        <section className="section-quienesSomos">
          <Box className="container-content">
            <Typography variant="h4" color="" className="title-quienesSomos">
              quienesSomos
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
          {dataMisionVision.map((item) => (
            <MisionVision
              title={item.title}
              text={item.text}
              key={item.title}
            />
          ))}
        </section>
        <section className="section-equipo">
          <hr />
          <Typography variant="h2" color="" className="title-equipo">
            Nuestro Equipo
          </Typography>
          <Box className="container-workers">
            {dataCardPhotography.map((item) => {
              return (
                <CardPhotography
                  photo={item.photo}
                  name={item.name}
                  position={item.position}
                  key={item.name}
                />
              );
            })}
          </Box>
        </section>
      </div>
    </>
  );
};
