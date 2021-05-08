import phone from './assets/phon2.webp';
import screen from './assets/app-creator.webp';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer';
import Offer from './components/Offer';

 
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
    console.log('essa');
  }
  if(fullOfferStatus){
    return(
      <>
      <Header/>
      <div className='container'>
        <h2>CREATE YOUR RADIO MOBILE APP</h2>
        <p>Make your Radio Station Mobile and Interactive</p>
        <Offer/>
        <button className='fullOffer' onClick={handleClickStatus}>Check out more</button>
        <h2>Radio App for Android and iOS</h2>
        <Order img={phone} options={radioOptions} direction='row' spaceing='center'/>
      </div>
      <Footer/>
      </>
    )
  }
  else{
    return (
      <>
      <Header/>
      <div className='container'>
        <h2>CREATE YOUR RADIO MOBILE APP</h2>
        <p>Make your Radio Station Mobile</p>
        <Order img={phone} whatIs={'Radio App for Android and iOS'} options={radioOptions} direction='row' spaceing='center'/>
        <button className='fullOffer' onClick={handleClickStatus}>Check out more</button>
        <h2>Creating your Radio App can not be easier</h2>
        <Order img={screen} whatIs={'Design your Mobile App Online'} options={designOptions} direction='row-reverse' spaceing='space-evenly'/>
      </div>
      <Footer/>
      </>
    )
  }
}

export default Nav;