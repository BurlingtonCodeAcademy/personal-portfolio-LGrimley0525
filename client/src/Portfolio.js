import React from 'react'
import GeoVermont from './projectthumbnail/GeoVermont.png'
import Remock from './projectthumbnail/Remock.png'
import TicTacToe from './projectthumbnail/TicTacToe.png'
import Yelpington from './projectthumbnail/Yelpington.png'
import Zorkington from './projectthumbnail/Zorkington.png'
import './App.css'

function Portfolio(props) {
    return (
        <div className='portfolio'>
            <div id='title'> 
                <h1>My Recent Work</h1>
                <h2>Here are a few projects I have worked on recently. <br />Contact me for more projects.</h2> 
            </div>
            <div id='geovermont'>
                <h3> Geo-Vermonter </h3>
                <img src={GeoVermont} alt="GeoVermont"></img>
                <h4> A Vermont geographic county guessing game using the Leaflet.js library. <br /> Click <a href='https://github.com/BurlingtonCodeAcademy/geo-vermonter-leepeters0023'>here</a> for the code. </h4>
            </div>
            <div id='yelp'>
                <h3> Yelpington </h3>
                <img src={Yelpington} alt="Yelpington"></img>
                <h4>A directory of Burlington restaurants that uses AJAX to retrieve JSON data. <br />  Click <a href='https://github.com/BurlingtonCodeAcademy/yelpington-LGrimley0525'>here</a> for the code.</h4>
            </div>
            <div id='remock'>
                <h3> Website Remock </h3>
                <img src={Remock} alt="Remock"></img>
                <h4> Re-creation of a complicated blog-style webpage using CSS. <br /> Click <a href='https://github.com/BurlingtonCodeAcademy/remock-bapzen'>here</a> for the code. </h4>
            </div>
            <div id='tictactoe'>
                <h3> Tic-Tac-Toe </h3>
                <img src={TicTacToe} alt="TicTacToe"></img>
                <h4> Classic game using JS, CSS and HTML that user can play another user or against computer. <br /> Click <a href='https://github.com/BurlingtonCodeAcademy/tic-tac-toe-LGrimley0525'>here</a> for the code. </h4>
            </div>
            <div id='zork'>
                <h3> Zorkington </h3>
                <img src={Zorkington} alt="Zorkington"></img>
                <h4> A text adventure game in JavaScript. <br /> Click <a href='https://github.com/BurlingtonCodeAcademy/zorkington-vermontdaniel-1'>here</a> for the code.</h4>
            </div>
        </div>
)
}

export default Portfolio