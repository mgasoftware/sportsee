import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import useDatas from '../../datas/useDatas';
import Modelisation from './modelisation';
import '../../styles/AverageGraph.css';

/**
 * Display graph of user average
 * @param {object} props 
 * @param {string} props.id
 * @returns {JSX.Element}
 */

export default function AverageGraph(props) {
    let formatedData = [];
    let averageSessions = [];

    let { data } = useDatas("http://localhost:3000/user/" + props.id + "/average-sessions", props.id);

    if (data !== null) {
        formatedData = new Modelisation(data);
        averageSessions = formatedData.formatedAverage;
    }

    function CustomTooltip({ active, payload }) {
        return active && payload ? (
            <ul className="sportsee-customTooltipObjectif">
                <li className="sportsee-customTooltipObjectifMin">{`${payload[0].value} min`}</li>
            </ul>
        ) : null;
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={835}
                height={320}
                data={averageSessions}
                margin={{
                    top: -150,
                    right: 0,
                    left: 0,
                    bottom: 50,
                }}
            >
                <XAxis
                    tickMargin={10}
                    padding={{ left: 10, right: 10 }}
                    dataKey="day"
                    tickLine={false}
                    fillOpacity={0.5}
                    style={{
                        transform: 'scale(0.9)',
                        transformOrigin: 'bottom'
                    }}
                    tick={{
                        fill: "#FFFFFF",
                        fontWeight: 500,
                        fontSize: 12
                    }}
                    axisLine={false}
                    interval="preserveStartEnd" />
                <YAxis
                    dataKey="min"
                    stroke="rgba(255, 255, 255, 0.9)"
                    hide={true}
                    domain={[0, 'dataMax + 75']}
                />
                <Tooltip cursor={false} content={<CustomTooltip />} />
                <Line
                    type="monotone"
                    dataKey="min"
                    stroke="rgba(255,255,255, 0.6)"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        stroke: "rgba(255,255,255, 0.6)",
                        strokeWidth: 10,
                        r: 5,
                    }} />
            </LineChart>
        </ResponsiveContainer>
    );
}

AverageGraph.propTypes = {
    id: PropTypes.string.isRequired
};