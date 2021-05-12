import phone from './assets/phon2.webp';
import screen from './assets/app-creator.webp';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer';
import Offer from './components/Offer';
import {Button, Grid, Typography } from '@material-ui/core';

 
const Nav = () =>{
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
        <Typography  component='h2' variant='h3' style={{margin: '1em 0 0.2em 0'}}>CREATE YOUR RADIO MOBILE APP</Typography>
        <Typography  component='p' style={{marginBottom: '1em'}}>Make your Radio Station Mobile and Interactive</Typography>
        <Offer/>
        <Button className='fullOffer' onClick={handleClickStatus} color='primary' style={{margin: '1em'}}>Check out more</Button>
        <Typography component='h2' variant='h4'>Radio App for Android and iOS</Typography>
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
        <Typography component='h2' variant='h3' style={{margin: '1em 0 0.2em 0'}}>CREATE YOUR RADIO MOBILE APP</Typography>
        <Typography  component='p'>Make your Radio Station Mobile</Typography>
        <Order img={phone} whatIs={'Radio App for Android and iOS'} options={radioOptions} direction='row' spaceing='center'/>
        <Button className='fullOffer' onClick={handleClickStatus} color='primary' style={{margin: '1em'}}>Check out more</Button>
        <Typography component='h2' variant='h4'>Creating your Radio App can not be easier</Typography>
        <Order img={screen} whatIs={'Design your Mobile App Online'} options={designOptions} direction='row-reverse' spaceing='space-evenly'/>
      </Grid>
      <Footer/>
      </>
    )
  }
}

export default Nav;
