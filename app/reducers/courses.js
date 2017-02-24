const courses = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COURSE':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    description: action.description
                }
            ];
        default:
            return state;
    }
};

export default courses;