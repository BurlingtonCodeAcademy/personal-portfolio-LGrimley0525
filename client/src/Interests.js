import React from 'react'
import Tobeyphoto from './hobbyphotos/Tobey.png'
import Burlingtonphoto from './hobbyphotos/Burlington.png'
import Billsphoto from './hobbyphotos/BillsStadium.png'
import Burpeephoto from './hobbyphotos/Burpee.png'
import Familyphoto from './hobbyphotos/Family.png'



function Interests(props) {
    return (

        <div>
            <div className='interests'>
                <div id='interest-title'><h1> When I'm not at my computer...</h1>
                </div>
                <div id='burlington-pic'>
                    <img src={Burlingtonphoto} alt="Burlingtonphoto"></img>
                </div>

                <div className='interest-content'>
                    <div id='top-info'> <h2>I'm just a Buffalo girl living her best life in Vermont. </h2>
                    </div>
                    
                    <div id='tobey-pic'>
                        <img src={Tobeyphoto} alt="Tobeyphoto"></img>
                    </div>

                    <div id='interest-text2' >
                        <p> I live for Sunday Football & the Buffalo Bills, actually all things Buffalo! I enjoy exercising first thing in the morning, memorizing all the lyrics to my favorite songs, and spending time with my husband, Nick, and my rescue-pup, Tobey! </p>
                        <p>After moving to Vermont 7 years ago, I have discovered the beauty in a more rural setting, and the appreciation of a good pair of winter gloves!</p>
                    </div>
                   
                    <div id='burpee-pic'>
                        <img src={Burpeephoto} alt="Burpeephoto"></img>
                    </div>                    
                    <div id='bills-pic'>
                        <img src={Billsphoto} alt="Billsphoto"></img>
                    </div>
                   
                     <div id='family-pic'>
                        <img src={Familyphoto} alt="Familyphoto"></img>
                    </div> 


                </div>
            </div>
        </div>
    )
}


export default Interests