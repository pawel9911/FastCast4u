import google from '../assets/google.svg';
import apple from '../assets/apple.svg';
import { ButtonBase, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
  h3: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
      fontSize: '35px',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '25px',
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: '15px',
    },
  },
  platforms:{
    fontSize: '15px',
    width: '100%',
  },
  img:{
    maxWidth: '10em',
    margin: '2em',
    [theme.breakpoints.down('md')]:{
        maxWidth: '8em',
        margin: '1.5em',
    },
    [theme.breakpoints.down('sm')]:{
        maxWidth: '6em',
        margin: '1em',
    },
    [theme.breakpoints.down('xs')]:{
        maxWidth: '5em',
        margin: '0.5em',
    },
  },
}));

const Footer = () =>{
    const classes = useStyles();
    return (
        <Grid container direction='column' alignItems='center' maxWidth='xl' >
            <Typography variant='h3' className={classes.h3}>Download Demo App</Typography>
            <Grid container direction='row' justify='center'  className={classes.platforms}>
                <ButtonBase component='a'>
                    <img src={google} alt='Google' className={classes.img}/>
                </ButtonBase>
                <ButtonBase component='a'>
                    <img src={apple} alt='Apple' className={classes.img}/>   
                </ButtonBase>
            </Grid>
        </Grid>
    )
}

export default Footer;
