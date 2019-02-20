import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Home from './containers/Home';
import Details from './containers/Details';
import configureStore from './configStore';

const store = configureStore()

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Route exact path='/' component={Home} />
				<Route exact path='/:id' component={Details} />
			</Layout>
		</BrowserRouter>
	</Provider>
);

export default App;
