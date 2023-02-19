import { HomePage } from "../pages/home/HomePage";
import { Proyectos } from "../pages/proyects/Proyects";
import { Convocatorias } from "../pages/convocatories/Convocatories";
import { createBrowserRouter } from "react-router-dom";
import { Conocenos } from "../pages/knowUs/KnowUs";
import { Contactanos } from "../pages/callUs/CallUs";
import Navbar from "../components/navbar/Navbar";
import { Blog } from "../pages/blog/Blog";
import { Donar } from "../pages/donate/Donate";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index:true, // es lo mismo que decir path: "/",
        element: <HomePage />,
      },
      {
        path: "/Proyectos",
        element: <Proyectos />,
      },
      {
        path: "/Convocatorias",
        element: <Convocatorias />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Conocenos",
        element: <Conocenos />,
      },
      {
        path: "/Contactanos",
        element: <Contactanos />,
      },
      {
        path: "/Donar",
        element: <Donar />,
      },
    ],
  },
]);
