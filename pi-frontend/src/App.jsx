import React from 'react';
import Router from './router';
import { Provider } from 'react-redux';
import MyContext from './contexts/myContext';
import store from './store';

import './global.css';

function App() {
	return (
		<Provider store={store}>
			<div className='App'>
				<Router />
			</div>
		</Provider>
	);
}

export default App;
