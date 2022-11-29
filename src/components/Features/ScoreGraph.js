import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import useDatas from '../../datas/useDatas';
import Modelisation from './modelisation';

import "../../styles/ScoreGraph.css"

export default function ScoreGraph(props) {
    let formatedData = [];
    let score;
    let userScore = [];

    let { data, loading, error } = useDatas("http://localhost:3000/user/" + props.id, props.id);

    if (loading) return <h1>Loading...</h1>

    if (error) {
        console.log(error);
    }

    if (data !== null) {
        formatedData = new Modelisation(data);
        score = formatedData.todayScore || formatedData.score
        userScore = [{ value: score }, { value: 1 - score }]
    }

    return (
        <div className="sportsee-scoreGraph">
            <h2 className="score-title">Score</h2>
            <p className="score-result">{score * 100}%</p>
            <p className="score-comment">
                de votre <br /> objectif
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={730} height={250}>
                    <Pie
                        data={userScore}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        fill="transparent"
                        stroke="transparent"
                        animationDuration={700}
                    >
                        <Cell fill="red" cornerRadius={50} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
