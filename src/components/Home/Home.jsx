import React from 'react'
import Intro from '../intro/Intro'
import Servces from "../Servces/Servces";
import Experence from "../Experence/Experence";
import Contact from "../Contact/Contact";
import Hstory from "../Hstory/Hstory";
import { Footer } from "../Footer/Footer";
const Home = () => {
  return (
    <div>
    <Intro/>
      <Servces/>
      <Experence/> 
       {/* <Meda/>
       <Portofilo/>  */}
       <Hstory/>
      <Contact/>
      <Footer/>  
      
     
      </div>
  )
}

export default Home