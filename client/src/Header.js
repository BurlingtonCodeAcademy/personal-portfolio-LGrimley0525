import React from 'react'
import { Link } from 'react-router-dom'


function Header(props){
    return(
        <div>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
            <Link to={'/about'}>
                <button>About Button</button>
            </Link>
            <Link to={'/portfolio'}>
                <button>Portfolio</button>
            </Link>
            <Link to={'/interests'}>
                <button>Interests</button>
            </Link>
            <Link to={'/workhistory'}>
                <button>Work History</button>
            </Link>
            <Link to={'/contact'}>
                <button>Contact Me</button>
            </Link>
        </div>
    )
}

export default Header