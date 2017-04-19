import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import onOff from './onOff';
import auth from './auth/';
import courses from './courses';
import categories from './categories';
import resources from './resources';
import addedExternalResources from './addedExternalResources';
import users from './users';
import userSearch from './userSearch';

const onkibotApp = combineReducers({
    onOff,
    auth,
    courses,
    categories,
    resources,
    addedExternalResources,
    users,
    userSearch,
    form: formReducer,
    routing: routerReducer
});

export default onkibotApp;
