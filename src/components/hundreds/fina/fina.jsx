import React from 'react'
import './fina.css'
import Contact from '../../units/contact_me/contact'
import Sum from '../../tens/sum/sum'
import bgv from '../../../assets/videos/bg.mp4'

export default function Fina() {
  return (
    <div className='video-container' >

        <video  autoPlay
        loop
        muted
        playsInline className='video-bg'>
    <source src={bgv}  type='video/mp4' >

    </source>
  </video>
        <div className="sd4">
            {/* Left side  */}
        <div className="jk7">
            <div className="pic1">
                <img  src={require('../../../assets/images/meeee.png' )} alt='Profile'></img>
            </div>
            <div>
                <Contact/>

            </div>


        </div>
        <div className="cdf">
            <Sum/>


        </div>
    </div>
    </div>
    
  )
}
