import React from 'react'
import './App.css'

function Footer(props) {
    return (

        <div>
            <div className="footer">
                <div id="contact-info">
                    <li id="email"><a href="mailto:laurenhammer1115@gmail.com" >
                        <i className="fa fa-3x fa-google-plus"></i></a>
                    </li>
                    <li id="linkedin"><a href="https://www.linkedin.com/in/lauren-hammer-grimley/">
                        <i className="fa fa-3x fa-linkedin-square"></i></a>
                    </li>
                    <li id="github"><a href="https://github.com/LGrimley0525">
                        <i className="fa fa-3x fa-github-square"></i></a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Footer