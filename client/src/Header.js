import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.png'
import './App.css'

function Header(props){
    return(
        <div>
            <div id='logo-photo'>
             <img src={Logo} alt="Logo"></img>
             </div>
            <div id='header-buttons'> 
            
            <Link to={'/'}>
                <button id='button'>Home</button>
            </Link>
            <Link to={'/about'}>
                <button id='button'>About Me</button>
            </Link>
            <Link to={'/portfolio'}>
                <button id='button'>Portfolio</button>
            </Link>
            <Link to={'/interests'}>
                <button id='button'>Interests</button>
            </Link>
            <Link to={'/workhistory'}>
                <button id='button'>Work History</button>
            </Link>
            <Link to={'/contact'}>
                <button id='button'>Contact Me</button>
            </Link>
            </div>
        </div>
    )
}

export default Header