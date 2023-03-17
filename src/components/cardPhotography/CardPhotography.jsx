import { Box, Typography, CardMedia, CardContent } from "@mui/material";
import "./cardPhotography.css";

const CardPhotography = ({ photo, name, position }) => {
  return (
    <>
      <Box className="card_worker">
        <CardMedia
          image={photo}
          component="img"
          alt={name}
          className="card_worker-photo"
        />
        <CardContent className="card_worker-content">
          <Typography variant="h5" color="initial">
            {name}
          </Typography>
          <Typography variant="body2" color="initial">
            {position}
          </Typography>
        </CardContent>
      </Box>
    </>
  );
};
export default CardPhotography;
