import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    package:{
        minHeight: '44em',
        fontSize: '10px',
        margin: '1em',
        boxShadow: '1px 2px 25px 0.25px gray',
        width: '30%',
        [theme.breakpoints.down('md')]:{
            minHeight: '38em',
            margin: '0.8em',
            },
            [theme.breakpoints.down('sm')]:{
            minHeight: '34em',
            maxHeight:'35em',
            margin: '0.6em',
            width: '50%'
            },
            [theme.breakpoints.down('xs')]:{
            minHeight: '30em',
            maxHeight:'32em',
            margin: '0.4em',
            minWidth: '90%'
            },
    },
    h3: {
        borderBottom: '2px solid rgba(128, 128, 128, 0.411)',
        textAlign: 'center',
        width: '100%',
        height: '4em',
        fontSize: '20px',
        padding: '1em 0.5em',
        [theme.breakpoints.down('md')]:{
        
        padding: '1em 0.5em',
        height:'3em',
        },
        [theme.breakpoints.down('sm')]:{
        padding: '1em 0.5em',
        height:'3em',
        },
        [theme.breakpoints.down('xs')]:{
        fontSize: '1.5em',
        padding: '1em 0.5em',
        height:'3em',
        },
    },
    p:{
        fontSize:'18px',
        margin: '0.7em',
        [theme.breakpoints.down('md')]:{
            
            marginBottom: '0.4em',
        },
        [theme.breakpoints.down('sm')]:{
            fontSize: '1.5em',
            marginBottom: '0.3em',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '1em',
            marginBottom: '0.2em',
        },
    },
    img:{
        fontSize: '4px',
        width: '10em',
        maxHeight: '20em',
        [theme.breakpoints.down('md')]:{
            width: '8em', 
            height:'8em',
            margin:'4em'
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
    button:{
        backgroundColor: 'rgb(0, 125, 184)',
        borderRadius: '5px',
        padding: '1em 1.5em',
        margin: '2em',
        border: 'none',
        color: 'white',    
        [theme.breakpoints.down('md')]:{
            marginTop: '0.4em',
            padding: '0.5em 1.5em',
        },
        [theme.breakpoints.down('sm')]:{
            marginTop: '0.3em',
            padding: '0.3em 0.6em',
        },
        [theme.breakpoints.down('xs')]:{
            fontSize: '10px',
            marginTop: '0.2em',
            padding: '0.05em 0.05em',
        },
    }
}));

const Package = ({name, height, forWho, price, src}) =>{
    const classes = useStyles();
    const desciription = forWho;
    return(
            <Grid container direction='column' justify='flex-start' alignItems='center' className={classes.package} style={{height:height}}>
                <Typography variant='h3' className={classes.h3}>{name}</Typography>
                <Box component='div' className='packagePrice'>{price}</Box>
                {desciription.map((e, i)=> <p className={classes.p} key={i}>{e}</p>)}
                <img src={src} alt={name} className={classes.img}/>
                <Button variant="contained" className={classes.button}>GET NOW</Button>
            </Grid>
    )
}

export default Package;
