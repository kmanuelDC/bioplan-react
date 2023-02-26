import React, { memo } from "react";
import { CardContainer, Carousel } from "../../components";

export const Home = memo(() => {
  return (
    <>
      <Carousel />
      <CardContainer />
    </>
  );
});
