import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import session from './session';

const auth = combineReducers({
    login,
    logout,
    session
});

export default auth;