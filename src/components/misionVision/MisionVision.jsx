import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./misionVision.css";

const MisionVision = ({ text, title }) => {
  return (
    <>
      <Box className="container_misionVision img-Mision img-Vision">
        <Box className="container-content">
          <Typography variant="h3" color="" className="text">
            {title}
          </Typography>
          <Typography variant="body1" color="" className="text">
            {text}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default MisionVision;
