import CardPrimary from "../card/Card";
import "./cardComponent.css";

export default function CardComponent() {
  return (
    <section className="section-cards">
      <div className="card-container">
        <CardPrimary descripcion="" fecha="" className="CardPrimary" />
        <CardPrimary descripcion="" fecha="" className="CardPrimary" />
        <CardPrimary descripcion="" fecha="" className="CardPrimary" />
      </div>
    </section>
  );
}
