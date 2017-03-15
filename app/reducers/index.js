import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import onOff from './onOff';
import auth from './auth/';
import courses from './courses';
import addedExternalResources from './addedExternalResources';
import categories from './categories';

const onkibotApp = combineReducers({
    onOff,
    auth,
    courses,
    categories,
    addedExternalResources,
    form: formReducer,
    routing: routerReducer
});

export default onkibotApp;
