import { ComponentBlog } from "../../components/componentBlog";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Divider, Typography } from "@mui/material";
import "./blog.css";

export const Blog = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" width="100%">
        <Box maxWidth="md" display="flex" justifyContent="center" flexDirection="column">
          <Box className="Container_component-Blog-Header">
            <Typography variant="h6" sx={{  }}>
              Noticias
            </Typography>
            <Box
              display="flex"
              alignContent="space-between"
              alignItems="center"
              className="container_search"
            >
              <Input
                fullWidth
                placeholder="Buscar"
                className="container_search-input"
              />
              <Button>
                <SearchIcon className="container_search-search" />
              </Button>
            </Box>
          </Box>
          <ComponentBlog />
          <Divider />
        </Box>
      </Box>
    </>
  );
};
