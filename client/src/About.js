import React from 'react'
import Homephoto from './Homephoto.png'
import './App.css'

function About(props) {
    return (
        <div className='about'>
            <div id="about-title" ><h1> About Me </h1>
            </div>
            <div id='about-photo'>
                <img src={Homephoto} alt="Homephoto"></img>
            </div>
            <div id='about-text'>
                <h3>Full Stack Web Developer <br />
                  JavaScript || ReactJS || HTML || CSS  </h3>
                < hr />
                <p>I am currently enrolled at Burlington Code Academy in the Software Development Bootcamp, with an anticipated completion date of April 24, 2020.<br /></p>

                <p>Like many, I was unhappy with the work I was doing, and left feeling unfulfilled.  I decided to take a stand and made the decision to enroll at BCA leading to a major shift in my career trajectory.  At BCA, I am studying software development and building full stack web applications with JavaScript, incorporating ReactJS as well. Very quickly on, I realized that the technology field was where I was meant to be. <br /> </p>
                
                <p> I love to solve problems and help people.  Technology gives me the freedom to explore my creative side, while helping others to achieve their goals.  I want to take my new skills in web development to create positive user experiences all while helping others and the community along the way!
                </p>
            </div>
        </div>
    )
}

export default About