const session = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
        case 'SIGNUP_SUCCESS':
            return action.session;

        case 'LOGOUT_SUCCESS':
            return null;
        
        default:
            return state;
    }
};

export default session;