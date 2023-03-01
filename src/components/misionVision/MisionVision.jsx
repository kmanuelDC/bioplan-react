import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";
import "./misionVision.css";

const MisionVision = ({ title, text, img }) => {
  return (
    <>
      <Box className={`container_misionVision`}>
        <Box className={`container-content `}>
          <Typography variant="h3" color="" className="text">
            {title}
          </Typography>
          <Typography variant="body1" color="" className="text">
            {text}
          </Typography>
        </Box>
        <CardMedia
          title=""
          image={img}
          component="img"
          className="img-mision-vision"
        />
      </Box>
    </>
  );
};
export default MisionVision;
