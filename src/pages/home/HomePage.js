import Navbar from "../../components/navbar/Navbar";
import React, { memo } from "react";
import CardComponent from "../../components/cardComponent/CardComponent";
import Footer from "../../components/footer/Footer";

export const HomePage = memo(() => {
  return (
    <>
      <Navbar />
      <CardComponent />         
      <Footer/>
    </>
  );
});
