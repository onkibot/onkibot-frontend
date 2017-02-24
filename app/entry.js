import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import onkibotApp from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/App';
import Index from './components/Index';
import Login from './components/Login';
import Signup from './components/Signup';
import TheButton from './components/TheButton';
import NotFound from './components/NotFound';

import './style.scss';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

const store = createStoreWithMiddleware(
    onkibotApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const history = syncHistoryWithStore(hashHistory, store)

const TestComponent = () => (
    <div>Test</div>
);

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
                    <Route path="login" component={Login} />
                    <Route path="signup" component={Signup} />
                    <Route path="button" component={TheButton} />
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
, document.querySelector('#root'));
