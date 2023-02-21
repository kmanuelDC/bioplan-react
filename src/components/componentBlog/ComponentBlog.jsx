import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ComponentBlog = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <h2>Noticias</h2>
          <Box
            display="flex"
            alignContent="center"
            alignItems="center"
            width="300px"
          >
            <Input fullWidth placeholder="Buscar" />
            <Button>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
        <Box component={Button}>
          <h4>Nuevo texto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            earum provident aut architecto commodi cum fuga. Quasi pariatur
            obcaecati accusantium sed, deserunt incidunt, laudantium asperiores
            voluptates blanditiis nobis dolores excepturi!
          </p>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <h5>nombre</h5>
              <p>fecha</p>
            </Box>
            <Box>
              <Button size="small">
                <Link sx={{ display: "flex", alignItems: "center" }}>
                  <p>Leer mas</p>
                  <ArrowForwardIosIcon
                    fontSize="small"
                    sx={{ width: "15px" }}
                  />
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ComponentBlog;
