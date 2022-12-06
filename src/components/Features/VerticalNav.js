import React from 'react';

import logo from '../../assets/logo.png';
import '../../styles/VerticalNav.css';

/**
 * Display the veritical nav bar
 * @returns {JSX.Element}
 */

export default function VerticalNav() {
    return (
        <div className="sportsee-vertical">
            <img src={logo} alt="logo sportsee" />
            <nav>
                <ul className='sportsee-verticalMenu'>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/">Profil</a></li>
                    <li><a href="/">Réglage</a></li>
                    <li><a href="/">Communauté</a></li>
                </ul>
            </nav>
        </div>
    );
}
