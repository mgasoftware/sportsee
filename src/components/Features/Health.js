import React from 'react';
import PropTypes from 'prop-types';

import "../../styles/Health.css";

/**
 * Display card of the data health
 * @param {object} props 
 * @param {string} props.name 
 * @param {string} props.icon 
 * @param {number} props.data 
 * @returns {JSX.Element}
 */

export default function Health(props) {
    let data = props.data;
    let name = props.name;
    let icon = props.icon;
    let internationalNumberFormat = new Intl.NumberFormat('en-US');

    return (
        <div className="sportsee-healthMain">
            <div className="sportsee-healthIcon">
                <img src={icon} alt="icon" />
            </div>
            <div className="sportsee-healthData">
                {data > 999 ?
                    (<p className="sportsee-healthDataNum">{internationalNumberFormat.format(data)}kCal</p>)
                    : (<p className="sportsee-healthDataNum">{data}g</p>)
                }
                <p className="sportsee-healthDataName">{name}</p>
            </div>
        </div>
    );
}

Health.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    data: PropTypes.number
};