import React from 'react'

import meditate from '../../assets/meditate.png'
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png'
import dumbbell from '../../assets/dumbbell.png'
import '../../styles/HorizontalNav.css'

export default function HorizontalNav() {
    return (
        <div className="sportsee-horizontal">
            <div className="sportsee-horizontalIcon">
                <a href="/"><img src={meditate} alt="meditate" /></a>
                <a href="/"><img src={swim} alt="swim" /></a>
                <a href="/"><img src={bike} alt="bike" /></a>
                <a href="/"><img src={dumbbell} alt="dumbbell" /></a>
            </div>
            <div className="sportsee-horizontalCopyright">Copiryght, SportSee 2020</div>
        </div>
    )
}
