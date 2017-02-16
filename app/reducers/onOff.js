const onOff = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_BOOL':
            return !state;
        default:
            return state;
    }
};

export default onOff;