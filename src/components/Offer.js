import {Container, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Package from "./Package";
import androidImg from '../assets/android.png';
import iosImg from '../assets/IP.png';
import iosAndroid from '../assets/IP&android.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        [theme.breakpoints.down('md')]:{
        },
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
        },
        [theme.breakpoints.down('xs')]:{
            display: 'flex',
            flexDirection: 'column',
        },
    }, 
}));

const Offer = () =>{
    const android = ['Android Smartphones','Android Tablets'];
    const androidIOS = ['Android Smartphones & Tablets', 'Apple iPhone & iPad'];
    const iOS = ['Apple iPhone', 'Apple iPad'];
    const [priceAndriod, setPriceAndriod] = useState (false);
    const [priceIos, setPricieIos] = useState(false);
    const [priceBundle, setPricieBundle] = useState(false);
    const classes = useStyles();
    useEffect(()=>{
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=496`)
        .then(response => response.json())
        .then(data => setPriceAndriod(data.regular))
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=497`)
        .then(response => response.json())
        .then(data => setPricieIos(data.regular))
        fetch(`https://fastcast4u.com/api/getpricing/getPricing.php?pid=498`)
        .then(response => response.json())
        .then(data => setPricieBundle(data.regular))
    },[])
    return(
        <Container maxWidth='xl'>
            <Grid container direction='row' justify='center' alignItems='center' className={classes.container}>
                <Package name='Android App' forWho={android} price={priceAndriod} src={androidImg}/>
                <Package name='Android & iOS App' height='50em' forWho={androidIOS} price={priceBundle} src={iosAndroid}/>
                <Package name='iOS App'forWho={iOS} price={priceIos} src={iosImg}/>
            </Grid>
        </Container>
    )
}

export default Offer
