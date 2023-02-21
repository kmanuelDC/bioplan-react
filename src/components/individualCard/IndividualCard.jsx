import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RioSanLucas from "../../assets/images/Image-sanLucas.jpg";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

const MyCard = styled(Card)({
  color: "var(--white-color)",
  borderRadius: "15px",
});

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--orange-color)",
          padding: "10px",
          position: "relative",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "end",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "var(--white-color)",
        },
      },
    },
  },
});

const IndividualCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyCard sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Rio San Lucas"
          height="200"
          image={RioSanLucas}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Titulo
          </Typography>
          <Typography variant="body2">
            Dia mundial de la accion frente al calentamiento terrestre
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Leer mas</Button>
        </CardActions>
      </MyCard>
    </ThemeProvider>
  );
};
export default IndividualCard;
