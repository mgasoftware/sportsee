import React from 'react';

import '../../styles/Error.css';

/**
 * Display error page
 * @returns {JSX.Element}
 */

export default function Error() {
    return (
        <div className="sportsee-error">
            <h1 className="sportsee-error404">404</h1>
            <h2 className="sportsee-errorInfo">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <a href="/" className="sportsee-errorLink">
                <p>Retourner sur la page d’accueil</p>
            </a>
        </div>
    );
}
