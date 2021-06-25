import React, { useEffect, useState} from 'react'
import coinGecko from '../api/coiGecko'
import Coin from './Coin'

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('');
    
    useEffect( () => {
        const fetchData = async () => {
            
            const response = await coinGecko.get('/coins/markets',{
                params: {
                    'vs_currency': 'usd',
                    order: 'market_cap_desc',
                    'per_page': 100,
                    page: 1, 
                    sparkline: false
                }
            })

            setCoins(response.data)
            
        }
        fetchData()
    },[])

    const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filterCoins = coins.filter((coin) =>
		coin.name.toLowerCase().includes(search.toLocaleLowerCase())
	);

    return (
        <div className='coin-app'>
			<div className='coin-search'>
				<h1 className='coin-text'>Search a Crypto</h1>
				<form>
					<input
						type='text'
						placeholder='Search'
						className='coin-input'
						onChange={handleChange}
					/>
				</form>
			</div>
			{filterCoins.map((coin) => {
				
				return (
					<Coin
						key={coin.id}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						marketCap={coin.market_cap}
						price={coin.current_price}
						volume={coin.total_volume}
						priceChange={coin.price_change_percentage_24h}
					/>
				);
			})}
		</div>
    )
}

export default CoinList
