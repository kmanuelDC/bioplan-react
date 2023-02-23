import PlayStore from "../../assets/icons/playstore";
import Button from '@mui/material/Button';

import './styles.css'

const ButtonPlayStore = () =>{


    return( <div>
    <Button  className='button-playstore' startIcon={<PlayStore />}> PLAYSTORE</Button>
    </div>
        
        
    )
}

export default ButtonPlayStore;