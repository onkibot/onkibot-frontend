const logout = (state = {
    isFetching: false,
    errorMessage: ''
}, action) => {
    switch (action.type) {
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                isFetching: true
            };

        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            };

        case 'LOGOUT_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };

        default:
            return state;
    }
};

export default logout;
