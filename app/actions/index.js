import { fetchSuccess as coursesFetchSuccess } from './courses';
import { fetchUsers } from '../actions/users';
import { setError } from './error';

export const setNavbarOpen = open => ({
    type: 'SET_NAVBAR_OPEN',
    open
});

export const setUserSearch = searchWord => ({
    type: 'SET_USER_SEARCH',
    searchWord
});

const requestLogin = credentials => ({
    type: 'LOGIN_REQUEST',
    credentials
});

const loginError = message => ({
    type: 'LOGIN_FAILURE',
    message
});

export const loginUser = (credentials) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(credentials)
    };

    return (dispatch) => {
        dispatch(requestLogin(credentials));

        return fetch('/api/v1/session', config)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve();
            } else {
                return response.json().then((json) => {
                    throw json;
                });
            }
        })
        .then(() => {
            location.href = '/';
        })
        .catch((err) => {
            dispatch(loginError(err));
            dispatch(setError(err));
        });
    };
};

const requestSession = () => ({
    type: 'SESSION_REQUEST'
});

const receiveSession = session => ({
    type: 'SESSION_SUCCESS',
    session
});

const sessionError = message => ({
    type: 'SESSION_ERROR',
    message
});

export const sessionUser = () => {
    const config = {
        method: 'GET',
        credentials: 'same-origin'
    };

    return (dispatch) => {
        dispatch(requestSession());

        return fetch('/api/v1/session', config)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                return null;
            }
        })
        .then((session) => {
            if (session) {
                dispatch(receiveSession(session));
                coursesFetchSuccess(dispatch, session.attending);
                dispatch(fetchUsers());
            }
        })
        .catch((err) => {
            dispatch(sessionError(err));
            dispatch(setError(err));
        });
    };
};

const requestLogout = () => ({
    type: 'LOGOUT_REQUEST'
});

const logoutError = message => ({
    type: 'LOGOUT_ERROR',
    message
});

export const logoutUser = () => {
    const config = {
        method: 'DELETE',
        credentials: 'same-origin'
    };

    return (dispatch) => {
        dispatch(requestLogout());

        return fetch('/api/v1/session', config)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve();
            } else {
                return response.json().then((json) => {
                    throw json;
                });
            }
        })
        .then(() => {
            location.href = '/';
        })
        .catch((err) => {
            dispatch(logoutError(err));
            dispatch(setError(err));
        });
    };
};

const requestSignup = signupInfo => ({
    type: 'SIGNUP_REQUEST',
    signupInfo
});

const signupError = message => ({
    type: 'SIGNUP_ERROR',
    message
});

export const signupUser = (signupInfo) => {
    const config = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin',
        body: JSON.stringify(signupInfo)
    };

    return (dispatch) => {
        dispatch(requestSignup());

        return fetch('/api/v1/signup', config)
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            } else {
                return response.json().then((json) => {
                    throw json;
                });
            }
        })
        .then(() => {
            location.href = '/';
        })
        .catch((err) => {
            dispatch(signupError(err));
            dispatch(setError(err));
        });
    };
};
