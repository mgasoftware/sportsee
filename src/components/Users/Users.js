import React from 'react';
import { useParams } from 'react-router';

import '../../styles/Users.css';
import HorizontalNav from '../Features/HorizontalNav';
import VerticalNav from '../Features/VerticalNav';
import useDatas from '../../datas/useDatas';
import '../../styles/Home.css';
import ActivityGraph from '../Features/ActivityGraph';
import AverageGraph from '../Features/AverageGraph';
import PerfGraph from '../Features/PerfGraph';
import ScoreGraph from '../Features/ScoreGraph';
import Modelisation from '../Features/modelisation';
import Health from '../Features/Health';
import caloriesIcon from '../../assets/calories.svg'
import proteinesIcon from '../../assets/proteines.svg'
import carbsIcon from '../../assets/carbs.svg'
import fatIcon from '../../assets/fat.svg'
import Loading from '../Features/Loading';
import Error from '../Features/Error';

export default function Users() {
    const id = useParams().id;
    let firstName = '';
    let formatedData = [];
    let dataHealth = [];

    const name = ["Calories", "Proteines", "Glucides", "Lipides"];
    let { data, loading, error } = useDatas("http://localhost:3000/user/" + id, id);

    if (error) {
        console.log(error);
    }

    if (data !== null) {
        firstName = data.userInfos.firstName;
        formatedData = new Modelisation(data);
        dataHealth = formatedData.keyDatas;
    }

    return (
        <div className="App">
            <VerticalNav />
            <div className="sportsee-center">
                <HorizontalNav />
                {loading ? (<Loading />) : error ? (<Error />) :
                    (<div className="sportsee-body">
                        <div className="sportsee-main">
                            <div className="sportsee-centerText">
                                <h1>Bonjour <span>{firstName}</span></h1>
                                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                            </div>
                            <div>
                                <div className="sportsee-activity">
                                    <h3 className="sportsee-activityTitle">Activité quotidienne</h3>
                                    <ActivityGraph id={id} />
                                </div>
                                <div className="sportsee-graph">
                                    <div className="sportsee-average">
                                        <h3 className="sportsee-averageTitle">Durée moyenne des <br />sessions</h3>
                                        <div className="sportsee-averageBack"></div>
                                        <AverageGraph id={id} />
                                    </div>
                                    <div className="sportsee-radar">
                                        <PerfGraph id={id} />
                                    </div>
                                    <div className="sportsee-score">
                                        <ScoreGraph id={id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sportsee-health">
                            <Health name={name[0]} data={dataHealth.calorieCount} icon={caloriesIcon} />
                            <Health name={name[1]} data={dataHealth.proteinCount} icon={proteinesIcon} />
                            <Health name={name[2]} data={dataHealth.carbohydrateCount} icon={carbsIcon} />
                            <Health name={name[3]} data={dataHealth.lipidCount} icon={fatIcon} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}
