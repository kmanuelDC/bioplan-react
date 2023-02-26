import { MisionVision } from "../../components";
import "./styles.css";
import Image_Mision from "../../assets/images/image-Mision.jpg";

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
      <section className="conocenos">
        {data.map((item) => (
          <MisionVision
            title={item.title}
            text={item.text}
            image={item.image}
            key={item.title}
          />
        ))}
      </section>
    </>
  );
};
