import React from 'react'
import { useParams } from 'react-router'

import '../../styles/Users.css'
import HorizontalNav from '../Features/HorizontalNav'
import VerticalNav from '../Features/VerticalNav'
import useDatas from '../../datas/useDatas'
import '../../styles/Home.css'
import ActivityGraph from '../Features/ActivityGraph'

export default function Users() {
    const id = useParams().id
    let firstName = '';

    let { data, loading, error } = useDatas("http://localhost:3000/user/" + id, id)


    if (loading) return <h1>Loading...</h1>

    if (error) {
        console.log(error)
    }

    if (data !== null) {
        firstName = data.userInfos.firstName
    }

    return (
        <div className="App">
            <VerticalNav />
            <div className="sportsee-center">
                <HorizontalNav />
                <div className="sportsee-main">
                    <div className="sportsee-centerText">
                        <h1>Bonjour <span>{firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div className="sportsee-activity">
                        <h3 className="sportsee-activityTitle">Activité quotidienne</h3>
                        <ActivityGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}
