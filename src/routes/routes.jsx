import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  Blog,
  ContactUs,
  Convocatories,
  Donate,
  Home,
  KnowUs,
  Login,
  Projects,
} from "../pages";
import { Layout } from "../components";
import BackendInterfaz from "../pages/administration/Administration";
import Administration from "../pages/administration/Administration";

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
      {
        path: "/Administracion",
        element: <Administration />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
  {
    path: "/Backend",
    element: <Login />,
    // children: [
    //   {
    //     path: "/Backend/Interfaz",
    //     element: <BackendInterfaz />,
    //   },
    // ],
  },
]);
