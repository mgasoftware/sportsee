import React from 'react'
import { NavLink } from 'react-router-dom';

import HorizontalNav from '../Features/HorizontalNav'
import VerticalNav from '../Features/VerticalNav'
import '../../styles/Home.css'
import karlImg from '../../assets/karl.jpg'
import ceciliaImg from '../../assets/cecilia.jpg'

/**
 * Display Home Page
 * @returns {JSX.Element}
 */

export default function Home() {

    return (
        <div className="App">
            <VerticalNav />
            <div className="sportsee-center">
                <HorizontalNav />
                <div className="sportsee-home">
                    <h1 className="sportsee-homeNavTitle">Qui est-ce ?</h1>
                    <nav className="sportsee-homeNav">
                        <NavLink to="/user/12">
                            <div>
                                <img src={karlImg} className="sportsee-homeImg" alt="karl" />
                                <p className="sportsee-homeNavText">Karl</p>
                            </div>
                        </NavLink>
                        <NavLink to="/user/18">
                            <div>
                                <img src={ceciliaImg} alt="cecilia" className="sportsee-homeImg" />
                                <p className="sportsee-homeNavText">Cecilia</p>
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    )
}