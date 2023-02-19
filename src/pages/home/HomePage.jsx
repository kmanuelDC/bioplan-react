import Navbar from "../../components/navbar/Navbar";
import React, { memo } from "react";
import CardComponent from "../../components/cardComponent/CardComponent";

export const HomePage = memo(() => {
  return (
    <>
      <Navbar />
      <div>
        <CardComponent />
      </div>
      <div>
        <div>HOLA MUNDOoo</div>
        <p>lorem</p>
      </div>
    </>
  );
});
