import { combineReducers } from 'redux';

import login from './login';
import logout from './logout';
import signup from './signup';
import session from './session';

const auth = combineReducers({
    login,
    logout,
    signup,
    session
});

export default auth;
