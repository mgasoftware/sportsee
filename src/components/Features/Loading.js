import React from 'react';

import '../../styles/Loading.css';
import loadingIcon from '../../assets/loading.svg';

/**
 * Display the loading spinner
 * @returns {JSX.Element}
 */

export default function Loading() {
    return (
        <div className="loader-container">
            <div className="spinner"><img src={loadingIcon} alt="loading" /> </div>
        </div>
    );
}
