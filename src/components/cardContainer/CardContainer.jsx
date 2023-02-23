import { IndividualCard } from "../individualCard";
import "./cardContainer.css";
const CardContainer = () => {
  return (
    <section className="section-cards">
      <div className="card-container">
        <IndividualCard descripcion="" fecha="" className="CardPrimary" />
        <IndividualCard descripcion="" fecha="" className="CardPrimary" />
        <IndividualCard descripcion="" fecha="" className="CardPrimary" />
      </div>
    </section>
  );
};

export default CardContainer;
