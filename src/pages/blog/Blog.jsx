import { ComponentBlog } from "../../components/componentBlog";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Divider, Typography } from "@mui/material";
import "./blog.css";

export const Blog = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" className="container-blog">
        <Box
          maxWidth="85%"
          display="flex"
          justifyContent="center"
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
            <ComponentBlog />
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};
