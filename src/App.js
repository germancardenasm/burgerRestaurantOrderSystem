import React, { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

import { Route, Switch } from 'react-router-dom';
import './App.css';
const Checkout = React.lazy(() => import('./containers/Checkout/Checkout'));

function App() {
	return (
		<div>
			<Layout>
				<Switch>
					<Route path='/' exact component={BurgerBuilder} />
					<Route
						path='/checkout'
						render={() => (
							<Suspense
								fallback={<div>Loading checkout page</div>}
							>
								<Checkout></Checkout>
							</Suspense>
						)}
					/>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
