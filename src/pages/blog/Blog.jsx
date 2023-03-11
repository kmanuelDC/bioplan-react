import { ComponentBlog } from "../../components/componentBlog";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Divider, Typography } from "@mui/material";
import "./blog.css";

export const Blog = () => {
  const titulo = "Titulo";
  const parrafo = "parrafo";
  const nombre = "nombre";
  const fecha = "01/02/2023";
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
            <ComponentBlog
              titulo={titulo}
              parrafo={parrafo}
              nombre={nombre}
              fecha={fecha}
            />
            <Divider variant="fullWidth" orientation="vertical" />
          </Box>
        </Box>
      </Box>
    </>
  );
};
