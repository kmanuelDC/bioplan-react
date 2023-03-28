import { Box, Input, Button, Typography } from "@mui/material";
import { ComponentBlog } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as proyectosAction from "../../store/actions/proyectos/proyectosAction";
import "./projects.css";

export const Projects = () => {
  const dispatch = useDispatch();
  const { proyectoslist } = useSelector((state) => state.proyectos);

  useEffect(() => {
    dispatch(proyectosAction.getProyectos());
  }, [dispatch]);

  useEffect(() => {
    console.log(proyectoslist);
  }, [proyectoslist]);
  return (
    <>
      <Box className="page-proyectos">
        <Box className="section-header-search">
          <Typography variant="h1" color="initial">
            Proyectos
          </Typography>
          <form>
            <Input
              type="text"
              name="buscador"
              placeholder="Escribe aquí tu búsqueda"
            />
            <Button type="submit">Buscar</Button>
          </form>
        </Box>
        <Box className="section-proyectos">
          {proyectoslist?.map((item, i) => (
            <ComponentBlog
              titulo={item.proyecto_nombre}
              fecha={item.fecha}
              key={item.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
