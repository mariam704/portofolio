import React from 'react';
import './Meda.css';
import tweet from "../../img/tweet.png"
import faceboc from "../../img/Facebook.png"
import instagram from "../../img/instagram.png"
import github from "../../img/github.png"

const Meda = () => {
  return (
    <section className='services'>
           <div className='meda'>
           <div className="awosem">
             <span>My All soal meda</span>
             <span>project&comunacton</span>
           
             <span>I have dseigned and lunched customize highly<br/> 
             responsivee-ecpmmerec websiteusing advanced technologies<br/> 
             responsivee-ecpmmerec websiteusing advanced technologies<br/> 
             .</span>
              <button className='btn'> Hre Me</button> 
           <div className="blur s-blur1" style={{ background:"#ABF1FF94" }}>jyf</div>
         </div>
         <div className="mant-crcal">
          <div className="crcal">
            <div className="small-crcale">
            <img src={tweet} alt=""/>
            </div>
            <div className="small-crcale">
            <img src={faceboc} alt=""/>
            </div>
            <div className="small-crcale">
            <img src={instagram} alt=""/>
            </div>
            <div className="small-crcale">
            <img src={github} alt=""/>
            </div>
            <div className="small-crcale">
            <img src={faceboc} alt=""/>
            </div>
          </div>
        
         </div>
     </div>
    </section>
  
  )
}

export default Meda