import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("../../assets/images/banner_principal.jpg"),
    caption: "", //caption: "Slide 1",
  },
];

const Carousel = () => <UncontrolledCarousel items={items} />;
export default Carousel;
