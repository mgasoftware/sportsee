import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import useDatas from '../../datas/useDatas';
import Modelisation from './modelisation';
import '../../styles/PerfGraph.css';

export default function PerfGraph(props) {
    let formatedData = [];
    let dataPerf = [];

    let { data, loading, error } = useDatas("http://localhost:3000/user/" + props.id + "/performance", props.id);

    if (loading) return <h1>Loading...</h1>

    if (error) {
        console.log(error);
    }

    if (data !== null) {
        formatedData = new Modelisation(data);
        dataPerf = formatedData.formatedPerf;
    }

    
    return (
        <ResponsiveContainer width="94%" className="sportsee-perfGraph">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataPerf}>
                <PolarGrid stroke="#FFFFFF" radialLines={false}/>
                <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" tickLine={false} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}
