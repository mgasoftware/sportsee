import React from 'react'
import { useParams } from 'react-router'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import useDatas from '../../datas/useDatas'
import { dataActivity } from '../../datas/mocks'
import '../../styles/ActivityGraph.css'
import Modelisation from './modelisation';

export default function ActivityGraph() {
    const id = useParams().id
    let formatedData = []
    let sessions = []

    let { data, loading, error } = useDatas("http://localhost:3000/user/" + id + "/activity")

    if (loading) return <h1>Loading...</h1>

    if (error) {
        console.log(error)
        for (let i = 0; i < dataActivity.length; i++) {
            if (dataActivity[i].data.userId === parseInt(id)) {
                data = dataActivity[i].data
            }
        }
    }

    if (data !== null) {
        formatedData = new Modelisation(data)
        sessions = formatedData.formatedActivity
    }

    console.log(sessions)

    return (
        <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
                width={500}
                height={300}
                data={sessions}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="kg" fill="#282D30" />
                <Bar dataKey="kcal" fill="#E60000" />
            </BarChart>
        </ResponsiveContainer>
    )
}
