import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route exact path='/' component={CoinSummaryPage} />
			</BrowserRouter>
		</div>
	);
};

export default App;
