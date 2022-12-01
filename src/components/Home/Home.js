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
                    <h1 className="sportsee-homeNavTitle">Choix du profil:</h1>
                    <NavLink to="/user/12"><h1 className="sportsee-homeNavText">Karl</h1></NavLink>
                    <NavLink to="/user/18"><h1 className="sportsee-homeNavText">Cecilia</h1></NavLink>
                </nav>
            </div>

        </div>
    )
}