import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import onOff from './onOff';
import auth from './auth/';
import courses from './courses';
import addedExternalResources from './addedExternalResources';

const onkibotApp = combineReducers({
    onOff,
    auth,
    courses,
    addedExternalResources,
    form: formReducer,
    routing: routerReducer
})

export default onkibotApp;