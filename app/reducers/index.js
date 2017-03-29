import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import onOff from './onOff';
import auth from './auth/';
import courses from './courses';
import categories from './categories';
import resources from './resources';
import addedExternalResources from './addedExternalResources';

const onkibotApp = combineReducers({
    onOff,
    auth,
    courses,
    categories,
    resources,
    addedExternalResources,
    form: formReducer,
    routing: routerReducer
});

export default onkibotApp;
