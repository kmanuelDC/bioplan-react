import { Box, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./buttonAction.css";

const ButtonAction = () => {
  return (
    <>
      <Box className="container-actions">
        <Button className="button-edit">
          <EditIcon />
        </Button>
        <Button className="button-delete">
          <DeleteIcon />
        </Button>
      </Box>
    </>
  );
};
export default ButtonAction;
