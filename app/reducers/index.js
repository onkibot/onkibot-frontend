import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import navbarOpen from './navbarOpen';
import auth from './auth/';
import courses from './courses';
import categories from './categories';
import resources from './resources';
import externalResources from './externalResources';
import users from './users';
import userSearch from './userSearch';

const onkibotApp = combineReducers({
    navbarOpen,
    auth,
    courses,
    categories,
    resources,
    externalResources,
    users,
    userSearch,
    form: formReducer,
    routing: routerReducer
});

export default onkibotApp;
