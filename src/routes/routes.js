import { createBrowserRouter } from "react-router-dom";
import {
  Blog,
  ContactUs,
  Convocatories,
  Donate,
  Home,
  KnowUs,
  Projects,
} from "../pages";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // es lo mismo que decir path: "/",
        element: <Home />,
      },
      {
        path: "/Proyectos",
        element: <Projects />,
      },
      {
        path: "/Convocatorias",
        element: <Convocatories />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Conocenos",
        element: <KnowUs />,
      },
      {
        path: "/Contactanos",
        element: <ContactUs />,
      },
      {
        path: "/Donar",
        element: <Donate />,
      },
    ],
  },
]);
