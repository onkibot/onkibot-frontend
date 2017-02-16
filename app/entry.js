import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import onkibotApp from './reducers';
import OnkibotApp from './components/OnkibotApp';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = createStore(onkibotApp);

render(
	<MuiThemeProvider>
		<Provider store={store}>
			<OnkibotApp />
		</Provider>
	</MuiThemeProvider>
, document.querySelector('#root'));
