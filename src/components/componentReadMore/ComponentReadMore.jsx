import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Link } from "@mui/material";

const ComponentReadMore = () => {
  return (
    <>
      <Box>
        <Button size="small">
          <Link sx={{ display: "flex", alignItems: "center" }}>
            <p>Leer mas</p>
            <ArrowForwardIosIcon fontSize="small" sx={{ width: "15px" }} />
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default ComponentReadMore;
