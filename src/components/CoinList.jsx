import React, { useEffect, useState} from 'react'
import coinGecko from '../api/coiGecko'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect( () => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await coinGecko.get('/coins/markets',{
                params: {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: 1, 
                    sparkline: false
                }
            })

            setCoins(response.data)
            setIsLoading(false)
        }
        fetchData()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default CoinList
