import React from 'react'
import { useParams } from 'react-router'

import HorizontalNav from '../Features/HorizontalNav'
import VerticalNav from '../Features/VerticalNav'
import Datas from '../../datas/Datas'
import '../../styles/Home.css'

export default function Home() {
    const id = useParams()
    let firstName = '';

    const { data, loading, error } = Datas("http://localhost:3000/user/" + id.id)

    if (loading) return <h1>Loading...</h1>

    if (error) console.log(error)

    if (data !== null) {
        const userInfos = data.userInfos
        firstName = userInfos.firstName
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
            </div>

        </div>
    )
}
