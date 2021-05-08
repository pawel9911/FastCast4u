import google from '../assets/google.svg';
import apple from '../assets/apple.svg';

const Footer = () =>{
    return (
        <footer>
            <h2>Download Demo App</h2>
            <div className='platforms'>
                <a href='/'><img src={google} alt='Google'></img></a>
                <a href='/'><img src={apple} alt='Apple'></img></a>
            </div>
        </footer>
    )
}

export default Footer;