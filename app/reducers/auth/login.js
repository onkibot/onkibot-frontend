const login = (state = {
    isFetching: false,
    errorMessage: ''
}, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                isFetching: true
            };

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            };

        case 'LOGIN_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.message
            };
        
        default:
            return state;
    }
};

export default login;