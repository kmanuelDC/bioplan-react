import Navbar from "../../components/navbar/Navbar";
import React, { memo } from "react";

export const HomePage = memo(() => {
  return (
    <>
      <Navbar />
      <div>HOLA MUNDO</div>
    </>
  );
});
