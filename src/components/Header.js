import logo from '../assets/fastCast4u.png';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import { AppBar, Box, Button, ButtonBase, Container, Grid, Toolbar} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import ChatIcon from '@material-ui/icons/Chat';
import NavIcons from './NavIcons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    appBar: {
        backgroundColor: 'rgb(0, 125, 184)'
    },
    button: {
        color: 'white',
        [theme.breakpoints.down('md')]:{
        fontSize: '13px',
        },
        [theme.breakpoints.down('sm')]:{
        fontSize: '11px',
        },
        [theme.breakpoints.down('xs')]:{
        fontSize: '9px',
        },
    },
    img:{
        fontSize: '100px',
        maxWidth:'5em',
        minWidth:'1em',
        [theme.breakpoints.down('md')]:{
            maxWidth:'4em',
            minWidth:'0.8em',
        },
        [theme.breakpoints.down('sm')]:{
            maxWidth:'3em',
            minWidth:'0.6em',
        },
        [theme.breakpoints.down('xs')]:{
            maxWidth:'2em',
            minWidth:'0.4em',
        },
    },
}));

const Header = () =>{
    const classes = useStyles();
    return (
        <AppBar position='static' color='default' >
            <Container component='div' maxWidth={false} className={classes.appBar}>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Box component='div'>
                            <Button 
                                className={classes.button}
                                size='large'
                                startIcon={<PhoneIcon/>}
                            >
                                +1 (844) 203-2278
                            </Button>
                            <Button
                                className={classes.button}
                                size='large'
                                startIcon={<ChatIcon/>}
                            >
                                Open chat
                            </Button>
                        </Box>
                        <Grid container justify='space-between' alignItems='center' component='div' className='linkSocialMedia'>
                            <NavIcons iconHref='https://www.facebook.com/' iconSrc={facebook} alt='facebook'/>
                            <NavIcons iconHref='https://www.youtube.com/' iconSrc={youtube} alt='youtube'/>
                            <NavIcons iconHref='https://www.linkedin.com/' iconSrc={linkedin} alt='linkedin'/>
                            <NavIcons iconHref='https://twitter.com/?lang=pl' iconSrc={twitter} alt='twitter'/>
                            <NavIcons iconHref='https://www.instagram.com/' iconSrc={instagram} alt='instagram'/>
                        </Grid>
                </Grid>        
            </Container>
            <Toolbar className='logPanel'>
                <Grid container justify='center'>
                    <ButtonBase>
                        <img src={logo} alt='logo' className={classes.img}></img>
                    </ButtonBase>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
