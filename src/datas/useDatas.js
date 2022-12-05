import { useEffect, useState } from 'react'
import axios from 'axios';

import { dataActivity, dataPerformance, dataAverageSessions, dataMock } from './mocks'

export default function useDatas(url, id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const api = false;

    useEffect(() => {
        setLoading(true)

        if (api) {
            axios
                .get(url)
                .then((response) => {
                    setData(response.data.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                })
        }

        else {
            if (url.includes("activity")) {
                for (let i = 0; i < dataActivity.length; i++) {
                    if (dataActivity[i].data.userId === +id) {
                        setData(dataActivity[i]?.data)
                        setLoading(false)
                    }
                }
            }
            else if (url.includes("performance")) {
                for (let i = 0; i < dataPerformance.length; i++) {
                    if (dataPerformance[i].data.userId === +id) {
                        setData(dataPerformance[i]?.data)
                        setLoading(false)
                    }
                }
            }
            else if (url.includes("average")) {
                for (let i = 0; i < dataAverageSessions.length; i++) {
                    if (dataActivity[i].data.userId === +id) {
                        setData(dataAverageSessions[i]?.data)
                        setLoading(false)
                    }
                }
            }
            else {
                for (let i = 0; i < dataMock.length; i++) {
                    if (dataMock[i].data.id === +id) {
                        setData(dataMock[i]?.data)
                        setLoading(false)
                    }
                }
            }
        }

    }, [url, api, id])

    return { data, loading, error }
}
