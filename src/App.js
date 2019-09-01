import React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div>
			<Layout>
				<Route path='/' exact component={BurgerBuilder} />
				<Route path='/checkout' exact component={Checkout} />
			</Layout>
		</div>
	);
}

export default App;
