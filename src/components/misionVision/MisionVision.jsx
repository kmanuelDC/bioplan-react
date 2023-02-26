import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./misionVision.css";

const MisionVision = ({ text, title, image }) => {
  return (
    <>
      <Box className="container_misionVision">
        <Box
          className={`container-content ${
            title === "Mision" ? "container-img-Mision" : "container-img-Vision"
          }`}
        >
          <Typography variant="h4" color="">
            {title}
          </Typography>
          <Typography variant="body2" color="">
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default MisionVision;
