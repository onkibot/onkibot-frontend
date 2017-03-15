export const toggleOnOff = () => {
    return {
        type: 'TOGGLE_BOOL'
    };
};

export const createAddedExternalResource = (externalResource) => {
    return {
        type: 'ADDED_EXTERNAL_RESOURCES_CREATE',
        externalResource
    };
};

export const deleteAddedExternalResource = (url) => {
    return {
        type: 'ADDED_EXTERNAL_RESOURCES_DELETE',
        url
    };
};

export const clearAddedExternalResources = () => {
    return {
        type: 'ADDED_EXTERNAL_RESOURCES_CLEAR'
    }
}

const requestLogin = (credentials) => {
    return {
        type: 'LOGIN_REQUEST',
        credentials
    };
};

const receiveLogin = (session) => {
    return {
        type: 'LOGIN_SUCCESS',
        session
    };
};

const loginError = (message) => {
    return {
        type: 'LOGIN_FAILURE',
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

        return fetch('/api/v1/session', config)
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

const requestSession = () => {
    return {
        type: 'SESSION_REQUEST'
    };
};

const receiveSession = (session) => {
    return {
        type: 'SESSION_SUCCESS',
        session
    };
};

const sessionError = (message) => {
    return {
        type: 'SESSION_ERROR',
        message
    };
};

export const sessionUser = () => {
    const config = {
        method: 'GET',
        credentials: 'same-origin'
    };

    return (dispatch) => {
        dispatch(requestSession())

        return fetch('/api/v1/session', config)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            dispatch(receiveSession(json));
        })
        .catch((err) => {
            dispatch(sessionError(err));
        })
    };
};

const requestLogout = () => {
    return {
        type: 'LOGOUT_REQUEST'
    };
};

const receiveLogout = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    };
};

const logoutError = (message) => {
    return {
        type: 'LOGOUT_ERROR',
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

        return fetch('/api/v1/session', config)
        .then((response) => {
            dispatch(receiveLogout());
        })
        .catch((err) => {
            dispatch(logoutError(err));
        });
    }
};

const requestSignup = (signupInfo) => {
    return {
        type: 'SIGNUP_REQUEST',
        signupInfo
    };
};

const receiveSignup = (session) => {
    return {
        type: 'SIGNUP_SUCCESS',
        session
    };
};

const signupError = (message) => {
    return {
        type: 'SIGNUP_ERROR',
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

        return fetch('/api/v1/signup', config)
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

let nextCourseId = 0
export const addCourse = ({ name, description }) => {
    return {
        type: 'ADD_COURSE',
        id: nextCourseId++,
        name,
        description
    }
};

let nextCategoryId = 0
export const addCategory = ({ name, description, courseId }) => {
    return {
        type: 'ADD_CATEGORY',
        id: nextCategoryId++,
        name,
        description,
        courseId
    }
};
