import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import useDatas from '../../datas/useDatas';
import Modelisation from './modelisation';
import '../../styles/PerfGraph.css';

/**
 * Display graph of user performance
 * @param {object} props 
 * @param {string} props.id
 * @returns {JSX.Element}
 */

export default function PerfGraph(props) {
    let formatedData = [];
    let dataPerf = [];

    let { data } = useDatas("http://localhost:3000/user/" + props.id + "/performance", props.id);

    if (data !== null) {
        formatedData = new Modelisation(data);
        dataPerf = formatedData.formatedPerf;
    }


    return (
        <ResponsiveContainer width="94%" className="sportsee-perfGraph">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataPerf}>
                <PolarGrid stroke="#FFFFFF" radialLines={false} />
                <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

PerfGraph.propTypes = {
    id: PropTypes.string.isRequired
};