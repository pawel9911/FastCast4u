import logo from '../assets/fastCast4u.png';
import phoneLogo from '../assets/phone-call.svg';
import comment from '../assets/comment.svg';
import facebook from '../assets/facebook.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

const Header = () =>{
    return (
        <header>
            <div className='mainPanel'>
                <div className='containerHeader'>
                    <div className='contactHeader'>
                        <button>
                            <span>
                                <span className='logoCal phoneLogo'>
                                   <img src={phoneLogo} alt='phoneLogo'></img>
                                </span>
                                +1 (844) 203-2278
                            </span>
                        </button>
                        <button>
                            <span>
                                <span className='logoCal comment'>
                                    <img src={comment} alt='logoCal'></img>
                                </span>
                                Open chat
                            </span>
                        </button>
                    </div>
                    <div className='linkSocialMedia'>
                        <a href='https://www.facebook.com/' title='Facebook'><img alt='facebook' src={facebook}></img></a>
                        <a href='https://www.youtube.com/' title='Youtube'><img alt='youtube' style={{transform: 'translateY(15%)'}} src={youtube}></img></a>
                        <a href='https://www.linkedin.com/feed/' title='Linkedin'><img alt='linkedin' src={linkedin}></img></a>
                        <a href='https://twitter.com/?lang=pl' title='Twitter'><img alt='twitter' src={twitter}></img></a>
                        <a href='https://www.instagram.com/' title='Instagram'><img alt='instagram' src={instagram}></img></a>
                    </div>
                </div>
            </div>
            <div className='logPanel'>
                <a href='/'>
                    <img src={logo} alt='logo'></img>
                </a>
            </div>
        </header>
    )
}

export default Header;