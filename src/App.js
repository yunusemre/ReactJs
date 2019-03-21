import './app.css';
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import Home from './containers/Home';
import Details from './containers/Details';
import NotFound from './containers/NotFound'
import configureStore from './configStore';

const store = configureStore();

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/:id" component={Details} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</Provider>
);

export default App;
