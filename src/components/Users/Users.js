import React from 'react'
import { useParams } from 'react-router'

import HorizontalNav from '../Features/HorizontalNav'
import VerticalNav from '../Features/VerticalNav'
import useDatas from '../../datas/useDatas'
import {dataMock} from '../../datas/mocks'
import '../../styles/Home.css'
import ActivityGraph from '../Features/ActivityGraph'

export default function Users() {
    const id = useParams().id
    let firstName = '';

    let { data, loading, error } = useDatas("http://localhost:3000/user/" + id)


    if (loading) return <h1>Loading...</h1>

    if (error) {
        console.log(error)
        for(let i = 0; i < dataMock.length; i++) {
            if(dataMock[i].data.id === parseInt(id)) {
                data = dataMock[i].data
            }
        }
    }

    if (data !== null) {
        firstName = data.userInfos.firstName
    }

    return (
        <div className="App">
            <VerticalNav />
            <div className="sportsee-center">
                <HorizontalNav />
                <div className="sportsee-centerText">
                    <h1>Bonjour <span>{firstName}</span></h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <ActivityGraph />
            </div>

        </div>
    )
}
