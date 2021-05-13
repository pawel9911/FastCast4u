import phone from './assets/phon2.webp';
import screen from './assets/app-creator.webp';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer';
import Offer from './components/Offer';
import {Button, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
  h3: {
    margin: '1em 0 0.2em 0',
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
  p: {
    marginBottom: '1em',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
      fontSize: '14px',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '12px',
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: '10px',
    },
  },
  button:{
    fontSize:'14px',
    margin: '1em',
    padding: '1em',
    color: 'rgb(50, 0, 255)',
    [theme.breakpoints.down('md')]:{
      fontSize: '10px',
    },
    [theme.breakpoints.down('sm')]:{
      fontSize: '8px',
    },
    [theme.breakpoints.down('xs')]:{
      fontSize: '6px',
    },
  },
}));

 
const Nav = () =>{
  const classes = useStyles();
  const radioOptions = [
    ['Radio', 'and', 'Live TV Player'],
    ['Personalize App', 'in creator'],
    ['','Listeners', 'Ads & Monetization'],
    ['', 'Promote your', 'Social Media', 'content' ],
    ['', 'Display any page in', 'Web-view'],
    ['', 'Interact with users with', 'Push Notifications']
  ]

  const designOptions = [
    ['Create and preview','your App online'],
    ['Publication assistance', 'included'],
    ['Easy customization', 'in your web browser'],
    ['Free', 'developers’ advice and support']
  ]

  const [fullOfferStatus, setFullOfferStatus] = useState(false);
  const handleClickStatus = () =>{
    setFullOfferStatus(fullOfferStatus? false:true);
  }
  if(fullOfferStatus){
    return(
      <>
      <Header/>
      <Grid container direction='column' alignItems='center' justify='center'>
        <Typography variant='h3' className={classes.h3}>CREATE YOUR RADIO MOBILE APP</Typography>
        <Typography  component='p' className={classes.p}>Make your Radio Station Mobile and Interactive</Typography>
        <Offer/>
        <Button onClick={handleClickStatus} className={classes.button}>Check out more</Button>
        <Typography variant='h4' className={classes.h3}>Radio App for Android and iOS</Typography>
        <Order img={phone} options={radioOptions} direction='row' spaceing='center'/>
      </Grid>
      <Footer/>
      </>
    )
  }
  else{
    return (
      <>
      <Header/>
      <Grid container direction='column' alignItems='center' justify='center'>
        <Typography  variant='h3' className={classes.h3}>CREATE YOUR RADIO MOBILE APP</Typography>
        <Typography  component='p' className={classes.p}>Make your Radio Station Mobile</Typography>
        <Order img={phone} whatIs={'Radio App for Android and iOS'} options={radioOptions} direction='row' spaceing='center'/>
        <Button onClick={handleClickStatus} className={classes.button}>Check out more</Button>
        <Typography variant='h4' className={classes.h3}>Creating your Radio App can not be easier</Typography>
        <Order img={screen} whatIs={'Design your Mobile App Online'} options={designOptions} direction='row-reverse' spaceing='space-evenly'/>
      </Grid>
      <Footer/>
      </>
    )
  }
}

export default Nav;
