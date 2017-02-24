import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import onOff from './onOff';
import auth from './auth/';

const onkibotApp = combineReducers({
    onOff,
    auth,
    form: formReducer,
    routing: routerReducer
})

export default onkibotApp;