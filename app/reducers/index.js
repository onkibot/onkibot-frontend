import { combineReducers } from 'redux';
import onOff from './onOff';
import { reducer as formReducer } from 'redux-form';

const onkibotApp = combineReducers({
    onOff,
    form: formReducer
})

export default onkibotApp;