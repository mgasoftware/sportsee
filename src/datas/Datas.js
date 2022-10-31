import { useEffect, useState } from 'react'

export default function Datas(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const json = await response.json()
                setData(json.data)
                setLoading(false);
            } catch (error) {
                console.log(error)
                setError(error)
            }
        }
        fetchData()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return {data, loading, error}
}
