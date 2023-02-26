import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import "./componentBlog.css";

const ComponentBlog = ({ titulo, parrafo, fecha, nombre }) => {
  return (
    <>
      <Link
        className="Component-Blog"
        underline="none"
        component={Box}
        color=""
        maxWidth="900px"
      >
        <Typography variant="h6" color="#0791e6">
          {titulo}
        </Typography>
        <Typography
          variant="subtitle2"
          color="initial"
          sx={{ marginTop: "10px" }}
        >
          {parrafo}
        </Typography>
        <Box className="Component-Blog-NF">
          <Typography
            variant="subtitle2"
            color="initial"
            className="Component-Blog-N"
          >
            {nombre}
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            className="Component-Blog-F"
          >
            {fecha}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default ComponentBlog;
