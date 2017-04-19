const userSearch = (state = '', action) => {
    switch (action.type) {
        case 'SET_USER_SEARCH':
            return action.searchWord;
        default:
            return state;
    }
}

export default userSearch;
