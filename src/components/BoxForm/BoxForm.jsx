import { Typography } from "@mui/material";
import "./BoxForm.css"

/*
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    
  },

  input:{
    back: "red",
  }
});
*/
const BoxForm = () => {


  /*<Typography variant="l" style={{
            
            fontfamily: "Arial",
            color: "green"}} for="nombre">Nombre:</Typography><br />
  */
  return (
    <>
      <form action="/enviar-mensaje" method="POST">

        <label class="label" for="nombre">Nombre:</label><br />
        <input type="text" id="nombre" name="nombre" /><br />

        <label class="label" for="email">Email:</label><br />
        <input type="email" id="email" name="email" /><br />
        <label class="label" for="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" name="mensaje"></textarea><br />
        <input type="submit" value="Enviar mensaje" />
      </form>

      <section>
      
      </section>

    </>
  );
};

export default BoxForm;