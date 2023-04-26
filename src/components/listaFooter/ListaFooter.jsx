import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./listaFooter.css";


const ListaFooter = ({ title, itemList }) => {
  return (
    <>
      <Box className="container-lista-footer">
        <Typography variant="h4" color="" className="">
          {title}
        </Typography>
        <ul className="container-li">
<<<<<<< HEAD
          {itemList.map((item, i) => (
=======
          {itemList.map((item,i) => (
>>>>>>> 0bafaf76a4ef4b8781623174175a6862ff130264
            <li className="" key={i}>
              <Link
                component={RouterLink}
                to={item.url}
                className="link-footer"
              >
                {item.icon}
                {/* {<img src={item.image} className="img-googlePlay" />} */}
                {item.text}
                
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </>
  );
};
export default ListaFooter;