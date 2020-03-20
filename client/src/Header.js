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
        </div>
    )
}

export default Header