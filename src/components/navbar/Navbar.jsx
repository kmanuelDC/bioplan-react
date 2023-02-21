import "./styles.css";
import LogoBioplan from "../../assets/images/LogoBioplanHorizontal.png";
import IconFacebook from "../../assets/icons/Facebook.png";
import IconInstagram from "../../assets/icons/Instagram.png";
import IconYoutube from "../../assets/icons/Youtube.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import InboxIcon from "@mui/icons-material/Inbox";
import CampaignIcon from "@mui/icons-material/Campaign";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

const itemsTopNavbar = [
  { text: "Inicio", icon: <HomeIcon />, to: "/" },
  { text: "Proyectos", icon: <WorkOutlineIcon />, to: "/Proyectos" },
  { text: "Convocatorias", icon: <CampaignIcon />, to: "/Convocatorias" },
  { text: "Blog", icon: <ArticleIcon />, to: "/Blog" },
  { text: "Conócenos", icon: <InfoIcon />, to: "/Conocenos" },
  { text: "Contáctanos", icon: <InboxIcon />, to: "/Contactanos" },
];

const itemsBotNavbar = [
  {
    text: "Facebook",
    icon: (
      <a href="https://www.facebook.com/Bioplan.proyecta/?locale=es_LA">
        <img src={IconFacebook} alt="" className="icon" />
      </a>
    ),
  },
  {
    text: "Instagram",
    icon: (
      <a href="https://www.instagram.com/bioplan.proyecta/?hl=es">
        <img src={IconInstagram} alt="" className="icon" />
      </a>
    ),
  },
  {
    text: "Youtube",
    icon: (
      <a href="https://www.youtube.com/channel/UCOR9tgJpFrW3HTgs9T35rBg/videos?view=0&sort=p">
        <img src={IconYoutube} alt="" className="icon" />
      </a>
    ),
  },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="navbar-top-container">
          <div className="container-logo">
            <Button component={RouterLink} to="/">
              <img src={LogoBioplan} alt="" className="LogoBioplan" />
            </Button>
          </div>
          <div className="container-icons">
            <Button
              className="buttonStyle icon"
              variant="contained"
              component={RouterLink}
              to="/Donar"
            >
              DONAR
            </Button>
            <a
              href="https://www.facebook.com/Bioplan.proyecta/?locale=es_LA"
              target="_blank" rel="noreferrer"
            >
              <img src={IconFacebook} alt="" className="icon" />
            </a>
            <a
              href="https://www.instagram.com/bioplan.proyecta/?hl=es"
              target="_blank" rel="noreferrer"
            >
              <img src={IconInstagram} alt="" className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCOR9tgJpFrW3HTgs9T35rBg/videos?view=0&sort=p"
              target="_blank" rel="noreferrer"
            >
              <img src={IconYoutube} alt="" className="icon" />
            </a>
          </div>
        </div>
        <div className="navbar-bot-container">
          <AppBar position="relative" color="primary" className="">
            <Toolbar className="conatiner-button">
              <Button color="inherit" component={RouterLink} to="/">
                INICIO
              </Button>
              <Button color="inherit" component={RouterLink} to="/Proyectos">
                PROYECTOS
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/Convocatorias"
              >
                CONVOCATORIAS
              </Button>
              <Button color="inherit" component={RouterLink} to="/Blog">
                BLOG
              </Button>
              <Button color="inherit" component={RouterLink} to="/Conocenos">
                CÓNOCENOS
              </Button>
              <Button color="inherit" component={RouterLink} to="/Contactanos">
                CONTÁCTANOS
              </Button>
            </Toolbar>
          </AppBar>
        </div>

        <div className="navbar-bot-responsive">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              open={open}
              style={{ backgroundColor: "#136734" }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: "none" }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  <a className="img-logoBioplan" href="/" component={RouterLink}>
                    <img src={LogoBioplan} alt="" className="LogoBioplan" />
                  </a>
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {itemsTopNavbar.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton component={RouterLink} to={item.to}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {itemsBotNavbar.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
            <Main open={open}>
              <DrawerHeader />
            </Main>
          </Box>
        </div>
      </header>
    </>
  );
};

export default Navbar;
