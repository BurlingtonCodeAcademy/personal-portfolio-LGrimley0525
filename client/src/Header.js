import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo2.png'
import './App.css'
import Contact from './Contact.js'


function Header(props){
   
    return(
        <div>
            
            <div id='logo-photo'>
             <a href="/" ><img src={Logo} alt="Logo"></img></a>
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
            <Link  to={'/contact'}> 
                <button id='button' >Contact Me</button>
            </Link>
            </div>
        </div>
    )
}

export default Header

// <Contact handleChange={this.handleChange} modalOpen={this.state.modalOpen} closeModal={this.closeModal}/>

// onClick={this.openModal} openModal={this.openModal}

// let handleChange;
// let openModal;
// let closeModal;

// handleChange = (event) => {
//     this.setState({
//       modalOpen: event.target.value
//     })
//   }
//   openModal=()=> {
//     this.setState({
//       modalOpen: true
//     });
//   }

//   closeModal= ()=> {
//       this.setState({
//       modalOpen: false
//     });
//   }