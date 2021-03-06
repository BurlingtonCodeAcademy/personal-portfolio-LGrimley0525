import React from 'react'
import ReactAnimation from 'react-animation'
import { AnimateOnChange, HideUntilLoaded } from 'react-animation'
import Tobeyphoto from './hobbyphotos/Tobey.png'
import EthanAllen from './hobbyphotos/EthanAllen.png'
import Burlingtonphoto from './hobbyphotos/Burlington.png'
import Billsphoto from './hobbyphotos/BillsStadium.png'
import Burpeephoto from './hobbyphotos/Burpee.png'
import Familyphoto from './hobbyphotos/Family.png'
import Wings from './hobbyphotos/Wings.png'
import Quebec from './hobbyphotos/Quebec.png'
import InterestHeaderPic from './hobbyphotos/InterestHeaderPic.png'
import Christmas from './hobbyphotos/Christmas.png'

const { useState, useLayoutEffect, useRef } = React



function Interests(props) {
    const words = [
        'Burlingtonian.',
        'Dill Pickles.',
        'Strong.',
        'Cocktails on the Porch.',
        'Buffalo Bills.',
        'My Husband, Nick.',
        'Coffee & the Morning News.',
        'Fighting for What is Right.',
        'Red Sangria.',
        'My Family.',
        'Problem-Solver.',
        'My Corgi-mix, Tobey.',
        'Hallmark Christmas movies.',
        'Morning Workouts.',
        'Compassionate.',
        'Mexican Food.',
        'Motivator.',
        'Kool & the Gang.',
        "Baking."
    ]
    
const images =[ 
    <img src={Tobeyphoto} alt='tobey'></img>,
    <img src={Billsphoto} alt='bills'></img>,
    <img src={Burpeephoto} alt='burpee'></img>,
    <img src={Familyphoto} alt='family'></img>,
    <img src={Wings} alt='wings'></img>,
    <img src={Quebec} alt='quebec'></img>,
    <img src={InterestHeaderPic} alt='interest'></img>,
    <img src={Christmas} alt='christmas'></img>
   
];
    const [current, setCurrent] = useState(0)
    const [currentWidth, setCurrentWidth] = useState(0)
    const [currentTextStyle, setCurrentTextStyle] = useState({})
    const currentTextRef = useRef()
    const nextTextRef = useRef()

    const nextItem = current => {
        if (current === words.length - 1) {
            return 0
        } else {
            return current + 1
        }
    }
    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setCurrent(nextItem(current))
            nextTextRef.current.innerText = words[nextItem(current)]
            const nextTextSize = nextTextRef.current.offsetWidth
            setCurrentWidth(nextTextRef.current.offsetWidth)
            setCurrentTextStyle({
                opacity: 0
            })
            setTimeout(() => {
                setCurrentTextStyle({
                    opacity: 1
                })
            }, 500)
        }, 3000);
        return (() => {
            clearInterval(interval)
        })
    })



    return (

        <div>
            <div id='burl-pic'>
                <img src={EthanAllen} alt='burlington'></img>
            </div>
            <div id='interest-text'>Who I Am & What I Love: <br /> <br />
                <AnimateOnChange className="foo" durationOut={500}>
                    <div className="contain" style={{ width: currentWidth ? currentWidth + 'px' : 'auto' }}>
                        <div className="text-width-wrapper" style={currentTextStyle} ref={currentTextRef}>{words[current]}
                        </div>
                    </div>
                </AnimateOnChange>
            </div>
            <h1 className="hidden-text" ref={nextTextRef} />

            <div id='interest-pics'>
                <br />
                <h3> A Sneak Peek Into My Favorites...</h3> <br /> <br />
                
              
                <AnimateOnChange className="foo2" durationOut={1500}>
                    <div className="contain2" style={{ width: currentWidth ? currentWidth + 'px' : 'auto' }}>
                        <div className="text-width-wrapper2" style={currentTextStyle} ref={currentTextRef}>{images[current]}</div>
                    </div>
                </AnimateOnChange> 
            </div>
        </div>    
);

}

export default Interests


