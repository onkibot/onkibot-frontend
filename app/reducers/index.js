import { combineReducers } from 'redux';
import onOff from './onOff';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

const onkibotApp = combineReducers({
    onOff,
    form: formReducer,
    routing: routerReducer
})

export default onkibotApp;