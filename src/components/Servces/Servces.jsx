import React from 'react';
import './servces.css';
import Card from '../Card/Card';
import heart from '../../img/heartemoji.png';
import glasses  from '../../img/glasses.png';
import humpel from '../../img/humble.png';
import Resume from './Resume.PDF'

function Servces() {
  return (
    <section className='services'>
       {/* left */}
         <div className="awosem">
            <span>My Awosem</span>
            <span>Services</span>
            <span>I have dseigned and lunched customize highly<br/> 
             responsivee-ecpmmerec website
            using advanced technologies.</span>
           
           <a href={Resume} download>
             <button className='btn'>Download cv</button>
           </a>
           <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}>jyf</div>
         </div>

        {/* right */}
         <div className="Cards">
            <div style={{left:'14rem'}}>
                <Card
                emoji={heart}
                heading={'framwork,'}
                detail={"react ,bootstrab "}/>
            </div>
            {/* RIGT CARD */}
            <div style={{left:'-4rem' ,top:'12rem'}}>
                <Card
                emoji={glasses}
                heading={'Developer'}
                detail={"Html,Css , Javascript "}/>
            </div>
            <div style={{left:'12rem' ,top:'19rem'}}>
                <Card
                emoji={humpel}
                heading={'Developer'}
                detail={"Over the past2 years i have designed and developed lunched responsive websites "}/>
            </div>
            <div className="blur s-blur2"></div>
         </div>
     

    </section>

  )
}

export default Servces