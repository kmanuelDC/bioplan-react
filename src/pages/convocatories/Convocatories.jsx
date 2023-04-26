import { Box, Input, Button, Typography } from "@mui/material";
import { ComponentBlog } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as convocatoriasAction from "../../store/actions/convocatorias/convocatoriasAction";
import "./convocatories.css";

export const Convocatories = () => {
  const dispatch = useDispatch();
  const { convocatoriaslist } = useSelector((state) => state.convocatorias);

  useEffect(() => {
    dispatch(convocatoriasAction.getConvocatorias());
  }, [dispatch]);

  useEffect(() => {
    console.log(convocatoriaslist);
  }, [convocatoriaslist]);
  return (
    <>
      <Box className="page-blog">
        <Box className="section-header-search">
          <Typography variant="h1" color="initial">
            Convocatorias
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
        <Box className="section-convocatorias">
          {convocatoriaslist?.map((item, i) => (
            <ComponentBlog
              titulo={item.convocatoria_nombre}
              parrafo={item.convocatoria_detalle}
              fecha={item.fecha}
              nombre={item.ciudad}
              key={item.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
