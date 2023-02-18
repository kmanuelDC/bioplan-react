import Navbar from "../../components/navbar/Navbar";
import React, { memo } from "react";
import CardComponent from "../../components/cardComponent/CardComponent";

export const HomePage = memo(() => {
  return (
    <>
      <Navbar />
      <CardComponent />
      <div>HOLA MUNDO</div>
    </>
  );
});
