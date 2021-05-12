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

const Header = () =>{
    return (
        <AppBar position='static' color='default' >
            <Container component='div' maxWidth={false} className='appBar'>
                <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Box component='div'>
                            <Button 
                                // color="secondary"
                                size='large'
                                startIcon={<PhoneIcon/>}
                            >
                                +1 (844) 203-2278
                            </Button>
                            <Button
                                // color="secondary"
                                size='large'
                                startIcon={<ChatIcon/>}
                            >
                                Open chat
                            </Button>
                        </Box>
                        <Grid   container justify='space-between' alignItems='center' component='div' className='linkSocialMedia'>
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
                        <img src={logo} alt='logo' style={{maxWidth:'500px', minWidth:'100px'}}></img>
                    </ButtonBase>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
