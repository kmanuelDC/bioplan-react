import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import "./componentBlog.css";

const ComponentBlog = () => {
  return (
    <>
      <Link
        className="Component-Blog"
        underline="none"
        component={Box}
        color=""
      >
        <Box>
          <Typography variant="h6" color="#0791e6">
            Nuevo textoooo
          </Typography>
          <Typography
            variant="subtitle2"
            color="initial"
            sx={{ marginTop: "10px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            earum provident aut architecto commodi cum fuga. Quasi pariatur
            obcaecati accusantium sed, deserunt incidunt, laudantium asperiores
            voluptates blanditiis nobis dolores excepturi!
          </Typography>
          <Box className="Component-Blog-NF">
            <Typography
              variant="subtitle2"
              color="initial"
              className="Component-Blog-N"
            >
              nombre
            </Typography>
            <Typography
              variant="body2"
              color="initial"
              className="Component-Blog-F"
            >
              fecha
            </Typography>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default ComponentBlog;
