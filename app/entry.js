import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import onkibotApp from './reducers';
import App from './components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


injectTapEventPlugin();

const store = createStore(onkibotApp);
const history = syncHistoryWithStore(hashHistory, store)

const TestComponent = () => (
    <div>Test</div>
);

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="login" component={TestComponent} />
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
, document.querySelector('#root'));
