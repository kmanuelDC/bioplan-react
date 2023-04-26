import { Input } from "../../components";
import "./login.css";
import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link as RouterLink } from "react-router-dom";


const data = [
  { label: "Nombre de usuario", type: "text", icon: <DescriptionIcon/> },
  { label: "Contraseña", type: "password", icon: <VisibilityOffIcon/> },
];
const Login = () => {
  return (
    <>
      <Box className="page-Login">
        <Box className="section-form_login">
          <form action="" method="post" className="form_login">
            <Typography variant="h1" color="initial" className="title-iniciarSesion">
              Iniciar Sesion
            </Typography>
            <AccountCircleIcon/>
            {data.map((item, i) => (
              <Input
                label={item.label}
                type={item.type}
                icon={item.icon}
                key={i}
              />
            ))}
            <Button
              className="button_login"
              type="submit"
              variant="contained"
              size="large"
              component={RouterLink}
              to="/Administracion"
            >
              INICIAR SESION
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Login;
