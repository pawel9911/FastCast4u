import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  img:{
    fontSize: '37px',
    width: '10em',
    height: '10em',
    padding: '0.85em',
    [theme.breakpoints.down('md')]:{
        width: '8em', 
        height:'8em',
    },
    [theme.breakpoints.down('sm')]:{
        width: '7em', 
        height:'7em',
    },
    [theme.breakpoints.down('xs')]:{
        width: '6em', 
        height:'6em',
    },
  },
  h3: {
    textAlign: 'left',
    fontSize: '22px',
    fontWeight: '500',
    marginBottom: '1.25em',
    [theme.breakpoints.down('md')]:{
      fontSize: '0.8em',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '0.6em',
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: '0.5em',
    },
  },
  p:{
    fontSize: '19px',
    color: 'skyblue',
    marginBottom: '0.5em',
    [theme.breakpoints.down('md')]:{
        fontSize: '0.8em',
        marginBottom: '0.4em',
    },
    [theme.breakpoints.down('sm')]:{
        fontSize: '0.7em',
        marginBottom: '0.3em',
    },
    [theme.breakpoints.down('xs')]:{
        fontSize: '0.5em',
        marginBottom: '0.2em',
    },
  },
  colorDescription:{
      color: 'black'
  },
  button:{
    borderRadius: '3px',
    backgroundColor: 'rgb(170, 0, 70)',
    color: 'white',
    fontSize: '14px',
    padding: '0.6em 2em',
    marginTop: '2em',
    
    [theme.breakpoints.down('md')]:{
        fontSize: '0.8em',
        marginTop: '0.4em',
        padding: '0.5em 1.5em',
      },
      [theme.breakpoints.down('sm')]:{
        fontSize: '0.6em',
        marginTop: '0.3em',
        padding: '0.4em 1em',
      },
      [theme.breakpoints.down('xs')]:{
        fontSize: '0.4em',
        marginTop: '0.2em',
        padding: '0.3em 0.5em',
      },
  }
}));

const Order = ({img, whatIs, options, direction, spaceing}) =>{
    const arr =options;
    const classes = useStyles();
    const newArr = arr.map((e, i)=> <p key={i} className={classes.p}>{e[0]} <span className={classes.colorDescription}>{e[1]}</span> {e[2]} {e[3]?<span className='colorDescription'>{e[3]}</span>: null}</p>);
    return(
        <Grid container item className='order' direction={direction} justify={spaceing}>
            <img src={img} alt={whatIs} className={classes.img}/>
            <Box component='div' className='options'>
                <Typography component='h3' className={classes.h3}>{whatIs}</Typography>
                {newArr}
                <Button variant="contained" className={classes.button}>ORDER NOW</Button>
            </Box>
        </Grid>

    )
}

export default Order;
