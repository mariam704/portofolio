import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical';
import './Intro.css';
import githup from '../../img/github.png'
import Linkedin from '../../img/linkedin.png';
import Instgram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import girl from '../../img/girl2.png';
// import {motion} from 'framer-motion/dist/es/index'
//import { useTransition } from 'react';
//import glassesimoji from "../../img/glassesimoji.png";
//import thumbup from "../../img/thumbup.png";
//import crown from "../../img/crown.png";


function Intro() {
   // const transition ={ duration : 2 , type: 'spring'}
  return (
    <section>
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I am Mariam</span>
                <span className='type'>
                    <ReactTypical
                    loop={Infinity}
                    steps={[' I am 24 years', 1000, 'I FrontEnd Developer',2000,' I have worke experience with REACT', 
                     300]}
                    wrapper="p"
                    />
                   
                    </span>
                <span> FrontEnd Developer with High Level of Experienece in web designed 
                    and development ,prdodcting the Quality  Work</span>
            </div>
            <button className='button '>hire me</button>
            <div className="i-icons">
             <a href='https://github.com/mariam704'><img src={githup} alt=""/></a>
             <a href='https://www.linkedin.com/in/mariam-abdelrazek-1b37581b6'><img src={Linkedin} alt=""/></a>
             <a href='https://instagram.com/mariam.abdelrazk?igshid=YmMyMTA2M2Y='><img src={Instgram} alt=""/></a>
         
             
            </div>
        </div>
        <div className="i-right">  
        <img
        // initial={{left:'-36%'}} 
        // whileInView={{left: '-24%'}}
        // transition={transition}
        src={Vector1} alt="" />
        <img src={Vector2} alt="" />
            <img src={girl} width="190px" alt=""></img>

        </div>
    </section>
  )
  }

export default Intro