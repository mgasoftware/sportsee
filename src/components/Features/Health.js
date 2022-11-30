import React from 'react'

import "../../styles/Health.css"

export default function Health(props) {
    let data = props.data;
    let name = props.name;
    let icon = props.icon;
    let internationalNumberFormat = new Intl.NumberFormat('en-US')
    console.log(internationalNumberFormat.format(data))

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
    )
}
