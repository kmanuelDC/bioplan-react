import BoxForm from "../../components/BoxForm/BoxForm";
import "./styles.css";

export const ContactUs = () => {
  return (
    <>
      <div className="page-contactUs">
        <section className="section-title">
          <h1>Contactanos!!</h1>
        </section>
        <section className="section-formulario">
          <BoxForm />
        </section>
      </div>
    </>
  );
};
