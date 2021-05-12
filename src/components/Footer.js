import google from '../assets/google.svg';
import apple from '../assets/apple.svg';
import { ButtonBase, Grid, Typography } from '@material-ui/core';


const Footer = () =>{
    return (
        <Grid container direction='column' alignItems='center' maxWidth='xl' >
            <Typography align='center' variant='h3' component='h2'>Download Demo App</Typography>
            <Grid container direction='row' justify='center'  className='platforms'>
                <ButtonBase component='a'>
                    <img src={google} alt='Google'/>
                </ButtonBase>
                <ButtonBase component='a'>
                    <img src={apple} alt='Apple'/>   
                </ButtonBase>
            </Grid>
        </Grid>
    )
}

export default Footer;
