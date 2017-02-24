export const toggleOnOff = () => {
    return {
        type: 'TOGGLE_BOOL'
    };
};

const requestLogin = (credentials) => {
    return {
        type: 'LOGIN_REQUEST',
        isFetching: true,
        isAuthenticated: false,
        credentials
    };
};

const receiveLogin = (session) => {
    return {
        type: 'LOGIN_SUCCESS',
        isFetching: false,
        isAuthenticated: true,
        session
    };
};

const loginError = (message) => {
    return {
        type: 'LOGIN_FAILURE',
        isFetching: false,
        isAuthenticated: false,
        message
    };
};

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

        return fetch('/api/session', config)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            dispatch(receiveLogin(json))
        })
        .catch((err) => {
            dispatch(loginError(err))
        });
    };
};

const requestLogout = () => {
    return {
        type: 'LOGOUT_REQUEST',
        isFetching: true,
        isAuthenticated: true
    };
};

const receiveLogout = () => {
    return {
        type: 'LOGOUT_SUCCESS',
        isFetching: false,
        isAuthenticated: false
    };
};

const logoutError = (message) => {
    return {
        type: 'LOGOUT_ERROR',
        isFetching: false,
        isAuthenticated: false,
        message
    }
};

export const logoutUser = () => {
    const config = {
        method: 'DELETE',
        credentials: 'same-origin'
    };

    return (dispatch) => {
        dispatch(requestLogout());

        return fetch('/api/session', config)
        .then((response) => {
            dispatch(receiveLogout());
        })
        .catch((err) => {
            dispatch(logoutError(err));
        });
    }
};

const requestSignup = () => {
    return {
        type: 'SIGNUP_REQUEST',
        isFetching: true,
        isAuthenticated: true
    };
};

const receiveSignup = (session) => {
    return {
        type: 'SIGNUP_SUCCESS',
        isFetching: false,
        isAuthenticated: false,
        session: session
    };
};

const signupError = (message) => {
    return {
        type: 'SIGNUP_ERROR',
        isFetching: false,
        isAuthenticated: false,
        message
    }
};

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

        return fetch('/api/signup', config)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            dispatch(receiveSignup(json));
        })
        .catch((err) => {
            dispatch(signupError(err));
        });
    }
};