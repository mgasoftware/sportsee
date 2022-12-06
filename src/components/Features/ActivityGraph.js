import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import useDatas from '../../datas/useDatas';
import '../../styles/ActivityGraph.css';
import Modelisation from './modelisation';

/**
 * Display graph of user activity
 * @param {object} props 
 * @param {string} props.id
 * @returns {JSX.Element}
 */

export default function ActivityGraph(props) {
    let formatedData = [];
    let sessions = [];

    let { data } = useDatas("http://localhost:3000/user/" + props.id + "/activity", props.id);

    if (data !== null) {
        formatedData = new Modelisation(data);
        sessions = formatedData.formatedActivity;
    }

    function CustomTooltip({ active, payload }) {
        return active && payload ? (
            <ul className="sportsee-customTooltip">
                <li className="sportsee-customTooltipCalorie">{`${payload[0].value} kg`}</li>
                <li className="sportsee-customTooltipWeight">{`${payload[1].value} kCal`}</li>
            </ul>
        ) : null;
    }

    return (
        <ResponsiveContainer width="100%" height="100%" >
            <BarChart
                data={sessions}
                barSize={7}
                barGap={8}
                margin={{
                    top: 50,
                    right: 35,
                    left: 40,
                    bottom: 55,
                }}>
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis tickLine={false} tickMargin="16" dataKey="index" padding={{ left: -45, right: -45 }} />
                <YAxis tickLine={false} tickMargin="32" dataKey="kcal" orientation="right" axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                    verticalAlign="top"
                    align="right"
                    iconType={'circle'}
                    iconSize={'.5rem'}
                    wrapperStyle={{
                        top: '-0%',
                        right: '1rem',
                        lineHeight: '40px',
                    }} />
                <Bar name="Poids (kg)" dataKey="kg" fill="#282D30" barSize={8} radius={[50, 50, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" dataKey="kcal" fill="#E60000" barSize={8} radius={[50, 50, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}

ActivityGraph.propTypes = {
    id: PropTypes.string.isRequired
};