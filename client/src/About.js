import React from 'react'
import Homephoto from './Homephoto.png'
import './App.css'

function About (props){
    return(
        <div className='about'>
            <div id = "about-title" ><h1> About Me </h1>
            </div>
           <div id='about-photo'>
             <img src={Homephoto} alt="Homephoto"></img>
            </div>
            <div id='about-text'>
                <p>Stuff about me</p>
                < hr  />
                <p>Another thing about me</p>
            </div>
        </div>
    )
}

export default About