import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../../assets/images/banner_principal.jpg'),

  },
  {
    src: require('../../assets/images/banner_principal.jpg'),

  },
  {
    src: require('../../assets/images/banner_principal.jpg'),

  }
];

const Carrousel = () => <UncontrolledCarousel items={items} />;
export default Carrousel;