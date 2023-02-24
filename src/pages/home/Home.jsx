import React, { memo } from "react";
import { CardContainer, Carousel } from "../../components";
import Footer from "../../components/footer/Footer";

export const Home = memo(() => {
  return (
    <>
      <Carousel />
      <CardContainer />
      <Footer/>
    </>
  );
});
