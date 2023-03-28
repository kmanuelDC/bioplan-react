import { ComponentBlog } from "../../components/componentBlog";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Divider, Typography } from "@mui/material";
import "./blog.css";
import { useDispatch, useSelector } from "react-redux";
import * as noticiasActions from "../../store/actions/noticias/noticiasAction";
import { useEffect } from "react";


export const Blog = () => {
  const dispatch = useDispatch();
  const { noticiaslist } = useSelector((state) => state.noticias);

  useEffect(() => {
    dispatch(noticiasActions.getNoticias());
  }, [dispatch]);

  useEffect(() => {
    //dispatch(noticiasActions.getNoticias())
    console.log(noticiaslist);
  }, [noticiaslist]);

  return (
    <>
      <Box display="flex" justifyContent="center" className="blog">
        <Box
          width="85%"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box className="Container_component-Blog-Header">
            <Typography variant="h6">Noticias</Typography>
            <Box className="container_search">
              <Input
                fullWidth
                placeholder="Buscar"
                className="container_search-input"
              />
              <Button className="container_search-button">
                <SearchIcon className="container_search-search" />
              </Button>
            </Box>
          </Box>
          <Box className="Container_component-Blog-Main">
            {noticiaslist?.map((item,i) => (
              <ComponentBlog
                titulo={item.titulo}
                parrafo={item.noticias_detalle}
                nombre={item.autor}
                fecha={item.fecha}
                key={i}
              />
            ))}
            <Divider variant="fullWidth" orientation="vertical" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
