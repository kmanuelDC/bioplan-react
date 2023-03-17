import { CardPhotography, MisionVision } from "../../components";
import "./styles.css";
import Image_Mision from "../../assets/images/image-Mision.jpg";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Photo1 from "../../assets/photos/photo1.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ColaboradorAction from '../../store/actions/colaboradorAction';
const dataMisionVision = [
  {
    title: "Misión",
    image: Image_Mision,
    text: " Ser una organización comprometida a generar desarrollo y bienestar mediante proyectos y la concientización del cuidado del ambiente.",
  },
  {
    title: "Visión",
    image: Photo1,
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
   const dispatch = useDispatch();
   const {colaboradores } = useSelector((state)=>state.colaboradores)

   useEffect(() => {
     dispatch(ColaboradorAction.getColaboradores())
   }, [dispatch])

   useEffect(() => {
    console.log(colaboradores)
  }, [colaboradores])

   

  return (
    <>
      <div className="page-conocenos">
        <section className="section-conocenos">
          <Box className="container">
            <Box className="container-content">
              <Typography
                variant="h1"
                className="title-quienesSomos"
                color="#164620"
              >
                Conocenos
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
          </Box>
        </section>
        <section className="section-misionVision">
          <Typography variant="h2" color="#164620">
            Nuestro Propósito
          </Typography>
          <Box className="container-cardsMisionVision">
            {dataMisionVision.map((item) => (
              <MisionVision
                title={item.title}
                text={item.text}
                img={item.image}
                key={item.title}
              />
            ))}
          </Box>
        </section>
        <section className="section-equipo">
          <hr />
          <Typography variant="h2" color="#164620" className="title-equipo">
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
