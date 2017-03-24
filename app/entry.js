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
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import TheButton from './components/pages/TheButton';
import Courses from './components/pages/Courses';
import CreateCourse from './components/pages/CreateCourse';
import Categories from './components/pages/Categories';
import CreateCategory from './components/pages/CreateCategory';
import Resources from './components/pages/Resources';
import CreateResource from './components/pages/CreateResource';
import ResourceView from './components/pages/ResourceView';
import NotFound from './components/pages/NotFound';
import TaskContainer from './components/TaskContainer';
import { sessionUser } from './actions';

import './style.scss';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

const store = createStoreWithMiddleware(
    onkibotApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(sessionUser());

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={history}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index} />
                    <Route path="login" component={Login} />
                    <Route path="signup" component={Signup} />
                    <Route path="taskcontainer" component={TaskContainer} />
                    <Route path="button" component={TheButton} />
                    <Route path="courses" component={Courses} />
                    <Route path="courses/create" component={CreateCourse} />
                    <Route path="courses/:courseId/categories" component={Categories} />
                    <Route path="courses/:courseId/categories/create" component={CreateCategory} />
                    <Route path="courses/:courseId/categories/:categoryId/resources" component = {Resources} />
                    <Route path="courses/:courseId/categories/:categoryId/resources/create" component = {CreateResource} />
                    <Route path="courses/:courseId/categories/:categoryId/resources/:resourceId/resourceView" component = {ResourceView} />
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        </MuiThemeProvider>
    </Provider>
, document.querySelector('#root'));
