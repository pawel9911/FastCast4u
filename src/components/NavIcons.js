import { Icon, Link } from "@material-ui/core"

const NavIcons = ({iconHref, iconSrc, alt}) =>{
    return(
        <Link href={iconHref} component='a'>
            <Icon fontSize='small'>
                <img src={iconSrc} alt={alt} style={{width: '20px', height:'20px'}}/>
            </Icon>
        </Link>
        
    )
}

export default NavIcons;
