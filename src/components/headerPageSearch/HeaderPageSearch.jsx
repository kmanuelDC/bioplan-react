import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";

const HeaderPageSearch = () => {
  return (
    <>
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
    </>
  );
};

export default HeaderPageSearch;
