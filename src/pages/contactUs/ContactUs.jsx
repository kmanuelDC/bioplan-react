import { BoxForm } from "../../components";
import { Mapita } from "../../components";

import "./styles.css";

export const ContactUs = () => {
  return (
    <>
      
      <div className="page-contactUs">
        <section className="section-title">
          <h4 id="titulo">Contáctanos</h4>
        </section>

        <section className="siPregunta">
          <h6>Si tienes alguna pregunta por favor, contáctanos</h6>
        </section>

        <section className="section-formulario">
          <BoxForm />
        </section>

        <section className="mapitaa">
          
        </section>

      </div>

    </>
  );
};