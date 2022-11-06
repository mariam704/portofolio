import React from 'react'
import footerPic from '../../img/wave.png';
import { UilInstagram } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons';
import { UilWhatsappAlt } from '@iconscout/react-unicons'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
    <img src={footerPic} alt="" style={{width:'100%'}}></img> 
        <div className="content">
        <span>mariamabdelraze704@gmail.com</span>
     <div className="icons">
     <UilGithub  size='3rem' />
     <UilInstagram  size='3rem'/>
     <UilTwitter size='3rem' />
     <UilWhatsappAlt size='3rem'  />
     </div>
        </div>
      
   
    </div>
  )
}
