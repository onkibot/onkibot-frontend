import { fetchSuccess as coursesFetchSuccess } from './courses';
import { fetchUsers } from '../actions/users';

export const toggleOnOff = () => ({
    type: 'TOGGLE_BOOL'
});

export const setUserSearch = searchWord => ({
    type: 'SET_USER_SEARCH',
    searchWord
});

export const createAddedExternalResource = (externalResource, courseId, categoryId) => ({
    type: 'ADDED_EXTERNAL_RESOURCES_CREATE',
    courseId,
    categoryId,
    externalResource
});

export const deleteAddedExternalResource = url => ({
    type: 'ADDED_EXTERNAL_RESOURCES_DELETE',
    url
});

export const clearAddedExternalResources = () => ({
    type: 'ADDED_EXTERNAL_RESOURCES_CLEAR'
});

const requestLogin = credentials => ({
    type: 'LOGIN_REQUEST',
    credentials
});

const receiveLogin = session => ({
    type: 'LOGIN_SUCCESS',
    session
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
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveLogin(json));
            coursesFetchSuccess(dispatch, json.attending);
            dispatch(fetchUsers());
        })
        .catch((err) => {
            dispatch(loginError(err));
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
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveSession(json));
            coursesFetchSuccess(dispatch, json.attending);
            dispatch(fetchUsers());
        })
        .catch((err) => {
            dispatch(sessionError(err));
        });
    };
};

const requestLogout = () => ({
    type: 'LOGOUT_REQUEST'
});

const receiveLogout = () => ({
    type: 'LOGOUT_SUCCESS'
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
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch((err) => {
            dispatch(logoutError(err));
        });
    };
};

const requestSignup = signupInfo => ({
    type: 'SIGNUP_REQUEST',
    signupInfo
});

const receiveSignup = session => ({
    type: 'SIGNUP_SUCCESS',
    session
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
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveSignup(json));
            coursesFetchSuccess(dispatch, json.attending);
            dispatch(fetchUsers());
        })
        .catch((err) => {
            dispatch(signupError(err));
        });
    };
};
