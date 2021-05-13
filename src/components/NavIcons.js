import { Icon, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  img:{
    fontSize: '20px',
    width: '1em', 
    height:'1em',
    [theme.breakpoints.down('md')]:{
        width: '0.9em', 
        height:'0.9em',
    },
    [theme.breakpoints.down('sm')]:{
        width: '0.8em', 
        height:'0.8em',
    },
    [theme.breakpoints.down('xs')]:{
        display: 'none',
    },
  },
}));

const NavIcons = ({iconHref, iconSrc, alt}) =>{
    const classes = useStyles();
    return(
        <Link href={iconHref} component='a'>
            <Icon fontSize='small'>
                <img src={iconSrc} alt={alt} className={classes.img}/>
            </Icon>
        </Link>
    )
}

export default NavIcons;
