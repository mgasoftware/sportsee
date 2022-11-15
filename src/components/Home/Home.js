import React from 'react'
import { NavLink } from 'react-router-dom';

import HorizontalNav from '../Features/HorizontalNav'
import VerticalNav from '../Features/VerticalNav'
import '../../styles/Home.css'

export default function Home() {

    return (
        <div className="App">
            <VerticalNav />
            <div className="sportsee-center">
                <HorizontalNav />
                <nav className="sportsee-homeNav">
                    <NavLink to="/user/12">Karl</NavLink>
                    <NavLink to="/user/18">Cecilia</NavLink>
                </nav>
            </div>

        </div>
    )
}
