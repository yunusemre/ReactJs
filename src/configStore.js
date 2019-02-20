import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const configureStore = () => {
	const middlewares = [thunk]

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(createLogger());
	}

	const composed = [applyMiddleware(...middlewares)]

	if (process.env.NODE_ENV === 'development') {
		/* eslint-disable */
		const devExtension =
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		if (devExtension) {
			composed.push(devExtension);
		}
		/* eslint-enable */
	}

	const store = createStore(rootReducer, compose(...composed));

	if (process.env.NODE_ENV === 'development' && module.hot) {
		module.hot.accept('./reducers', () => {
			// eslint-disable-next-line
			const nextRootReducer = require('./reducers').default
			store.replaceReducer(nextRootReducer);
		})
	}

	return store;
}

export default configureStore;
