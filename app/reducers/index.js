import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import navbarOpen from './navbarOpen';
import auth from './auth/';
import courses from './courses';
import categories from './categories';
import resources from './resources';
import externalResources from './externalResources';
import resourceFeedback from './resourceFeedback';
import users from './users';
import userSearch from './userSearch';
import error from './error';

const onkibotApp = combineReducers({
    navbarOpen,
    auth,
    courses,
    categories,
    resources,
    externalResources,
    resourceFeedback,
    users,
    userSearch,
    error,
    form: formReducer,
    routing: routerReducer
});

export default onkibotApp;
