const login = (state = {
    isFetching: false,
    errorMessage: ''
}, action) => {
    switch (action.type) {
        case 'SIGNUP_REQUEST':
            return {
                ...state,
                isFetching: true
            };

        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                isFetching: false,
                errorMessage: ''
            };

        case 'SIGNUP_FAILURE':
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