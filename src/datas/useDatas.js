import { useEffect, useState } from 'react'
import axios from 'axios';

import { dataActivity, dataPerformance, dataAverageSessions, dataMock } from './mocks'

export default function useDatas(url, id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [api, setAPI] = useState(true);
    const [urlMock, setUrlMock] = useState('');

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
                        setUrlMock(dataActivity[i].data)
                    }
                }
            }
            else if(url.includes("performance")) {
                setUrlMock(dataPerformance);
            }
            else if(url.includes("average")) {
                setUrlMock(dataAverageSessions);
            }
            else {
                for (let i = 0; i < dataMock.length; i++) {
                    if (dataMock[i].data.id === +id) {
                        setUrlMock(dataMock[i].data)
                    }
                }
            }
            
            fetch(urlMock)
            .then((response) => {
                setData(urlMock)
                console.log(response)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }, [url, api, urlMock, id])

    return { data, loading, error }
}
