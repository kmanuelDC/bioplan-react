import React, { memo } from "react";
import { CardContainer, Carousel } from "../../components";
import "./home.css";

export const Home = memo(() => {
  return (
    <>
      <div className="page-home">
        <section className="section-carousel">
          <Carousel />
        </section>
        <section className="section-cards">
          <CardContainer />
        </section>
      </div>
    </>
  );
});
