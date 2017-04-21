const navbarOpen = (state = false, action) => {
    switch (action.type) {
        case 'SET_NAVBAR_OPEN':
            return action.open;
        case '@@router/LOCATION_CHANGE':
            return false;
        default:
            return state;
    }
};

export default navbarOpen;
